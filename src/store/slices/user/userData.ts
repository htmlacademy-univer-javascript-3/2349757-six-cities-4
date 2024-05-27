import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../../const';
import { UserDataType } from '../../../types/userDataType';
import { checkAuthAction, loginAction, logoutAction } from './apiActions';

type UserStatus = {
  authorizationStatus: AuthorizationStatus;
  userInfo: UserDataType | null;
  isSubmittingLogin: boolean;
};

const initialState: UserStatus = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null,
  isSubmittingLogin: false,
};

export const userData = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userInfo = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userInfo = null;
      })
      .addCase(loginAction.pending, (state) => {
        state.isSubmittingLogin = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.isSubmittingLogin = false;
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userInfo = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.isSubmittingLogin = false;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userInfo = null;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userInfo = null;
      });
  },
});
