import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hocks';
import { fetchfavoritesAction, getAuthCheckedStatus, getAuthorizationStatus, getIsOffersLoading } from '../store';
import LoadingPage from '../pages/loadingPage/loadingPage';
import HistoryRouter from '../components/historyRoute/historyRoute';
import { browserHistory } from '../browserHistory';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from '../const';
import MainPage from '../pages/mainPage/mainPage';
import LoginPage from '../pages/loginPage/loginPage';
import OfferPage from '../pages/offerPage/offerPage';
import PrivateRoute from '../privateRoute/privateRoute';
import FavoritesPage from '../pages/favoritesPage/favoritesPage';
import Page404 from '../pages/page404/page404';


function App(): JSX.Element {
  const autCheck = useAppSelector(getAuthCheckedStatus);
  const offersLoad = useAppSelector(getIsOffersLoading);
  const autStatus = useAppSelector(getAuthorizationStatus);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (autCheck) {
      dispatch(fetchfavoritesAction());
    }
  }, [dispatch, autCheck]);

  if (offersLoad) {
    return (
      <LoadingPage />
    );
  }
  return (offersLoad)
    ? <LoadingPage /> : (
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoutes.Main}>
            <Route index element={<MainPage />} />
            <Route path={AppRoutes.Login} element={<LoginPage />} />
            <Route path={AppRoutes.Offer} element={<OfferPage />} />s
            <Route
              path={AppRoutes.Favorites}
              element={
                <PrivateRoute authorizationStatus={autStatus}>
                  <FavoritesPage />
                </PrivateRoute>
              }
            />
            <Route path={AppRoutes.NotFound} element={<Page404 />} />
          </Route>
        </Routes>
      </HistoryRouter>
    );
}
export default App;
