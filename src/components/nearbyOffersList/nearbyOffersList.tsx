import { OfferType } from '../../types/offerType';
import NearbyOffer from './nearbyOffer/nearbyOffer';

type NearbyOffersListProps = {
  offers: OfferType[];
};

function NearbyOffersList({offers}: NearbyOffersListProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((offer) => (
          <NearbyOffer key={offer.id} offer={offer} />
        ))}
      </div>
    </section>

  );
}

export default NearbyOffersList;
