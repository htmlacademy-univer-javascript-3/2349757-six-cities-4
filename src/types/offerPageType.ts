import { FullOfferType, OfferType } from './offerType';
import { ReviewType } from './reviewType';

export type OfferPageDataType = {
  fullOffer: FullOfferType | undefined;
  nearestOffers: OfferType[];
  reviews: ReviewType[];
}

export type CommentFormDataType = {
  comment: string;
  rating: number;
};
