import { createAsyncThunk } from '@reduxjs/toolkit';
import { OfferType } from '../../../types/offerType';
import { AppDispatch, State } from '../../../types/stateType';
import { AxiosInstance } from 'axios';
import { APIRoute, NameSpace } from '../../../const';

export const fetchOffersAction = createAsyncThunk<
  OfferType[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  `${NameSpace.FewOffersData}/fetchOffers`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferType[]>(APIRoute.Offers);
    return data;
  }
);
