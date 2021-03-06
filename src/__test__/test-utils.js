import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import * as React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import rootReducer from '../redux/rootReducer';

const renderWithStateMgmtAndRouter = (

  ui,
  { actions = [], route = '/' } = {},
) => {
  const store = configureStore({
    reducer: rootReducer,
  });
  actions.forEach(action => store.dispatch(action));
  const history = createMemoryHistory({

    initialEntries: [route],

  });

  const renderResult = render(
    <Router history={history}>
      <Provider store={store}>{ui}</Provider>
    </Router>,

  );
  return {
    ...renderResult,
    store,
    history,
  };
};

export default renderWithStateMgmtAndRouter;
