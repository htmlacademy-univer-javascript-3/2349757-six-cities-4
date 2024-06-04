import { configureStore } from '@reduxjs/toolkit';
import { makeAPI } from '../apiServices/api';
import { reducer } from './reducer';
import { redirect } from '../middleware/redirect';

export const api = makeAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
