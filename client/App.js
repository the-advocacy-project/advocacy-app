import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import axios from 'axios';

// Old pages
// import BeginButton from './components/buttons/beginButton';
// import YourConsent from './components/dynamicPages/yourConsent';
// import Home from './components/pages/Home';
// import List from './components/pages/List';

// STATIC PAGE IMPORTS
import FourZeroFour from './staticPages/404';
import FiveHundred from './staticPages/500';
import About from './staticPages/About';
import Begin from './staticPages/Begin';
import CareAct from './staticPages/CareAct';
import Help from './staticPages/Help';
import Home from './staticPages/Home';
import HowTo from './staticPages/HowTo';
import KeyRights from './staticPages/KeyRights';
import Sorry from './staticPages/Sorry';
import Support from './staticPages/Support';

// DYNAMIC PAGE IMPORTS
import InitialChecks from './dynamicPages/InitialChecks';
import Consent from './dynamicPages/Consent';
import Contact from './dynamicPages/Contact';
import Nutrition from './dynamicPages/Nutrition';
import Hygiene from './dynamicPages/Hygiene';
import Toilet from './dynamicPages/Toilet';
import Clothing from './dynamicPages/Clothing';
import Safety from './dynamicPages/Safety';
import Environment from './dynamicPages/Environment';
import Relationships from './dynamicPages/Relationships';
import Work from './dynamicPages/Work';
import Transport from './dynamicPages/Transport';
import Responsibilities from './dynamicPages/Responsibilities';
import Eligibility from './dynamicPages/Eligibility';
import Wellbeing from './dynamicPages/Wellbeing';
import Complete from './dynamicPages/Complete';
import Duty from './staticPages/Duty';
import Overview from './staticPages/Overview';

class App extends Component {
    state = {};

render(){
  
    return (
        <BrowerRouter>
        <Switch>
            {/* Static Page routing */}
            <Route path='/404' component={ FourZeroFour }/> 
            <Route path='/500' component={ FiveHundred }/>
            <Route path='/about' component={ About }/>
            <Route path='/begin' component={ Begin }/>
            <Route path='/care-act' component={ CareAct }/>
            <Route path='/help' component= { Help }/> 
            <Route path='/home' component={ Home }/>
            <Route path='/how-to' component={ HowTo }/>
            <Route path='/key-rights' component={ KeyRights }/>
            <Route path='/sorry' component={ Sorry }/>
            <Route path='/support' component={ Support }/>

            
            {/* Dynamic Page routing */}
            <Route path='/initial-checks' component={ InitialChecks }/>
            <Route path='/consent' component={ Consent }/>
            <Route path='/contact' component={ Contact }/>
            <Route path='/nutrition' component={ Nutrition }/>
            <Route path='/toilet' component={ Toilet }/>
            <Route path='/clothing' component={ Clothing }/>
            <Route path='/safety' component={ Safety }/>
            <Route path='/environment' component={ Environment }/>
            <Route path='/relationships' component={ Relationships }/>
            <Route path='/work' component={ Work }/>
            <Route path='/transport' component={ Transport }/>
            <Route path='/responsibilites' component={ Responsibilities }/>
            <Route path='/eligibility' component={ Eligibility }/>
            <Route path='/wellbeing' component={ Wellbeing }/>
            <Route path='/complete' component={ Complete }/> 
            <Route path='/duty' component={ Duty }/>  
            <Route path='/overview' component={ Overview }/>         
        </Switch>
        </BrowerRouter>
        )
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
