import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createStore, applyMiddleware } from 'redux';
import mainReducer from './reducer';
import createRavenMiddleware from 'raven-for-redux';
import config from '../config';
import Raven from 'raven-js';

const composeEnhancers = composeWithDevTools({});
const middleware = [];

if (config.enableSentry) {
  Raven.config(process.env.SENTRY_DSN, { environment: process.env.NODE_ENV }).install();
  middleware.push(createRavenMiddleware(Raven));
}

const store = createStore(mainReducer, composeEnhancers(applyMiddleware(...middleware)));

export default store;
