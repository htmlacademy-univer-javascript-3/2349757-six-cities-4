import { createReducer } from '@reduxjs/toolkit';
import { CITIES, SORT } from '../const';
import { offersMock } from '../mocks/offers';
import { offersNearbyMock } from '../mocks/offersNearby';
import { CityType, OfferType } from '../types/types';
import { getOffers, setCity, setSelectedOffer, setSort } from './action';


type StateType = {
  city: CityType;
  offers: OfferType[];
  offersNearby: OfferType[];
  selectedOffer: OfferType | undefined;
  selectedSortType: string;
}

const initialState: StateType = {
  city: CITIES[0],
  offers: offersMock,
  offersNearby: offersNearbyMock,
  selectedOffer: undefined,
  selectedSortType: SORT.Popular
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSelectedOffer, (state, action) => {
      state.selectedOffer = action.payload;
    })
    .addCase(setSort, (state, action) => {
      state.selectedSortType = action.payload;
    });
});

export { reducer };
