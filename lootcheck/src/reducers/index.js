import { combineReducers } from 'redux';
import bitcoin from './bitcoin';
import balance from './balance';

export default combineReducers({ bitcoin, balance });
