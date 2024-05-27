import { NameSpace } from '../../../const';
import { FullOfferType } from '../../../types/offerType';
import { State } from '../../../types/stateType';

export const getOffer = (state: State): FullOfferType | null =>
  state[NameSpace.SingleOfferData].offer;

export const getIsOfferLoading = (state: State): boolean =>
  state[NameSpace.SingleOfferData].isOfferLoading;
