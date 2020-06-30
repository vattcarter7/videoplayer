import React, { Fragment } from 'react';
import VidoePlayer from './VidoePlayer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';

const App = () => (
  <BrowserRouter basename='/react_videoplayer'>
    <Fragment>
      <Switch>
        <Route exact path='/' component={VidoePlayer} />
        <Route exact path='/:activeVideo' component={VidoePlayer} />
      </Switch>
      <GlobalStyle />
    </Fragment>
  </BrowserRouter>
);

export default App;
