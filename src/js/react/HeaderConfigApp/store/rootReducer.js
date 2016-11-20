import { combineReducers } from 'redux';
import modalReducer from 'HeaderConfigApp/components/modal/modal.duck';

export default combineReducers({
    headerConfig : modalReducer
});
