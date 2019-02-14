import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import axios from 'axios';

// Old pages
// import BeginButton from './components/buttons/beginButton';
// import YourConsent from './components/dynamicPages/yourConsent';
// import Home from './components/pages/Home';
// import List from './components/pages/List';

// STATIC PAGE IMPORTS
import FourZeroFour from './components/staticPages/FourZeroFour';
import About from './components/staticPages/About';
import Begin from './components/staticPages/Begin';
import CareAct from './components/staticPages/CareAct';
import Help from './components/staticPages/Help';
import Home from './components/staticPages/Home';
import How from './components/staticPages/How';
import KeyRights from './components/staticPages/KeyRights';
import Sorry from './components/staticPages/Sorry';
import Support from './components/staticPages/Support';
import Advocacy from './components/staticPages/Advocacy';

// DYNAMIC PAGE IMPORTS
import InitialChecks from './components/dynamicPages/InitialChecks';
import Consent from './components/dynamicPages/Consent';
import Contact from './components/dynamicPages/Contact';
import Nutrition from './components/dynamicPages/Nutrition';
import Hygiene from './components/dynamicPages/Hygiene';
import Toilet from './components/dynamicPages/Toilet';
import Clothing from './components/dynamicPages/Clothing';
import Safety from './components/dynamicPages/Safety';
import Environment from './components/dynamicPages/Environment';
import Relationships from './components/dynamicPages/Relationships';
import Work from './components/dynamicPages/Work';
import Transport from './components/dynamicPages/Transport';
import Responsibilities from './components/dynamicPages/Responsibilities';
import Eligibility from './components/dynamicPages/Eligibility';
import Wellbeing from './components/dynamicPages/Wellbeing';
import Complete from './components/dynamicPages/Complete';
import Duty from './components/dynamicPages/Duty';
import Overview from './components/dynamicPages/Overview';

class App extends Component {
    state = {};

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/help" component={Help} />
                        <Route path="/how" component={How} />
                        <Route path="/initial-checks" component={InitialChecks}/>
                        <Route path="/consent" component={Consent} />
                        <Route path="/sorry" component={Sorry} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/begin" component={Begin} />
                        <Route path="/nutrition" component={Nutrition} />
                        <Route path="/hygiene" component={Hygiene} />
                        <Route path="/toilet" component={Toilet} />
                        <Route path="/clothing" component={Clothing} />
                        <Route path="/safety" component={Safety} />
                        <Route path="/environment" component={Environment} />
                        <Route path="/relationships" component={Relationships}
                        />
                        <Route path="/work" component={Work} />
                        <Route path="/transport" component={Transport} />
                        <Route
                            path="/responsibilites"
                            component={Responsibilities}
                        />
                        <Route path="/eligibility" component={Eligibility} />
                        <Route path="/wellbeing" component={Wellbeing} />
                        <Route path="/duty" component={Duty} />
                        <Route path="/overview" component={Overview} />
                        <Route path="/complete" component={Complete} />
                        {/* NAV COMPONENTS */}
                        <Route path="/about" component={About} />
                        <Route path="/advocacy" component={Advocacy} />
                        <Route path="/care-act" component={CareAct} />
                        <Route path="/support" component={Support} />
                        <Route path="/key-rights" component={KeyRights} />
                        {/* 404 */}
                        <Route component={FourZeroFour} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
// class App extends Component {
// state = {
//     value: '',
//     consent: false,
//     sendMail: false,
//     consentInput: "",
// }

// toggleChange = (event) => {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     this.setState({
//         [target.name]: value
//     })
// }

// handleChangeInput = (el) => {
//     const target = el.target;
//     const value = target.type === 'text' ?  null : target.value;
//     this.setState({
//     // consentInput: el.target.value
//         [target.name]: value
//     })
// }

// handleSubmitInput = (e) => {
//     alert('Advocacy ' + this.state.consentInput)
//     e.preventDefault();
// }

// handleChange = event => {
//     this.setState({
//         value: event.target.value
//     });
// };

// handleSubmit = event => {
//     event.preventDefault();
//     const { value } = this.state;
//     axios.post('/', { value }).then(result => {
//         console.log(value);
//     });
// };
// render() {

//     return (
//         <div>
//             <header className="App-header">
//                 <h1>The Advocacy Project</h1>
//                 <h2>Your voice. Your rights. Your choice.</h2>
//             </header>
//             <h2>Need help with day to day tasks?
//         See if you can get the help you need.</h2>
//             <BeginButton/>
//             <YourConsent
//                 consent={this.state.consent}
//                 sendMail={this.state.sendMail}
//                 toggleChange={this.toggleChange}
//                 handleChangeInput={this.handleChangeInput}
//                 handleSubmitInput={this.handleSubmitInput}/>
//             {/*<Switch>
//                 <Route exact path="/" component={Home} />
//                 <Route path="/list" component={List} />
//                 {' '}
//             </Switch>*/}
//             <form onSubmit={this.handleSubmit} method="POST" action="/">
//                 <label>
//                     Name:
//                     <input
//                         type="text"
//                         value={this.state.value}
//                         onChange={this.handleChange}
//                     />
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         </div>
//         // <Switch>
//         //     <App />
//         // </Switch>
//     );
// }
// }

export default App;
