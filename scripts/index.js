import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import configureStore from './stores';
import routes from './routes';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={createHistory()} children={routes} />
  </Provider>,
  document.getElementById('root')
);