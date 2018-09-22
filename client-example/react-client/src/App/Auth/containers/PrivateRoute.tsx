import * as React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { AuthService } from '../../Services/AuthService';
import { BASE_URL, LOGIN_URL } from '../../../environment';


export default function PrivateRoute({ component: Component, ...remainingProps }) {
  const authService = new AuthService();

  if (authService.isAuthenticated() === true) {
    return <Route {...remainingProps} render={(props) => <Component {...props} />} />;
  }

  return <Redirect to={LOGIN_URL} />;
};
