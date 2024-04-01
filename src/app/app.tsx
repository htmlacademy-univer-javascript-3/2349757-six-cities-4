
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../mainPage/mainPage';
import LoginPage from '../loginPage/loginPage';
import FavoritesPage from '../favoritesPage/favoritesPage';
import OfferPage from '../offerPage/offerPage';
import Page404 from '../page404/page404';
import PrivateRoute from '../privateRoute/privateRoute';
import AuthorizationStatus from '../const';

type AppProbs = {
  cardCount: number;
};

function App({ cardCount }: AppProbs): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<MainPage cardCount={cardCount} />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='favorites' element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.UNAUT}>
              <FavoritesPage cardCount={cardCount} />
            </PrivateRoute>
          }
          />
          <Route path='offer/:id' element={
            <OfferPage offers={[
              { id: '1', title: 'first' },
              { id: '2', title: 'second' }
            ]}
            />
          }
          />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
