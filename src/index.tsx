import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import { offersMock} from './mocks/offers';
import { favoritesMock } from './mocks/favotites';
import { offersNearbyMock } from './mocks/offersNearby';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersList={offersMock} favoriteOffersList={favoritesMock} offersNearbyList={offersNearbyMock}/>
  </React.StrictMode>
);
