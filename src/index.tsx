import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from './components/style/Theme.styled';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme = {baseTheme}>
      <App />
    </ThemeProvider>
    <GlobalStyles />
  </React.StrictMode>
);


reportWebVitals();
