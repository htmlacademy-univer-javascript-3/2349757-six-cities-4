
import { FavoriteType } from '../../types/types';
import FavoriteOffer from './favoriteOffer/favoriteOffer';

type FavoriteOffersProps = {
  favoriteOffersList: FavoriteType[];
}

function FavoriteOffersList({favoriteOffersList}: FavoriteOffersProps): JSX.Element {
  return (
    <div className="favorites__places">
      {favoriteOffersList.map((favoriteOffer) => (<FavoriteOffer key={favoriteOffer.id} favoriteOffer={favoriteOffer}/>))}
    </div>
  );
}

export default FavoriteOffersList;
