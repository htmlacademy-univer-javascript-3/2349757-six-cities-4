import { OfferType } from '../../types/types';
import NearbyOffer from './nearbyOffer/nearbyOffer';

type NearbyOffersListProps = {
  offersList: OfferType[];
  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
};

function NearbyOffersList({ offersList, onMouseEnter, onMouseLeave }: NearbyOffersListProps): JSX.Element {

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offersList.map((offer) => (<NearbyOffer key={offer.id} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} offer={offer}/>))}
      </div>
    </section>
  );
}

export default NearbyOffersList;
