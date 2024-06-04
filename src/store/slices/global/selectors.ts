import { NameSpace, SortTypes } from '../../../const';
import { CityType } from '../../../types/cityType';
import { State } from '../../../types/stateType';

export const getSelectedSortType = (state: State): SortTypes =>
  state[NameSpace.App].selectedSortType;

export const getSelectedCity = (state: State): CityType =>
  state[NameSpace.App].selectedCity;
