import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import { Switch, Route, Redirect, RouteProps } from 'react-router';
import { Routes } from './routes/react-routes';
import { Tokenize } from './App/Auth/Tokenize';
import { LOGIN_URL } from './environment';
import Dashboard from './App/Dashboard/Dashboard';
import PrivateRoute from './App/Auth/containers/PrivateRoute';

class App extends  React.Component<any & RouteProps, any>  {

  public redirectToLogin() {

    return <h1>Redirecting to Login</h1>;
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the React client app. This is built using Create React App, and uses oauth client credentials to expose private routes after login</h1>
        </header>
        <Switch>
            <Route
              exact={true}
              path={Routes.HOME.template()}
              render={() => <Redirect to={Routes.LOGIN.template()} />}
            />
            <Route exact={true} path={Routes.TOKENIZE.template()} component={Tokenize} />
            <Route
              exact={true}
              path={Routes.LOGIN.template()}
              render={() => this.redirectToLogin()}
            />
            <PrivateRoute
              exact={true}
              path={Routes.DASHBOARD.template()}
              component={Dashboard}
            />
          </Switch>
      </div>
    );
  }
}

export default App;
