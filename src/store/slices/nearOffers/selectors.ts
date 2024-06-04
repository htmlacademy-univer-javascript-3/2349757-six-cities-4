import { OfferType } from '../../../types/offerType';
import { NameSpace } from '../../../const';
import { State } from '../../../types/stateType';

export const getNearbyOffers = (state: State): OfferType[] =>
  state[NameSpace.NearbyOffersData].nearby;

export const getIsNearbyOffersLoading = (state: State): boolean =>
  state[NameSpace.NearbyOffersData].isNearbyOffersLoading;
