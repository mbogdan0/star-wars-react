import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainPage } from '../MainPage';
import { PersonPage } from '../PersonPage';

export const AppRouter: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/person/:id">
          <PersonPage />
        </Route>
      </Switch>
    </Router>
  );
};
