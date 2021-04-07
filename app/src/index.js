import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppCms from './cms/AppCms';
import Login from './cms/components/Login';

const userValidated = () => {
  return localStorage.getItem("user") !== null;
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/cms*" render={() => (
          userValidated() ? 
          <AppCms />
          :
          <Login />
        )} />
        <Route path="/" component={App} />
      </Switch>
    </Router>


    
  </React.StrictMode>,
  document.getElementById('root')
);
