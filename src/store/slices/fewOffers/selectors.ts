import { NameSpace } from '../../../const';
import { OfferType } from '../../../types/offerType';
import { State } from '../../../types/stateType';

export const getOffers = (state: State): OfferType[] =>
  state[NameSpace.FewOffersData].offers;

export const getIsOffersLoading = (state: State): boolean =>
  state[NameSpace.FewOffersData].isOffersLoading;
