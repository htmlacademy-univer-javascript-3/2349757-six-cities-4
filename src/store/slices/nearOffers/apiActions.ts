import { createAsyncThunk } from '@reduxjs/toolkit';
import { OfferType } from '../../../types/offerType';
import { AppDispatch, State } from '../../../types/stateType';
import { AxiosInstance } from 'axios';
import { APIRoute, NameSpace } from '../../../const';

export const fetchNearbyAction = createAsyncThunk<
  OfferType[],
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  `${NameSpace.NearbyOffersData}/fetchNearby`,
  async (id, { extra: api }) => {
    const { data } = await api.get<OfferType[]>(
      `${APIRoute.Offers}/${id}${APIRoute.Nearby}`
    );
    return data;
  });
