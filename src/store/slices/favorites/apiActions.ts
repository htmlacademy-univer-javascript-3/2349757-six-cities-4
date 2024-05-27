import { createAsyncThunk } from '@reduxjs/toolkit';
import { OfferType } from '../../../types/offerType';
import { AppDispatch, State } from '../../../types/stateType';
import { AxiosInstance } from 'axios';
import { APIRoute, NameSpace } from '../../../const';
import { favoriteDataType } from '../../../types/favoriteDataType';
import { updateFewOffers } from '../fewOffers';
import { updateSingleOffer } from '../singleOffer';
import { updateFewNearby } from '../nearOffers';
import { updateFewFavorites } from './favoritesData';

export const fetchfavoritesAction = createAsyncThunk<
  OfferType[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  `${NameSpace.favoritesData}/fetchfavorites`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferType[]>(APIRoute.Favorite);
    return data;
  }
);

export const changefavoriteStatusAction = createAsyncThunk<
  OfferType,
  favoriteDataType,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  `${NameSpace.favoritesData}/changeFavoriteStatus`,
  async ({ status, offerId }, { rejectWithValue, extra: api, dispatch }) => {
    try {
      const { data } = await api.post<OfferType>(
        `${APIRoute.Favorite}/${offerId}/${status ? 0 : 1}`
      );

      dispatch(updateFewOffers(data));
      dispatch(updateSingleOffer(data));
      dispatch(updateFewFavorites(data));
      dispatch(updateFewNearby(data));

      return data;
    } catch (e) {
      return rejectWithValue(e as Error);
    }
  }
);
