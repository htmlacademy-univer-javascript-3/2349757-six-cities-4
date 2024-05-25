
import HeaderLogo from '../../components/headerLogo/headerLogo';
import MainOffersList from '../../components/mainOffersList/mainOffersList';
import { Link } from 'react-router-dom';
import { OfferType } from '../../types/types';
import { useAppSelector } from '../../hocks';
import { useEffect, useState } from 'react';
import CitiesList from '../../components/citiesList/citiesList';
import SortOffers from '../../components/sortOffers/sortOffers';
import { Map } from '../../components/map/map';


function MainPage(): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const [chooseOffer, setChooseOffer] = useState<OfferType | undefined>(undefined);
  const [offersInCity, setOffersInSity] = useState<OfferType[]>(offers);

  const onMouseEnter = (id: string) => {
    setChooseOffer(offers.find((offer) => offer.id === id));
  };
  const onMouseLeave = () => {
    setChooseOffer(undefined);
  };
  useEffect(() => {
    setOffersInSity(offers.filter((offer) => offer.city.name === city.name));
  }, [city, offers]);
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <HeaderLogo />
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to={'/login'} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link to={'/login'} className="header__nav-link">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersInCity.length} places to stay in {city.name}</b>
              <SortOffers />
              <MainOffersList offersList={offersInCity} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offersInCity} city={city} selectedOffer={chooseOffer} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
