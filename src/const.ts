import { CityType } from './types/types';

export enum AuthorizationStatus {
  AUT,
  UNAUT
}

export enum OffersListType {
  MAIN,
  NEARBY
}

export enum SORT {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first'
}

export const CITIES: CityType[] = [
  {
    name: 'Paris',
    location: {
      lat: 48.85661,
      lng: 2.351499,
      zoom: 13
    }
  },
  {
    name: 'Cologne',
    location: {
      lat: 50.938361,
      lng: 6.959974,
      zoom: 13
    }
  },
  {
    name: 'Brussels',
    location: {
      lat: 50.846557,
      lng: 4.351697,
      zoom: 13
    }
  },
  {
    name: 'Amsterdam',
    location: {
      lat: 52.37454,
      lng: 4.897976,
      zoom: 13
    }
  },
  {
    name: 'Hamburg',
    location: {
      lat: 53.550341,
      lng: 10.000654,
      zoom: 13
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      lat: 51.225402,
      lng: 6.776314,
      zoom: 13
    }
  }
];


