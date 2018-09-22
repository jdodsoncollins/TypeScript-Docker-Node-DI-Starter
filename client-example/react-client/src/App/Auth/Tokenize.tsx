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
    console.log('access token: ', this.props.accessToken);
    if (this.props.accessToken) {
      localStorage.setItem('accessToken', JSON.stringify(this.props.accessToken));
    }
  }

  public render() {
    return (
      <div>
        {this.props.accessToken ? `setting token ${JSON.stringify(this.props.accessToken)} into local storage` : <Route component={() => window.location = `${location.protocol}//${LOGIN_URL}` as any} />}
      </div>
    )
  }
}
