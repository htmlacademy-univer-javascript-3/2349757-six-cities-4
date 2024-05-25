import { createAction } from '@reduxjs/toolkit';
import { CityType, OfferType } from '../types/types';

export const setCity = createAction('setCity', (City: CityType) => ({payload: City}));
export const setOffers = createAction('setOffers', (Offers: OfferType[])=>({payload: Offers}));
export const setSelectedOffer = createAction('setSelectedOffer', (offer: OfferType | undefined)=>({payload:offer}));
export const setSort = createAction('setSort', (sort:string)=>({payload:sort}));
export const setLoadingState = createAction('setLoadingState', (state: boolean) => ({payload: state}));
