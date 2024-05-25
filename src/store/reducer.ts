import { createReducer } from '@reduxjs/toolkit';
import { CITIES, SORT } from '../const';
import { offersNearbyMock } from '../mocks/offersNearby';
import { CityType, OfferType } from '../types/types';
import { setOffers, setCity, setSelectedOffer, setSort, setLoadingState } from './action';


type StateType = {
  city: CityType;
  offers: OfferType[];
  offersNearby: OfferType[];
  selectedOffer: OfferType | undefined;
  selectedSortType: string;
  loadingState: boolean;
}

const initialState: StateType = {
  city: CITIES[0],
  offers: [],
  offersNearby: offersNearbyMock,
  selectedOffer: undefined,
  selectedSortType: SORT.Popular,
  loadingState: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSelectedOffer, (state, action) => {
      state.selectedOffer = action.payload;
    })
    .addCase(setSort, (state, action) => {
      state.selectedSortType = action.payload;
    })
    .addCase(setLoadingState, (state, action) => {
      state.loadingState = action.payload;
    });
});

export { reducer };
