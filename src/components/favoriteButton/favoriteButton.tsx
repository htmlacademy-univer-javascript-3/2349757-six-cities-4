import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hocks';
import { changefavoriteStatusAction, getAuthCheckedStatus, getIsFavoriteStatusSubmitting } from '../../store';
import {MouseEvent} from 'react';
import { AppRoutes } from '../../const';

type FavoriteButtonProps = {
  isFavorite: boolean;
  id: string;
  width: string;
  height: string;
  buttonClass: string;
  activeClass: string;
  iconClass: string;
};

function FavoriteButton({ isFavorite, id, width, height, buttonClass, activeClass, iconClass }: FavoriteButtonProps): JSX.Element {

  const isAuth = useAppSelector(getAuthCheckedStatus);
  const disabledBookmarkButton = useAppSelector(getIsFavoriteStatusSubmitting);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (!isAuth) {
      navigate(AppRoutes.Login);
      return;
    }

    dispatch(
      changefavoriteStatusAction({
        offerId: id,
        status: isFavorite,
      })
    );
  };

  return (
    <button
      className={`bookmark-button button ${buttonClass} ${isFavorite ? activeClass : ''}`}
      type="button"
      disabled={disabledBookmarkButton}
      onClick={handleClick}
    >
      <svg
        className={`bookmark-icon ${iconClass}`}
        width={width}
        height={height}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default FavoriteButton;
