import { useAppSelector } from '../../../hocks';
import { CityType } from '../../../types/types';

type CitiesElementType = {
  city: CityType;
  onCityChange: (city: CityType) => void;
};

function CitiesElement({city, onCityChange}: CitiesElementType): JSX.Element {
  return(
    <li className="locations__item" onClick={(evt) => {
      evt.preventDefault();
      onCityChange(city);
    }}
    >
      <a className={
        `locations__item-link
        tabs__item
        ${useAppSelector((state) => state.city) === city ? 'tabs__item--active' : ''}`
      } href="#"
      >
        <span>{city.name}</span>
      </a>
    </li>
  );
}

export default CitiesElement;
