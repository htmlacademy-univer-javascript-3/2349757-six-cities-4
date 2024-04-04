
export type OfferType = {
  id: string;
  mark: string;
  src: string;
  price: number;
  description: string;
  type: string;
};

export const offersMock: OfferType[] = [
  {
    id: '1',
    mark: 'Basic',
    src: 'img/apartment-01.jpg',
    price: 70,
    description: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
  },
  {
    id: '2',
    mark: 'Premium',
    src: 'img/apartment-02.jpg',
    price: 170,
    description: 'Beautiful & luxurious hotel at great location',
    type: 'Hotel',
  },
  {
    id: '3',
    mark: 'Business',
    src: 'img/apartment-03.jpg',
    price: 100,
    description: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
  },
  {
    id: '4',
    mark: 'Comfort',
    src: 'img/apartment-01.jpg',
    price: 90,
    description: 'Beautiful & luxurious hotel at great location',
    type: 'Hotel',
  }
];

