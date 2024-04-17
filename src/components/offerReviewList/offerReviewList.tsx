import React from 'react';
import OfferReview from './offerReview/offerReview';
import { ReviewType } from '../../types/types';

type offerReviewListProps = {
  reviews: ReviewType[];
}

function OfferReviewList({reviews}: offerReviewListProps): JSX.Element {
  const reviewsList: JSX.Element[] = [];
  for (let i = 0; i < reviews.length; i++){
    reviewsList.push(<OfferReview key={reviews[i].id} review={reviews[i]}/>);
  }
  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviewsList}
      </ul>
    </React.Fragment>
  );
}

export default OfferReviewList;
