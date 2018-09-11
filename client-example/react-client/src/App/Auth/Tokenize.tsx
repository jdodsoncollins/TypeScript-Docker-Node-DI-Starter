import * as queryString from 'query-string';
import * as React from 'react';
import { Switch, Route, Redirect, RouteProps } from 'react-router';
import { AccessToken } from './AccessToken';
import { Routes } from '../../routes/react-routes';
import { LOGIN_URL } from '../../environment';
import { BrowserRouter } from 'react-router-dom';

interface ITokenizeProps {
  accessToken: AccessToken;
}

export class Tokenize extends React.Component<ITokenizeProps> {
  private readonly eventId: string | null = null;

  constructor(props) {
    super(props);
    const parsedHash = queryString.parse(props.location.hash);
    if (parsedHash.access_token) {
      const accessToken = AccessToken.createFromJWTString(parsedHash.access_token);
      localStorage.setItem('accessToken', accessToken.accessToken);
    }
    location.href = LOGIN_URL;
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
      console.log(LOGIN_URL);
    return (
      <div>asdf
        {this.redirectToExternalLogin}
      </div>
    )
  }
}
