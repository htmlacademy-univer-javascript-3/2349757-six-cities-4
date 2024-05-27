import { OfferType } from '../../../types/offerType';

export const updateOffers = (offers: OfferType[], updatedOffer: OfferType) => {
  const offerIndex = offers.findIndex((element) => element.id === updatedOffer.id);
  if (offerIndex !== -1) {
    offers[offerIndex] = updatedOffer;
  }
};
