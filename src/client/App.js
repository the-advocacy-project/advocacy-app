import React, { Component } from 'react';
import './app.css';
import axios from 'axios';

export default class App extends Component {
  state = { value: '' };

  componentDidMount() {}

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { value } = this.state;
    console.log('this is value', value);

    axios.post('/api/data', { value }).then((result) => {
      console.log(value);
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} method="POST" action="/api/data">
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
