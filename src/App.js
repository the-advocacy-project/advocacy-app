// import React, { Component } from 'react';
// import BeginButton from './components/beginButton';
// import YourConsent from './components/dynamicPages/yourConsent';
//
//
// class App extends Component {
//   state = {
//     consent: false,
//     sendMail: false,
//     consentInput: "",
//   }
//
//   toggleChange = (event) => {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     this.setState({
//       [target.name]: value
//     })
//   }
//
//   handleChangeInput = (el) => {
//     const target = el.target;
//     const value = target.type === 'text' ?  null : target.value;
//     this.setState({
//       // consentInput: el.target.value
//       [target.name]: value
//     })
//   }
//
//   handleSubmitInput = (e) => {
//     alert('Advocacy ' + this.state.consentInput)
//     e.preventDefault();
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1>The Advocacy Project</h1>
//           <h2>Your voice. Your rights. Your choice.</h2>
//         </header>
//         <h2>Need help with day to day tasks?
//         See if you can get the help you need.</h2>
//         <BeginButton/>
//         <YourConsent
//         consent={this.state.consent}
//         sendMail={this.state.sendMail}
//         toggleChange={this.toggleChange}
//         handleChangeInput={this.handleChangeInput}
//         handleSubmitInput={this.handleSubmitInput}/>
//       </div>
//     );
//   }
// }
//
// export default App;
