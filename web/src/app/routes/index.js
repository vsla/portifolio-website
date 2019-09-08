import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import {Home} from '../pages'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route component={Home} exact path="/" />
        <Redirect to="/" />
      </Switch>
    );
  }
}
