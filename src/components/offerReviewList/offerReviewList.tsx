import { ReviewType } from '../../types/reviewType';
import Review from './offerReview/offerReview';

type ReviewsListProps = {
  reviews: ReviewType[];
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return(
    <ul className="reviews__list">
      {reviews.map((review) => (<Review key={review.id} review={review}/>))}
    </ul>
  );
}

export default ReviewsList;
