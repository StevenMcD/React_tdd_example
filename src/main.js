import React, { Component } from 'react';
import { render } from 'react-dom';

class Root extends Component {
  render() {
    return <h1> Howzit </h1>;
  }
}

render(<Root />, document.getElementById('root'));
