import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hocks';
import { setSelectedOffer } from '../../../store/action';
import { OfferType } from '../../../types/types';

type NearbyOfferProps = {
  offer: OfferType;
  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
};

function NearbyOffer({ offer, onMouseEnter, onMouseLeave }: NearbyOfferProps): JSX.Element {
  const { id, src, price, description, type, isPremium, rating } = offer;
  const dispatch = useAppDispatch();
  return (
    <article
      onClick={(evt) => {
        evt.preventDefault();
        dispatch(setSelectedOffer(offer));
      }}
      onMouseEnter={(evt) => {
        evt.preventDefault();
        onMouseEnter(id);
      }}
      onMouseLeave={(evt) => {
        evt.preventDefault();
        onMouseLeave();
      }}
      className="near-places__card place-card"
    >
      <Link to={`/offer/${id}`}>
        {isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
          : null}
        <div className="cities__image-wrapper place-card__image-wrapper">

          <img className="place-card__image" src={src} width="260" height="200" alt="Place image" />
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: `${rating / 5 * 100}%` }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            {description}
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </Link>
    </article>
  );
}

export default NearbyOffer;
