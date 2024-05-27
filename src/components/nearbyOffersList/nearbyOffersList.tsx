import { OfferType } from '../../types/offerType';
import NearOffer from './nearbyOffer/nearbyOffer';

type NearOffersListProps = {
  offers: OfferType[];
};

function NearOffersList({offers}: NearOffersListProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((offer) => (
          <NearOffer key={offer.id} offer={offer} />
        ))}
      </div>
    </section>

  );
}

export default NearOffersList;
