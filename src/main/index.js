/*
 * @file: index.js
 * @description: App Configration
 * @date: 28.11.2019
 * @author: 
 * */

import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './history';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routers from '../routers';
import { Provider } from 'react-redux';
import configureStore from '../config';
import Loader from '../components/Loader';

/************ store configration *********/
const { persistor, store } = configureStore(history);

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <ConnectedRouter history={history}>
          <ToastContainer />
          <Routers {...store} />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
};

