import { FavoriteType } from '../../types/types';
import FavoriteOffer from './favoriteOffer/favoriteOffer';

type FavoriteOffersProps = {
  favoriteOffers: FavoriteType[];
}

function FavoriteOffers({favoriteOffers}: FavoriteOffersProps): JSX.Element {
  const offersList: JSX.Element[] = [];
  for (let i = 0; i < favoriteOffers.length; i ++){
    offersList.push(<FavoriteOffer favoriteOffer={favoriteOffers[i]}/>);
  }
  return (
    <div className="favorites__places">
      {offersList}
    </div>
  );
}

export default FavoriteOffers;
