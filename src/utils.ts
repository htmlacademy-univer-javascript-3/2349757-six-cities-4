import { SORT } from './const';
import { OfferType } from './types/types';

export const sortingOffers = (offers: OfferType[], sort: string) : OfferType[] => {
  const sortedOffers = [...offers];
  switch (sort){
    case SORT.Popular: {
      return sortedOffers;
    }
    case SORT.LowToHigh: {
      return sortedOffers.sort((A, B) => A.price - B.price);
    }
    case SORT.HighToLow: {
      return sortedOffers.sort((A, B) => B.price - A.price);
    }
    case SORT.TopRatedFirst: {
      return sortedOffers.sort((A, B) => B.rating - A.rating);
    }
    default:
      throw new Error('Invalid sort type error');
  }
};
