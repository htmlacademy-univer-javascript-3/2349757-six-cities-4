import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { globalState } from './slices/global';
import { userData } from './slices/user';
import { fewOffersData } from './slices/fewOffers';
import { singleOfferData } from './slices/singleOffer';
import { favoritesData } from './slices/favorites';
import { nearbyOffersData } from './slices/nearOffers';
import { reviewsData } from './slices/review';

export const reducer = combineReducers({
  [NameSpace.App]: globalState.reducer,
  [NameSpace.User]: userData.reducer,
  [NameSpace.FewOffersData]: fewOffersData.reducer,
  [NameSpace.SingleOfferData]: singleOfferData.reducer,
  [NameSpace.favoritesData]: favoritesData.reducer,
  [NameSpace.NearbyOffersData]: nearbyOffersData.reducer,
  [NameSpace.ReviewsData]: reviewsData.reducer
});
