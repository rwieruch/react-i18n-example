import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import './i18n';

ReactDOM.render(
  <Suspense fallback={null}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
