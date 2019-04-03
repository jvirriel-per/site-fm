import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import About from './components/about/About';
import Explore from './components/explore/Explore';
import Support from './components/support/Support';
import Page404 from './components/Page404';
import Sales from './components/sales/Sales';

import Home from './App';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/sales" component={Sales} />
      <Route exact path="/explore" component={Explore} />
      <Route exact path="/support" component={Support} />
      <Route exact path="/" component={Home} />
      <Route component={Page404} />
    </Switch>
  </App>;

export default AppRoutes;