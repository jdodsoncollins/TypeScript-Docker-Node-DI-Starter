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
    localStorage.setItem('accessToken', JSON.stringify(this.props.accessToken));
  }

  public render() {
      console.log(LOGIN_URL);
    return (
      <div>
        setting token into local storage
      </div>
    )
  }
}
