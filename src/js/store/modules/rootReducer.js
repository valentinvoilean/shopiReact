import {combineReducers} from 'redux';

import headerConfig from './HeaderConfig';
import myAccount from './MyAccount';
import mainMenu from './MainMenu';
import currency from './Currency';

export default combineReducers({ headerConfig, myAccount, mainMenu, currency });
