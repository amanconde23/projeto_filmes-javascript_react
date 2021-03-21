import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header'
import Movie from './pages/Movie';
import Serie from './pages/Serie';

const Routes = () => {
  return(
    <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/movie/:id" component={Movie} />
        <Route path="/serie/:id" component={Serie} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;