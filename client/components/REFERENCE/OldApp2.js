// import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';

// import BeginButton from '../buttons/beginButton';
// import YourConsent from '../dynamicPages/yourConsent';
// import Home from '../pages/Home';
// import List from '../pages/List';

// import axios from 'axios';

// class App extends Component {
//     state = {
//         value: '',
//         consent: false,
//         sendMail: false,
//         consentInput: "",
//     }

//     toggleChange = (event) => {
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         this.setState({
//             [target.name]: value
//         })
//     }

//     handleChangeInput = (el) => {
//         const target = el.target;
//         const value = target.type === 'text' ?  null : target.value;
//         this.setState({
//         // consentInput: el.target.value
//             [target.name]: value
//         })
//     }

//     handleSubmitInput = (e) => {
//         alert('Advocacy ' + this.state.consentInput)
//         e.preventDefault();
//     }

//     handleChange = event => {
//         this.setState({
//             value: event.target.value
//         });
//     };

//     handleSubmit = event => {
//         event.preventDefault();
//         const { value } = this.state;
//         axios.post('/', { value }).then(result => {
//             console.log(value);
//         });
//     };
//     render() {

//         return (
//             <div>
//                 <header className="App-header">
//                     <h1>The Advocacy Project</h1>
//                     <h2>Your voice. Your rights. Your choice.</h2>
//                 </header>
//                 <h2>Need help with day to day tasks?
//             See if you can get the help you need.</h2>
//                 <BeginButton/>
//                 <YourConsent
//                     consent={this.state.consent}
//                     sendMail={this.state.sendMail}
//                     toggleChange={this.toggleChange}
//                     handleChangeInput={this.handleChangeInput}
//                     handleSubmitInput={this.handleSubmitInput}/>
//                 {/*<Switch>
//                     <Route exact path="/" component={Home} />
//                     <Route path="/list" component={List} />
//                     {' '}
//                 </Switch>*/}
//                 <form onSubmit={this.handleSubmit} method="POST" action="/">
//                     <label>
//                         Name:
//                         <input
//                             type="text"
//                             value={this.state.value}
//                             onChange={this.handleChange}
//                         />
//                     </label>
//                     <input type="submit" value="Submit" />
//                 </form>
//             </div>
//             // <Switch>
//             //     <App />
//             // </Switch>
//         );
//     }
// }

// export default App;
