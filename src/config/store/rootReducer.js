import {combineReducers} from 'redux';

import headerConfig from 'screens/HeaderConfig/HeaderConfig.duck';
import myAccount from 'screens/App/components/Header/components/MyAccount/components/MyAccountDesktop/components/Link/Link.duck';
import mainMenu from 'shared/ducks/MainMenu.duck';
import currency from 'screens/App/components/Header/components/Currency/Currency.duck';

export default combineReducers({ headerConfig, myAccount, mainMenu, currency });
