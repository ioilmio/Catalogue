/* eslint-disable no-restricted-globals */
import { configureStore } from '@reduxjs/toolkit';

import { render } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import rootReducer from '../redux/rootReducer';
import Nav from '../components/Nav';

test('Nav can be rendered', () => {
  const store = configureStore({ reducer: rootReducer });
  const history = createBrowserHistory();
  render(
    <Provider store={store}>
      <Router history={history}>
        <Nav />
      </Router>
    </Provider>,
  );
});
