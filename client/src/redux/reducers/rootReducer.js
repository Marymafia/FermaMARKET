import { combineReducers } from 'redux';
import allCategoryReducer from './CategoryAllReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({ addUser: userReducer, categories: allCategoryReducer });

export default rootReducer;
