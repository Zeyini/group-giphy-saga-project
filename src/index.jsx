import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import store from './store.js';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom/cjs/react-router-dom.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
  </React.StrictMode>
);
