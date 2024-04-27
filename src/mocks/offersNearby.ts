import { OfferType } from '../types/types';

export const offersNearbyMock: OfferType[] = [
  {
    id: '605cb6d5-5005-42a3-8d11-ba56a640725a',
    src: 'img/apartment-01.jpg',
    price: 78,
    description: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    isPremium: true,
    rating: 4.7,
    city: {
      name: 'Amsterdam',
      location: {
        lat: 52.37,
        lng: 4.88,
        zoom: 12
      }
    },
    location: {
      lat: 52.3909553943508,
      lng: 4.85309666406198,
      zoom: 16
    }
  },
  {
    id: '72b9778b-ca10-409f-b925-6946a6bb18ae',
    src: 'img/apartment-02.jpg',
    price: 140,
    description: 'Beautiful & luxurious hotel at great location',
    type: 'Hotel',
    isPremium: false,
    rating: 3.3,
    city: {
      name: 'Amsterdam',
      location: {
        lat: 52.37,
        lng: 4.88,
        zoom: 12
      }
    },
    location: {
      lat: 52.3609553943508,
      lng: 4.85309666406198,
      zoom: 16
    }
  },
  {
    id: 'c7e8bfd2-d125-4ce1-9745-5e2a4c2363ff',
    src: 'img/apartment-03.jpg',
    price: 110,
    description: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    isPremium: true,
    rating: 2.4,
    city: {
      name: 'Amsterdam',
      location: {
        lat: 52.37,
        lng: 4.88,
        zoom: 12
      }
    },
    location: {
      lat: 52.3909553943508,
      lng: 4.929309666406198,
      zoom: 16
    }
  },
];
