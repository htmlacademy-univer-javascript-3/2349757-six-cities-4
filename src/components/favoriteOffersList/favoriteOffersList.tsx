import { OfferType } from '../../types/offerType';
import FavoriteOffer from './favoriteOffer/favoriteOffer';


type FavoriteOffersListProps = {
  offers: OfferType[];
};

function FavoriteOffersList({offers}: FavoriteOffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (<FavoriteOffer key={offer.id} offerData={offer}/>))}
    </div>
  );
}

export default FavoriteOffersList;
