import React, { PureComponent } from 'react';

import logo from '../logo.png';

export default class Footer extends PureComponent {
  render() {
    return (
      <header className="logo-area">
        <img src={logo} alt="Learn React" />
        <h3>Learn React with Zonayed</h3>
      </header>
    )
  }
}
