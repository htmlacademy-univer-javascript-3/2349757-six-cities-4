
import { useState } from 'react';
import MainOffer from './mainOffer/mainOffer';
import { Map } from '../map/map';
import { OfferType } from '../../types/types';

type MainOffersListProps = {
  offersList: OfferType[];
}


function MainOffersList({ offersList }: MainOffersListProps): JSX.Element {
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
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersList.length} places to stay in Amsterdam</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex={0}>Popular</li>
            <li className="places__option" tabIndex={0}>Price: low to high</li>
            <li className="places__option" tabIndex={0}>Price: high to low</li>
            <li className="places__option" tabIndex={0}>Top rated first</li>
          </ul>
        </form>
        <div className="cities__places-list places__list tabs__content">
          {offersList.map((offer) =>
            (<MainOffer key={offer.id} offer={offer} OnMouseEnter={mouseEnterHandler} OnMouseLeave={mouseLeaveHandler}/>))}
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map offers={offersList} selectedOffer={chooseOffer} city={offersList[0].city} />
        </section>
      </div>
    </div>
  );
}

export default MainOffersList;
