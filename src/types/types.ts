import { store } from '../store';

export type CityType = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};

export type OfferType = {
  id: string;
  previewImage: string;
  price: number;
  title: string;
  type: string;
  city: CityType;
  isPremium: boolean;
  rating: number;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
};

export type FavoriteType = {
  id: string;
  previewImage: string;
  price: number;
  title: string;
  type: string;
  city: CityType;
  isPremium: boolean;
  rating: number;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
};

export type ReviewType = {
  id: string;
  src: string;
  text: string;
  date: string;
  name: string;
  rating: number;
};

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

