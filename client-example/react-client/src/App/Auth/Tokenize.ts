import * as queryString from 'query-string';
import * as React from 'react';
import { AccessToken } from './AccessToken';
import { Routes } from '../../routes/react-routes';
import { Redirect } from 'react-router-dom';

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
  }

  public render() {
      console.log(Routes.LOGIN.create({}));
    return (
      '<Redirect to={Routes.LOGIN.create({})} />'
    )
  }
}
