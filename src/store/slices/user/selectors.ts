import { AuthorizationStatus, NameSpace } from '../../../const';
import { State } from '../../../types/stateType';
import { UserDataType } from '../../../types/userDataType';

export const getAuthCheckedStatus = (state: State): boolean =>
  state[NameSpace.User].authorizationStatus === AuthorizationStatus.Auth;

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;

export const getUserInfo = (state: State): UserDataType | null =>
  state[NameSpace.User].userInfo;

export const getIsSubmittingLogin = (state: State): boolean =>
  state[NameSpace.User].isSubmittingLogin;
