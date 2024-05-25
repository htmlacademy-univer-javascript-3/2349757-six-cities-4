import { createAction } from '@reduxjs/toolkit';
import { CityType, OfferType } from '../types/types';

export const setCity = createAction('setCity', (City: CityType) => ({payload: City}));
export const getOffers = createAction('getOffers', (Offers: OfferType[])=>({payload: Offers}));
export const setSelectedOffer = createAction('setSelectedOffer', (offer: OfferType)=>({payload:offer}));
export const setSort = createAction('setSort', (sort:string)=>({payload:sort}));

