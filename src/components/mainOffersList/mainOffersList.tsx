import { OfferType } from '../../mocks/offers';
import MainOffer from './mainOffer/mainOffer';

type MainOffersListProps = {
  offersList: OfferType[];
}


function MainOffersList({ offersList }: MainOffersListProps): JSX.Element {

  const offers: JSX.Element[] = [];
  for (let i = 0; i < offersList.length; i++) {
    offers.push(
      <MainOffer offer={offersList[i]} />
    );
  }

  return (
    <div className="cities__places-list places__list tabs__content" >
      {offers}
    </div >
  );
}

export default MainOffersList;
