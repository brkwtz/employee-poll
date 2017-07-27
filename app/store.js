import { createStore, applyMiddleware } from 'redux';
import pollPage from './reducer';
import thunx from 'redux-thunk';

export default createStore(pollPage, applyMiddleware(thunx));
