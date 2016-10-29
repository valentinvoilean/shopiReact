import { combineReducers } from 'redux';
import HeaderConfigReducer from './headerConfig';

export default combineReducers({
    headerConfig: HeaderConfigReducer
});
