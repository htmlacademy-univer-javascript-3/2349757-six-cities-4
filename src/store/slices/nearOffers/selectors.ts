import { State } from 'history';
import { OfferType } from '../../../types/offerType';
import { NameSpace } from '../../../const';

export const getNearbyOffers = (state: State): OfferType[] =>
  state[NameSpace.NearbyOffersData].nearby;

export const getIsNearbyOffersLoading = (state: State): boolean =>
  state[NameSpace.NearbyOffersData].isNearbyOffersLoading;
