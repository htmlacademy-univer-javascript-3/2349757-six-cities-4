import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CITIES, NameSpace, SORT_TYPES } from '../../../const';
import { CityType } from '../../../types/cityType';

type GlobalState = {
  selectedCity: CityType;
  selectedSortType: SORT_TYPES;
};

const initialState: GlobalState = {
  selectedCity: CITIES.Paris,
  selectedSortType: SORT_TYPES.Popular,
};

export const globalState = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<CityType>) => {
      state.selectedCity = action.payload;
    },
    changeSortingType: (state, action: PayloadAction<SORT_TYPES>) => {
      state.selectedSortType = action.payload;
    },
  },
});

export const { changeCity, changeSortingType } = globalState.actions;
