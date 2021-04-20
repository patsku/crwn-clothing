import {combineReducers} from 'redux';
import userReducer from './user/user.redurer';

export default combineReducers({
    user: userReducer
})