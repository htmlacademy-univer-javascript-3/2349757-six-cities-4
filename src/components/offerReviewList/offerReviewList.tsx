import { ReviewType } from '../../types/reviewType';
import OfferReview from './offerReview/offerReview';

type ReviewsListProps = {
  reviews: ReviewType[];
}

function OfferReviewList({reviews}: ReviewsListProps): JSX.Element {
  return(
    <ul className="reviews__list">
      {reviews.map((review) => (<OfferReview key={review.id} review={review}/>))}
    </ul>
  );
}

export default OfferReviewList;
