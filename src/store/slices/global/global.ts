import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CITIES, NameSpace, SortTypes } from '../../../const';
import { CityType } from '../../../types/cityType';

type GlobalState = {
  selectedCity: CityType;
  selectedSortType: SortTypes;
};

const initialState: GlobalState = {
  selectedCity: CITIES.Paris,
  selectedSortType: SortTypes.Popular,
};

export const globalState = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<CityType>) => {
      state.selectedCity = action.payload;
    },
    changeSortingType: (state, action: PayloadAction<SortTypes>) => {
      state.selectedSortType = action.payload;
    },
  },
});

export const { changeCity, changeSortingType } = globalState.actions;
