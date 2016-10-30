import { combineReducers } from 'redux';
import HeaderConfigReducer from './headerConfig';

const rootReducer = combineReducers({
    headerConfig: HeaderConfigReducer
});

export default rootReducer;
