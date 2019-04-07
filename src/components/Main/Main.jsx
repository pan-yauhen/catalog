import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Main.scss';
import { Home } from '../../pages/Home/Home';
import { Catalog } from '../../pages/Catalog/Catalog';

export const Main = () =>
    <main className="main">
        <Switch>
            <Route exact
                   path="/"
                   component={Home} />
            <Route exact
                   path="/catalog"
                   component={Catalog} />
        </Switch>
    </main>;
