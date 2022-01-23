import React from 'react';
import { Counter } from './features/counter/Counter';
import { IntlProvider } from 'react-intl';
import { messages } from './i18n/messages';
import { DEFAULT_LOCALE } from './common/constants/locale';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <IntlProvider locale={DEFAULT_LOCALE} messages={messages}>
      <div className="App">
        <Header />
        <section className="App-main-section">
          <Counter />
        </section>
      </div>
    </IntlProvider>
  );
}

export default App;
