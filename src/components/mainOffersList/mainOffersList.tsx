import { memo } from 'react';
import { useAppSelector } from '../../hocks';
import { getSelectedSortType } from '../../store';
import { OfferType } from '../../types/offerType';
import { sortOffers } from '../../utils';
import MainOffer from './mainOffer/mainOffer';

type MainOffersListProps = {
  offers: OfferType[];
  onMouseEnter: (point: OfferType) => void;
  onMouseLeave: () => void;
};

function MainOffersList({offers, onMouseEnter, onMouseLeave}: MainOffersListProps): JSX.Element {
  const selectedSortType = useAppSelector(getSelectedSortType);
  return (
    <div className="cities__places-list places__list tabs__content">
      {sortOffers(offers, selectedSortType).map((offer) => (
        <MainOffer key={offer.id} offer={offer} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
      ))}
    </div>
  );
}

const MemoizedOffersList = memo(MainOffersList);

export default MemoizedOffersList;
