
export type CityType = {
  name: string;
  location: {
    lat: number;
    lng: number;
    zoom: number;
  };
};

export type OfferType = {
  id: string;
  src: string;
  price: number;
  description: string;
  type: string;
  city: CityType;
  isPremium: boolean;
  rating: number;
  location: {
    lat: number;
    lng: number;
    zoom: number;
  };
};

export type FavoriteType = {
  id: string;
  src: string;
  price: number;
  description: string;
  type: string;
  city: CityType;
  isPremium: boolean;
  rating: number;
  location: {
    lat: number;
    lng: number;
    zoom: number;
  };
};

export type ReviewType = {
  id: string;
  src: string;
  text: string;
  date: string;
  name: string;
  rating: number;
};
