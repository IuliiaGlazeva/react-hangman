import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Screen from './Game'
import Input from './Input'


export default () => (
  <BrowserRouter>
   <Switch>
   <Route path="/" exact component={Screen} />
   <Route path="/" exact component={Input} />
   </Switch>
  </BrowserRouter>
);
