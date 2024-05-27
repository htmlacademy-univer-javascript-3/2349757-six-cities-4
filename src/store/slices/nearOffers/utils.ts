import { OfferType } from '../../../types/offerType';

export const updateFavorites = (nearby: OfferType[], updatedOffer: OfferType) => {
  const offerNearbyIndex = nearby.findIndex((element) => element.id === updatedOffer.id);
  if (offerNearbyIndex !== -1) {
    nearby[offerNearbyIndex].isFavorite = !nearby[offerNearbyIndex].isFavorite;
  }
};
