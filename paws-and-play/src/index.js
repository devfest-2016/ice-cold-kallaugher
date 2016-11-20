import React from 'react';
import ReactDOM from 'react-dom';


import { Router, browserHistory } from 'react-router';
import routes from './routes';


import { Provider } from 'react-redux';

import ReduxPromise from 'redux-promise'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';


const store = createStore(rootReducer, applyMiddleware(ReduxPromise))

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('root')
);
