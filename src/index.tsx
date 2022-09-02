import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';
import AppThemeProvider from './styles/provider';
import { store } from './redux/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <Router>
          <App />
        </Router>
      </AppThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
