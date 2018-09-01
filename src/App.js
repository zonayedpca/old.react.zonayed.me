import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import SingleContent from './component/SingleContent';

import './App.css';

export default class App extends Component {
  state = {
    basics: []
  }

  componentDidMount() {
    axios('https://with.zonayed.me/wp-json/wp/v2/posts?tags=172&order=asc&per_page=30&fields=id,title').then(({data}) => this.setState({basics: data}));
  }

  componentWillUnmount() {
    clearTimeout();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" render={() => <Main data={this.state} />} />
          <Route exact path="/:topic/:id" render={(props) => <SingleContent {...props} />} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
