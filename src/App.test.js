import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { messages } from './i18n/messages';
import { MemoryRouter } from 'react-router-dom';
import { config } from './common/config';

const BaseApp = () => (
  <IntlProvider locale={config.locale} messages={messages}>
    <Provider store={store}>
      <App />
    </Provider>
  </IntlProvider>
);

describe('App routes', () => {
  test('default route renders products list page', async () => {
    render(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <BaseApp />
      </MemoryRouter>
    );

    expect(await screen.findByText(/products/i)).toBeInTheDocument();
  });
  test('products route renders products list page', async () => {
    render(
      <MemoryRouter initialEntries={['/products']}>
        <BaseApp />
      </MemoryRouter>
    );
    expect(await screen.findByText(/products/i)).toBeInTheDocument();
  });
  test('products with id route renders product details page', async () => {
    render(
      <MemoryRouter initialEntries={['/products/11111']}>
        <BaseApp />
      </MemoryRouter>
    );
    expect(await screen.findByText(/product information/i)).toBeInTheDocument();
  });
  test('unknown route renders not found page', async () => {
    render(
      <MemoryRouter initialEntries={['/unknownURL']}>
        <BaseApp />
      </MemoryRouter>
    );
    expect(await screen.findByText(/404/i)).toBeInTheDocument();
  });
});
