import { OfferType } from '../../types/offerType';
import FavoritesOffer from './favoriteOffer/favoriteOffer';


type favoritesListProps = {
  offers: OfferType[];
};

function favoritesList({offers}: favoritesListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (<FavoritesOffer key={offer.id} offerData={offer}/>))}
    </div>
  );
}

export default favoritesList;
