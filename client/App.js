import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import axios from 'axios';

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
import Menu from './components/staticPages/Menu';

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
    state = {
        initialChecks: {
            resident: {
                question: "I am a resident of Hackney.",
                agree: false
            },
            over18: {
                question: "I am 18 years old or older.",
                agree: false
            }
        },
        consent: {
            consentToCouncil: {
                question: "I consent to sharing my information and contact details with the Hackney Council to see if I am eligible for a Care Act assessment",
                agree: false
            },
            consentToAdvocacy: {
                question: "I consent to sharing my information and contact details with the Advocacy Project to get continued support.",
                agree: false
            },
            sendToEmail: {
                question: "Send to me via email",
                agree: false
            }
        },
        contact: {
            name: {
                question: "Full name:",
                more: ""
            },
            address: {
                question: "Address:",
                more: ""
            },
            postCode: {
                question: "Post code:",
                more: ""
            },
            email: {
                question: "Email",
                more: ""
            },
            phoneNumber: {
                question: "Phone number:",
                more: ""
            }
        },
        nutrition: {
            food : {
                question: "Do you need help eating, drinking, shopping or cooking?" ,
                agree: false
            },
            diet: {
                question: "Do you need help maintaining a balanced diet?",
                agree: false,
            },
            more: ""
        },
        hygiene: {
            toiletries : {
                question: "Do you need help buying toiletries like soap and shampoo?" ,
                agree: false
            },
            washing: {
                question: "Do you need help washing your hair and body?",
                agree: false,
            },
            laundry: {
                question: "Do you need help doing your laundry and cleaning your clothes?",
                agree: false,
            },
            more: ""
        },
        toilet: {
            access: {
                question: "Do you need help to access the toilet?" ,
                agree: false
            },
            toiletUse: {
                question: "Do you need help to use the toilet?",
                agree: false,
            },
            nightAccess: {
                question: "Do you need help to go to the toilet at night",
                agree: false
            },
            more: ""
        },
        clothing: {
            gettingDressed: {
                question: "Do you need help to put your clothes and shoes on in the morning?",
                agree: false
            },
            gettingUndressed: {
                question: "Do you need help to take your clothes and shoes off?",
                agree: false
            },
            buyingClothes: {
                question: "Do you need help to buy new clothes for different occasions such as work?",
                agree: false
            },
            more: ""
        },
        safety: {
            accessToHome: {
                question: "Do you need help to get into your home?",
                agree: false
            },
            movingAround: {
                question: "Do you need help to move around your home?",
                agree: false
            },
            usingKitchen: {
                question: "Do you need help to help to use your cooker or heater?",
                agree: false
            },
            more: ""
        },
        environment: {
            bills: {
                question: "Do you need help to make sure all your bills are paid?",
                agree: false
            },
            clean: {
                question: "Do you need help to make sure your home is clean?",
                agree: false
            },
            damp: {
                question: "Do you need help to make sure your home is free from damp?",
                agree: false
            },
            more: ""
        },
        relationships: {
            family: {
                question: "Do you need help to stay in touch with your family?",
                agree: false
            },
            newPeople: {
                question: "Do you need help to meet new people?",
                agree: false
            },
            children: {
                question: "Do you need help to stay maintain your relationship with your children?",
                agree: false
            },
            more: ""
        },
        work: {
            opportunities: {
                question: "Do you need help to look for new opportunities?",
                agree: false
            },
            apply: {
                question: "Do you need help to apply for things?",
                agree: false
            },
            community: {
                question: "Do you need help to get somewhere or take part in something you are interested in?",
                agree: false
            },
            more: ""
        },
        transport: {
            access: {
                question: "Do you need help to access your local shops or park?",
                agree: false
            },
            gp: {
                question: "Do you need help to get to your GP or the pharmacy?",
                agree: false
            },
            transport: {
                question: "Do you need help to use public transport or arrange a taxi?",
                agree: false
            },
            more: ""
        },
        responsibilites: {
            parent: {
                question: "Are you a parent, a step parent or grandparent?",
                agree: false
            },
            childrensNeeds: {
                question: "Do need help to understand all your children’s needs?",
                agree: false
            },
            caring:{
                question: "Do you need help to carry out caring responsibilities for your children?",
                agree: false
            },
            more: ""
        },
        eligibility: {
            elig: {
                question: "Does your need for support arise from a physical or mental impairment or illness?",
                agree: false
            },
            more: ""
        },
        wellbeing: {
            safe: {
                question: "If you don’t get support to do the above will you feel safe?",
                more: ""
            },
            relaxed: {
                question: "If you don’t get support to do the above will you feel safe?",
                more: ""
            },
            happy: {
                question: "If you don’t get support to do the above will you feel happy",
                more: ""
            },
            friends: {
                question: "If you don’t get support to do the above will you be able to see your friends",
                more: ""
            },
            feelValued: {
                question: "If you don’t get support to do the above will you feel valued in society",
                more: ""
            },
            family: {
                question: "If you don’t get support to do the above will you be able to keep you family together",
                more: ""
            },
            other: {
                question: "Other: (please state below)",
                more: ""
            }
        },
        duty: {
            advocate: {
                question: "Would you like free support from an advocate?",
                agree: false
            },
            communicationAdvocate: {
                question: "Is there anything you want to tell the advocate about your communication needs?",
                more: ""
            },
            communicationCouncil: {
                question: "Is there anything you want the local authority to know about your communication needs?",
                more: ""
            }
        }
    }

    toggleChange = (event, qs, section) => {
        const target = event.target;
        const value =
            target.type === 'checkbox' ? target.checked : target.value;
        const newSection = { ...this.state[section][qs], agree: value };
        this.setState({
            [section]: {
                ...this.state[section],
                [qs]: { ...this.state[section][qs], agree: value }
            }
        });
    };


    handleChangeInput = event => {
        const target = event.target;
        const value = target.type === 'text' ? null : target.value;
        // let value = event.target.value;
        this.setState({
            [target.name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        // const { value } = this.state;
        axios.post('/', this.state).then(result => {
            console.log(value);
        });
    };

    render() {
        return (

            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/help" component={Help} />
                        <Route path="/how" component={How} />
                        <Route path="/initial-checks" component={props => (
                            <InitialChecks
                                info={this.state.initialChecks}
                                section="initialChecks"
                                handleChangeInput={this.handleChangeInput}
                                toggleChange={this.toggleChange}
                            />
                        )} />
                        <Route path="/consent" component={props => (
                            <Consent
                                info={this.state.consent}
                                section="consent"
                                handleChangeInput={this.handleChangeInput}
                                toggleChange={this.toggleChange}
                            />
                        )} />
                        <Route path="/sorry" component={Sorry} />
                        <Route path="/contact" component={props => (
                            <Contact
                                info={this.state.contact}
                                section="contact"
                                handleChangeInput={this.handleChangeInput}
                            />
                        )} />
                        <Route path="/begin" component={Begin} />
                        <Route path="/nutrition"
                            component={props => (
                                <Nutrition
                                    info={this.state.nutrition}
                                    section="nutrition"
                                    handleChangeInput={this.handleChangeInput}
                                    toggleChange={this.toggleChange}
                                />
                            )} />
                        <Route path="/hygiene" component={Hygiene} />
                        <Route path="/toilet" component={Toilet} />
                        <Route path="/clothing" component={Clothing} />
                        <Route path="/safety" component={Safety} />
                        <Route path="/environment" component={Environment} />
                        <Route path="/relationships" component={Relationships}/>
                        <Route path="/work" component={Work} />
                        <Route path="/transport" component={Transport} />
                        <Route path="/responsibilites" component={Responsibilities}/>
                        <Route path="/eligibility" component={Eligibility} />
                        <Route path="/wellbeing" component={Wellbeing} />
                        <Route path="/duty" component={Duty} />
                        <Route path="/overview" component={Overview} />
                        <Route path="/complete" component={Complete} />
                        <Route path="/menu" component={Menu} />
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
};

export default App;
