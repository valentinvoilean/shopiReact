import { combineReducers } from 'redux';
import HeaderConfigReducer from 'reducers/headerConfig';

const rootReducer = combineReducers({
    headerConfig: HeaderConfigReducer
});

export default rootReducer;
