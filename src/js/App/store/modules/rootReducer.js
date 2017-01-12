import {combineReducers} from 'redux';

import headerConfig from './HeaderConfig';
import myAccount from './MyAccount';
import mainMenu from './MainMenu';

export default combineReducers({ headerConfig, myAccount, mainMenu });
