
/*********** Reduceres defined here *********/

import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native
import { connectRouter } from 'connected-react-router';
import { history } from '../main/history';
import encryptor from './encryptor';
import user from './modules/user';
import competition from './modules/competition';
import loader from './modules/loader';

const userPersistConfig = {
  key: 'admin-app',
  storage: storage,
  transforms: [encryptor],
  blacklist: ['router', 'loader']
};

export default persistCombineReducers(userPersistConfig, {
  user,
  competition,
  router: connectRouter(history),
  loader
});
