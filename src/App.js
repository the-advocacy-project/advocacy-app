import React, { Component } from 'react';
import BeginButton from './components/beginButton';
import YourConsent from './yourConsent';


class App extends Component {
  state = {
    consent: false,
  }

  toggleChange = () => {
    this.setState({
      consent: !this.state.consent,
    })
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
        toggleChange={this.toggleChange}/>
      </div>
    );
  }
}

export default App;
