import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { OfferType } from '../../../types/offerType';
import { NameSpace } from '../../../const';
import { fetchOffersAction } from './apiActions';
import { updateOffers } from './utils';

type FewOffersData = {
  offers: OfferType[];
  isOffersLoading: boolean;
  hasError: boolean;
};

const initialState: FewOffersData = {
  offers: [],
  isOffersLoading: false,
  hasError: false,
};

export const fewOffersData = createSlice({
  name: NameSpace.FewOffersData,
  initialState,
  reducers: {
    updateFewOffers: (state, action: PayloadAction<OfferType>) => {
      updateOffers(state.offers, action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.hasError = false;
        state.isOffersLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.hasError = true;
        state.isOffersLoading = false;
      });
  },
});

export const { updateFewOffers: updateFewOffers } = fewOffersData.actions;
