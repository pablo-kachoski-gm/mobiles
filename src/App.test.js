import React from 'react';
import { Provider } from 'react-redux';
import { store } from './common/store';
import App from './App';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { DEFAULT_LOCALE } from './common/constants/locale';
import { messages } from './i18n/messages';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const BaseApp = () => (
  <IntlProvider locale={DEFAULT_LOCALE} messages={messages}>
    <Provider store={store}>
      <App />
    </Provider>
  </IntlProvider>
);

describe('App routes', () => {
  test('default route renders products list page', async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <BaseApp />
      </Router>
    );
    expect(screen.getByText(/products/i)).toBeInTheDocument();
  });
  test('products route renders products list page', async () => {
    const history = createMemoryHistory();
    history.push('/products');
    render(
      <Router location={history.location} navigator={history}>
        <BaseApp />
      </Router>
    );
    expect(screen.getByText(/products/i)).toBeInTheDocument();
  });
  test('products with id route renders product details page', async () => {
    const history = createMemoryHistory();
    history.push('/products/11111');
    render(
      <Router location={history.location} navigator={history}>
        <BaseApp />
      </Router>
    );
    expect(await screen.findByText(/product information/i)).toBeInTheDocument();
  });
  test('unknown route renders not found page', async () => {
    const history = createMemoryHistory();
    history.push('/unknownURL');
    render(
      <Router location={history.location} navigator={history}>
        <BaseApp />
      </Router>
    );
    expect(await screen.findByText(/404/i)).toBeInTheDocument();
  });
});
