import MemoizedCitiesList from '../../components/citiesList/citiesList';
import CityOffers from '../../components/cityOffers/cityOffers';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hocks';
import { getOffers, getSelectedCity } from '../../store';


function MainPage(): JSX.Element {
  const selectedCity = useAppSelector(getSelectedCity);
  const offers = useAppSelector(getOffers);
  const currentCityOffers = offers.filter(
    (offer) => offer.city.name === selectedCity.name
  );

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <MemoizedCitiesList />
          </section>
        </div>
        <CityOffers
          city={selectedCity}
          currentCityOffers={currentCityOffers}
        />
      </main>
    </div>
  );
}

export default MainPage;
