import React, { Component } from 'react';
import { BarLoader } from 'react-spinners';

import Content from './Content';

let timeOut;

export default class Main extends Component {
  state = {
    delayed: false
  }

  componentDidMount() {
    timeOut = setTimeout(() => {
      this.setState({delayed: true});
    }, 20000);
  }

  componentWillUnmount() {
    clearTimeout(timeOut);
  }

  render() {
    const {data: {basics}} = this.props;
    const { delayed } = this.state;
    const delayMsg = <span>I have got a bad server... If your internet connection is not slow, please reload</span>;

    return (
      <section className="content-area">
        {basics.length > 0 ? <Content title="React Basics" data={basics} color="#61dafb" topic="react-basic" /> : <div className="loading-bar"><BarLoader color={'#61dafb'} />{delayed ? delayMsg : ''}</div>}
      </section>
    )
  }
}
