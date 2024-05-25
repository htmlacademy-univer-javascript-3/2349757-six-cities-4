import { CITIES } from '../../const';
import { useAppDispatch } from '../../hocks';
import { setCity } from '../../store/action';
import { CityType } from '../../types/types';
import CitiesElement from './citiesElement/citiesElement';

function CitiesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const onCityChange = (city: CityType) => {
    dispatch(setCity(city));
  };

  return(
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <CitiesElement
          key={city.name}
          city={city}
          onCityChange={onCityChange}
        />
      ))}
    </ul>
  );
}

export default CitiesList;
