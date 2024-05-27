import { memo } from 'react';
import { CITIES } from '../../const';
import { useAppDispatch } from '../../hocks';
import { changeCity } from '../../store';
import { CityType } from '../../types/cityType';
import { CitiesElement } from './citiesElement/citiesElement';

function CitiesList() {
  const dispatch = useAppDispatch();
  const handleCityChange = (city: CityType) => {
    dispatch(changeCity(city));
  };
  return (
    <ul className="locations__list tabs__list">
      {Object.values(CITIES).map((city) => (
        <CitiesElement
          key={city.name}
          city={city}
          onCityChange={handleCityChange}
        />
      ))}
    </ul>
  );
}

const MemoizedCitiesList = memo(CitiesList);

export default MemoizedCitiesList;
