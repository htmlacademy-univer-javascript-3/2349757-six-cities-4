import React from 'react';
import OfferReview from './offerReview/offerReview';
import { ReviewType } from '../../types/types';

type offerReviewListProps = {
  reviews: ReviewType[];
}

function OfferReviewList({reviews}: offerReviewListProps): JSX.Element {
  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (<OfferReview key={review.id} review={review}/>))}
      </ul>
    </React.Fragment>
  );
}

export default OfferReviewList;
