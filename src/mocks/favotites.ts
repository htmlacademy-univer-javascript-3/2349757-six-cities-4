import { FavoriteType } from '../types/types';

export const favoritesMock: FavoriteType[] = [
  {
    id: 'b0e9d6ef-8b5b-465c-8cf6-bb52a268f4ba',
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
    price: 70,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    isPremium: false,
    rating: 2.3,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37,
        longitude: 4.88,
        zoom: 12
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: true
  },
  {
    id: '6d15ce78-fad6-45a0-812c-045e5ca5cb76',
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/9.jpg',
    price: 170,
    title: 'Beautiful & luxurious hotel at great location',
    type: 'Hotel',
    isPremium: false,
    rating: 3.3,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37,
        longitude: 4.88,
        zoom: 12
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: true
  },
  {
    id: '0f4cdf1f-c954-4742-874b-b666ec6d8015',
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
    price: 100,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    isPremium: false,
    rating: 4.3,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37,
        longitude: 4.88,
        zoom: 12
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16
    },
    isFavorite: true
  }
];

