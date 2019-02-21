import React, { Component } from 'react';
import axios from 'axios';

import TextFieldGroup from './common/TextFieldGroup.jsx';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // functions and onsubmits etc here

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>This is the main component which is currently blank... boring...</h1>
      </div>
    );
  }
}

export default MainPage;
