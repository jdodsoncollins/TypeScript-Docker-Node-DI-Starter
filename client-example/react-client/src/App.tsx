import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import { Switch, Route, Redirect, RouteProps } from 'react-router';
import { Routes } from './routes/react-routes';
import { Tokenize } from './App/Auth/Tokenize';
import { LOGIN_URL } from './environment';
import Dashboard from './App/Dashboard/Dashboard';
import PrivateRoute from './App/Auth/containers/PrivateRoute';
import { BrowserRouter } from 'react-router-dom';
import * as queryString from 'query-string';
import { AccessToken } from './App/Auth/AccessToken';

class App extends React.Component<any, any>  {

  private token: AccessToken | null;

  constructor(props) {
    super(props);
    const values = queryString.parse(window.location.search);
    this.token = values && values.token ? AccessToken.createFromTokenOnly(values.token) : null;
  }

  public get redirectToExternalLogin() {
    return (
      <BrowserRouter>
        <div>
          <Route component={() => window.location = `${location.protocol}//${LOGIN_URL}` as any} />
        </div>
      </BrowserRouter>
    )
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
            path={Routes.LOGIN.template()}
            render={props => {
              return <Tokenize accessToken={this.token} />;
            }}
          />
          <Route exact={true}
            path={Routes.HOME.template()}
            render={() => this.redirectToExternalLogin}
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
