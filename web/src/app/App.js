import React, { Component } from 'react';
//import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Material helpers
import { ThemeProvider } from '@material-ui/styles';

// Theme
import theme from './theme';

// Routes
//import Routes from './routes/Routes';

// Browser history
// const browserHistory = createBrowserHistory();


export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        oi, tudo bem?
      </ThemeProvider>
    );
  }
}
/*
<Router history={browserHistory}>
  <Routes />
</Router>
*/