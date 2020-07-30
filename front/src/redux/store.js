import {createStore, applyMiddleware,combineReducers} from 'redux';
import AuthUser  from './reducers/AuthUser.Reducer';
import UIReducer from './reducers/UI.Reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const RootReducers = combineReducers({AuthUser,UIReducer})

export const store = createStore(RootReducers,applyMiddleware(logger,thunk))