
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
  mark: string;
  src: string;
  price: number;
  description: string;
  type: string;
  city: CityType;
  location: {
    lat: number;
    lng: number;
    zoom: number;
  };
};

export const offersMock: OfferType[] = [
  {
    id: 'b0e9d6ef-8b5b-465c-8cf6-bb52a268f4ba',
    mark: 'Basic',
    src: 'img/apartment-01.jpg',
    price: 70,
    description: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
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
    id: '6d15ce78-fad6-45a0-812c-045e5ca5cb76',
    mark: 'Premium',
    src: 'img/apartment-02.jpg',
    price: 170,
    description: 'Beautiful & luxurious hotel at great location',
    type: 'Hotel',
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
    id: '0f4cdf1f-c954-4742-874b-b666ec6d8015',
    mark: 'Business',
    src: 'img/apartment-03.jpg',
    price: 100,
    description: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
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
  {
    id: '8e5fe338-06d7-4e80-b7a1-09d52c100cf6',
    mark: 'Comfort',
    src: 'img/apartment-01.jpg',
    price: 90,
    description: 'Beautiful & luxurious hotel at great location',
    type: 'Hotel',
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
    }
  }
];

export const offersNearbyMock: OfferType[] = [
  {
    id: 'b0e9d6ef-8b5b-465c-8cf6-bb52a268f4ba',
    mark: 'Basic',
    src: 'img/apartment-01.jpg',
    price: 70,
    description: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
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
    id: '6d15ce78-fad6-45a0-812c-045e5ca5cb76',
    mark: 'Premium',
    src: 'img/apartment-02.jpg',
    price: 170,
    description: 'Beautiful & luxurious hotel at great location',
    type: 'Hotel',
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
    id: '0f4cdf1f-c954-4742-874b-b666ec6d8015',
    mark: 'Business',
    src: 'img/apartment-03.jpg',
    price: 100,
    description: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
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

