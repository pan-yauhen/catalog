import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './Main.scss';
import {Home} from '../../pages/Home/Home';
import {Catalog} from '../../pages/Catalog/Catalog';
import {Information} from '../../pages/Information/Information'

export const Main = () =>
  <main className="main">
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/catalog" component={Catalog}/>
      <Route exact path="/information" component={Information}/>
    </Switch>
  </main>;
