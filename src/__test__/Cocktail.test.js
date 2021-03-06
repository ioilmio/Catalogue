import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import rootReducer from '../redux/rootReducer';
import Cocktail from '../components/Cocktail';

test('Cocktail can be rendered', () => {
  const store = configureStore({ reducer: rootReducer });

  render(
    <Provider store={store}>
      <Cocktail />
    </Provider>,
  );
});
