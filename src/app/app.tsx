
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/mainPage/mainPage';
import LoginPage from '../pages/loginPage/loginPage';
import FavoritesPage from '../pages/favoritesPage/favoritesPage';
import OfferPage from '../pages/offerPage/offerPage';
import Page404 from '../pages/page404/page404';
import PrivateRoute from '../privateRoute/privateRoute';
import { AuthorizationStatus } from '../const';
import { FavoriteType, OfferType } from '../types/types';

type AppProbs = {
  offersList: OfferType[];
  offersNearbyList: OfferType[];
  favoriteOffersList: FavoriteType[];
};

function App({ offersList, favoriteOffersList, offersNearbyList }: AppProbs): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<MainPage offersList={offersList} />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='favorites' element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.UNAUT}>
              <FavoritesPage favoriteOffersList={favoriteOffersList} />
            </PrivateRoute>
          }
          />
          <Route path='offer/:id' element={
            <OfferPage offers={offersList} nearbyOffers={offersNearbyList}/>
          }
          />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
