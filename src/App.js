import React, { Component } from 'react';
import BeginButton from './components/beginButton';
import YourConsent from './yourConsent';


class App extends Component {
  state = {
    consent: false,
    sendMail: false,
    consentInput: "",
    testInput: "",
  }

  toggleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value
    })
  }

  handleChange = (el) => {
    const target = el.target;
    const value = target.type === 'text' ?  null : target.value;
    this.setState({
      // consentInput: el.target.value
      [target.name]: value
    })
  }

  handleSubmit = (e) => {
    alert('Advocacy ' + this.state.consentInput)
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>The Advocacy Project</h1>
          <h2>Your voice. Your rights. Your choice.</h2>
        </header>
        <h2>Need help with day to day tasks?
        See if you can get the help you need.</h2>
        <BeginButton/>
        <YourConsent
        consent={this.state.consent}
        sendMail={this.state.sendMail}
        toggleChange={this.toggleChange}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
