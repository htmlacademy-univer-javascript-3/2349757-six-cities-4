import MainOffer from './mainOffer/mainOffer';
import { OfferType } from '../../types/types';
import { useAppSelector } from '../../hocks';
import { sortingOffers } from '../../utils';

type MainOffersListProps = {
  offersList: OfferType[];
  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
}


function MainOffersList({ offersList, onMouseEnter, onMouseLeave }: MainOffersListProps): JSX.Element {
  const sortType = useAppSelector((state) => state.selectedSortType);

  return (
    <div className="cities__places-list places__list tabs__content">
      {sortingOffers(offersList, sortType).map((offer)=>(
        <MainOffer key={offer.id} offer={offer} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
      ))}
    </div>
  );
}

export default MainOffersList;
