import { createAsyncThunk } from '@reduxjs/toolkit';
import { FullOfferType } from '../../../types/offerType';
import { AppDispatch, State } from '../../../types/stateType';
import { AxiosInstance } from 'axios';
import { NameSpace, ROUTES } from '../../../const';

export const fetchOfferAction = createAsyncThunk<
FullOfferType | null,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  `${NameSpace.SingleOfferData}/fetchOffer`,
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<FullOfferType>(`${APIRoute.Offers}/${id}`);
      return data;
    } catch (e) {
      dispatch(redirectToRoute(ROUTES.NotFound));
      return null;
    }
  }
);
