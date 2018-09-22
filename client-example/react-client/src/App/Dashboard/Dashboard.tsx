import * as React from 'react';
import { Route } from 'react-router';

interface IProps {
  history: Route;
  match: Route;
}

export default class Dashboard extends React.Component<IProps> {
  constructor(props) {
    super(props);

  }

  public render() {
    return (
      <section>
        This is a private route. You are logged in!
      </section>
    );
  }
}
