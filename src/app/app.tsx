import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hocks';
import { fetchfavoritesAction, getAuthCheckedStatus, getAuthorizationStatus, getIsOffersLoading } from '../store';
import LoadingPage from '../pages/loadingPage/loadingPage';
import HistoryRouter from '../components/historyRoute/historyRoute';
import { browserHistory } from '../browserHistory';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../const';
import MainPage from '../pages/mainPage/mainPage';
import LoginPage from '../pages/loginPage/loginPage';
import OfferPage from '../pages/offerPage/offerPage';
import PrivateRoute from '../privateRoute/privateRoute';
import FavoritesPage from '../pages/favoritesPage/favoritesPage';
import Page404 from '../pages/page404/page404';


function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const areOffersLoading = useAppSelector(getIsOffersLoading);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isAuthChecked) {
      dispatch(fetchfavoritesAction());
    }
  }, [dispatch, isAuthChecked]);

  if (areOffersLoading) {
    return (
      <LoadingPage />
    );
  }
  return (areOffersLoading)
    ? <LoadingPage /> : (
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={ROUTES.Main}>
            <Route index element={<MainPage />} />
            <Route path={ROUTES.Login} element={<LoginPage />} />
            <Route path={ROUTES.Offer} element={<OfferPage />} />s
            <Route
              path={ROUTES.Favorites}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <FavoritesPage />
                </PrivateRoute>
              }
            />
            <Route path={ROUTES.NotFound} element={<Page404 />} />
          </Route>
        </Routes>
      </HistoryRouter>
    );
}

export default App;
