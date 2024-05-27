import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { OfferType } from '../../../types/offerType';
import { fetchNearbyAction } from './apiActions';
import { updateFavorites } from './utils';

type NearbyOffersData = {
  nearby: OfferType[];
  isNearbyOffersLoading: boolean;
  hasError: boolean;
};

const initialNearbyData: NearbyOffersData = {
  nearby: [],
  isNearbyOffersLoading: false,
  hasError: false,
};

export const nearbyOffersData = createSlice({
  name: NameSpace.NearbyOffersData,
  initialState: initialNearbyData,
  reducers: {
    updateFewNearby: (state, action: PayloadAction<OfferType>) => {
      updateFavorites(state.nearby, action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNearbyAction.pending, (state) => {
        state.hasError = false;
        state.isNearbyOffersLoading = true;
      })
      .addCase(fetchNearbyAction.fulfilled, (state, action) => {
        state.hasError = false;
        state.nearby = action.payload;
        state.isNearbyOffersLoading = false;
      })
      .addCase(fetchNearbyAction.rejected, (state) => {
        state.hasError = true;
        state.isNearbyOffersLoading = false;
      });
  },
});

export const { updateFewNearby } = nearbyOffersData.actions;
