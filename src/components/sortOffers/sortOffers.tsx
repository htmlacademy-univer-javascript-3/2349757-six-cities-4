import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hocks';
import { SORT } from '../../const';
import { setSort } from '../../store/action';

function SortOffers(): JSX.Element {
  const sort = useAppSelector((state) => state.selectedSortType);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <form className="places__sorting" action="#" method="get" onClick={() => setIsOpen(!isOpen)}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {sort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {Object.values(SORT).map((type) => (
          <li
            key={type}
            className={`places__option ${sort === type.toString() && 'places__option--active'}`}
            tabIndex={0}
            onClick={() => dispatch(setSort(type))}
          >
            {type}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortOffers;
