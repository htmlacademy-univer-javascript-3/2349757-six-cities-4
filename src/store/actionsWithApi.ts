import { AxiosInstance } from 'axios';
import { Dispatch, OfferType, State } from '../types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoadingState, setOffers } from './action';
import { ApiRoute } from '../const';

type ThunkProps = {
  dispatch: Dispatch;
  state: State;
  extra: AxiosInstance;
}

export const getOffersApi = createAsyncThunk<void, undefined, ThunkProps>(
  'getOffersApi',
  (_arg, {dispatch, extra: api}) => {
    dispatch(setLoadingState(true));
    api.get<OfferType[]>(ApiRoute.OFFERS)
      .then((response) => {
        dispatch(setOffers(response.data));
      })
      .catch(() => {
        dispatch(setOffers([]));
      })
      .finally(() => {
        dispatch(setLoadingState(false));
      });
  }
);
