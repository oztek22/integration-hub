import React from 'react';
import Routes from 'routes/index.js';
import { ThemeProvider } from 'emotion-theming';

import { theme } from './style/theme';

// import 'antd/dist/antd.css';
import './App.css';
import './style/global.css';
import './style/fonts/fonts.css';
import './style/antd-custom.css';
import './style/themeConfig';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
