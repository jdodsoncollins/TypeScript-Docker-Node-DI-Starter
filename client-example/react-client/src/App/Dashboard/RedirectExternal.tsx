import * as React from 'react';

export default class RedirectExternal extends  React.Component<any, any>  {
  constructor( props ){
    super(props);
    this.state = { ...props };
  }
  public componentWillMount(){
    window.location = this.state.route['loc'];
  }
  public render(){
    return (<section>Redirecting...</section>);
  }
}