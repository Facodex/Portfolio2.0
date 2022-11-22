import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import global_EN from './translations/EN/global.json';
import global_ES from './translations/ES/global.json';


i18next.init({
  interpolation: {escapeValue: false},
  lng: 'en',
  resources: {
    es:{
      global: global_ES,
    },
    en:{
      global:global_EN
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>

)
