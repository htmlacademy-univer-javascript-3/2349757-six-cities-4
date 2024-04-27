import { useState } from 'react';
import { OfferType } from '../../types/types';
import { Map } from '../map/map';
import MainOffer from '../mainOffersList/mainOffer/mainOffer';

type NearbyOffersListProps = {
  offersList: OfferType[];
};

function NearbyOffersList({ offersList }: NearbyOffersListProps): JSX.Element {

  const [chooseOffer, setChooseOffer] = useState<OfferType | undefined>(undefined);

  const mouseEnterHandler = (id: string) => {
    const selectedOffer = offersList.find((offer) => offer.id === id);
    if (selectedOffer !== undefined && selectedOffer !== chooseOffer) {
      setChooseOffer(selectedOffer);
    }
  };

  const mouseLeaveHandler = () => {
    setChooseOffer(undefined);
  };

  return (
    <>
      <section className="offer__map map">
        <Map offers={offersList} selectedOffer={chooseOffer} city={offersList[0].city} />
      </section>
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offersList.map((offer) => (<MainOffer key={offer.id} OnMouseEnter={mouseEnterHandler} OnMouseLeave={mouseLeaveHandler} offer={offer} />))}
        </div>
      </section>
    </>
  );
}

export default NearbyOffersList;
