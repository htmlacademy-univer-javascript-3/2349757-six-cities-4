import { OfferType } from '../types/types';

export const offersMock: OfferType[] = [
  {
    id: 'b0e9d6ef-8b5b-465c-8cf6-bb52a268f4ba',
    src: 'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
    price: 70,
    description: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    isPremium: false,
    rating: 2,
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
    },
    isFavorite: false
  },
  {
    id: '6d15ce78-fad6-45a0-812c-045e5ca5cb76',
    src: 'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
    price: 170,
    description: 'Beautiful & luxurious hotel at great location',
    type: 'Hotel',
    isPremium: false,
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
      lat: 52.3609553943508,
      lng: 4.85309666406198,
      zoom: 16
    },
    isFavorite: false
  },
  {
    id: '0f4cdf1f-c954-4742-874b-b666ec6d8015',
    src: 'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
    price: 100,
    description: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    isPremium: false,
    rating: 4,
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
    },
    isFavorite: false
  },
  {
    id: '8e5fe338-06d7-4e80-b7a1-09d52c100cf6',
    src: 'https://14.design.htmlacademy.pro/static/hotel/7.jpg',
    price: 90,
    description: 'Beautiful & luxurious hotel at great location',
    type: 'Hotel',
    isPremium: true,
    rating: 5,
    city: {
      name: 'Amsterdam',
      location: {
        lat: 52.37,
        lng: 4.88,
        zoom: 12
      }
    },
    location: {
      lat: 52.3809553943508,
      lng: 4.939309666406198,
      zoom: 16
    },
    isFavorite: false
  }
];
