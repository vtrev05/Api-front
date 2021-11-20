import React from 'react';
import ReactDOM from 'react-dom';
// import { ThemeProvider } from 'styled-components';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WrapperLang from '../src/context/WrapperLang';
// import { lightTheme } from './theme/themes';
// import GlobalStyles from '../src/theme/globalStyles';

ReactDOM.render(
  // <ThemeProvider theme={lightTheme}>
  //   <GlobalStyles />
  //   <WrapperLang>
  //     <App />
  //   </WrapperLang>
  // </ThemeProvider>,
  <WrapperLang>
      <App />
  </WrapperLang>,
  document.getElementById('root')
);

reportWebVitals();
