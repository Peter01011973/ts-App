import {createStore, applyMiddleware, combineReducers  } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from '../store/auth/reducers';
import postReducer from './posts/reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer
});

export const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

export type RootState = ReturnType<typeof rootReducer>

export default store;