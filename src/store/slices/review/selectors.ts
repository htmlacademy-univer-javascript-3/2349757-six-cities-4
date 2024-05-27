import { NameSpace } from '../../../const';
import { ReviewType } from '../../../types/reviewType';
import { State } from '../../../types/stateType';

export const getReviews = (state: State): ReviewType[] =>
  state[NameSpace.ReviewsData].reviews;

export const getIsReviewsLoading = (state: State): boolean =>
  state[NameSpace.ReviewsData].isReviewsLoading;

export const getIsReviewsStatusSubmitting = (state: State): boolean =>
  state[NameSpace.ReviewsData].isReviewsStatusSubmitting;

export const getReviewsHasError = (state: State): LoadingStatus =>
  state[NameSpace.ReviewsData].reviewsStatus;

export const getHasError = (state: State): boolean =>
  state[NameSpace.ReviewsData].hasError;
