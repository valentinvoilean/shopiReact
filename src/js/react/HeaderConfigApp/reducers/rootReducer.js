import { combineReducers } from 'redux';
import modalReducer from 'HeaderConfigApp/reducers/modalReducer';

export default combineReducers({
    headerConfig : modalReducer
});
