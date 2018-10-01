import React, { Component } from 'react';
import api from '../../common/api/api';
import './app.css';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    api('/api/getUsernames')
      .then(response => this.setState({ username: response.data.username }))
      .catch(() => {});
  }

  render() {
    const { username } = this.state;
    return <div>{username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}</div>;
  }
}
