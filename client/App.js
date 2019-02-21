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
                question: 'I am a resident of Hackney.',
                agree: false
            },
            over18: {
                question: 'I am 18 years old or older.',
                agree: false
            }
        },
        consent: {
            consentToCouncil: {
                question:
                    'I consent to sharing my information and contact details with Hackney Council to see if I am eligible for a Care Act assessment',
                agree: false
            },
            consentToAdvocacy: {
                question:
                    'I consent to sharing my information and contact details with us, the Advocacy Project, to get continued support',
                agree: false
            },
            sendToEmail: {
                question: 'Send a copy of my application to my email',
                agree: false
            }
        },
        contact: {
            contactData1: {
                question: 'Full name',
                more: ''
            },
            contactData2: {
                question: 'Address',
                more: ''
            },
            contactData3: {
                question: 'Post code',
                more: ''
            },
            contactData4: {
                question: 'Email',
                more: ''
            },
            contactData5: {
                question: 'Phone number',
                more: ''
            }
        },
        nutrition: {
            food: {
                question:
                    'Do you need help eating, drinking, shopping or cooking?',
                agree: false
            },
            diet: {
                question: 'Do you need help maintaining a balanced diet?',
                agree: false
            },
            more: ''
        },
        hygiene: {
            toiletries: {
                question:
                    'Do you need help buying toiletries like soap and shampoo?',
                agree: false
            },
            washing: {
                question: 'Do you need help washing your hair and body?',
                agree: false
            },
            laundry: {
                question:
                    'Do you need help doing your laundry and cleaning your clothes?',
                agree: false
            },
            more: ''
        },
        toilet: {
            access: {
                question: 'Do you need help to access the toilet?',
                agree: false
            },
            toiletUse: {
                question: 'Do you need help to use the toilet?',
                agree: false
            },
            nightAccess: {
                question: 'Do you need help to go to the toilet at night',
                agree: false
            },
            more: ''
        },
        clothing: {
            gettingDressed: {
                question:
                    'Do you need help to put your clothes and shoes on in the morning?',
                agree: false
            },
            gettingUndressed: {
                question:
                    'Do you need help to take your clothes and shoes off?',
                agree: false
            },
            buyingClothes: {
                question:
                    'Do you need help to buy new clothes for different occasions such as work?',
                agree: false
            },
            more: ''
        },
        safety: {
            accessToHome: {
                question: 'Do you need help to get into your home?',
                agree: false
            },
            movingAround: {
                question: 'Do you need help to move around your home?',
                agree: false
            },
            usingKitchen: {
                question: 'Do you need help to use your cooker or heater?',
                agree: false
            },
            more: ''
        },
        environment: {
            bills: {
                question:
                    'Do you need help to make sure all your bills are paid?',
                agree: false
            },
            clean: {
                question: 'Do you need help to make sure your home is clean?',
                agree: false
            },
            damp: {
                question:
                    'Do you need help to make sure your home is free from damp?',
                agree: false
            },
            more: ''
        },
        relationships: {
            family: {
                question: 'Do you need help to stay in touch with your family?',
                agree: false
            },
            newPeople: {
                question: 'Do you need help to meet new people?',
                agree: false
            },
            children: {
                question:
                    'Do you need help to stay maintain your relationship with your children?',
                agree: false
            },
            more: ''
        },
        work: {
            opportunities: {
                question: 'Do you need help to look for new opportunities?',
                agree: false
            },
            apply: {
                question: 'Do you need help to apply for things?',
                agree: false
            },
            community: {
                question:
                    'Do you need help to get somewhere or take part in something you are interested in?',
                agree: false
            },
            more: ''
        },
        transport: {
            access: {
                question:
                    'Do you need help to access your local shops or park?',
                agree: false
            },
            gp: {
                question: 'Do you need help to get to your GP or the pharmacy?',
                agree: false
            },
            transport: {
                question:
                    'Do you need help to use public transport or arrange a taxi?',
                agree: false
            },
            more: ''
        },
        responsibilities: {
            parent: {
                question: 'Are you a parent, a step parent or grandparent?',
                agree: false
            },
            childrensNeeds: {
                question:
                    'Do need help to understand all your children’s needs?',
                agree: false
            },
            caring: {
                question:
                    'Do you need help to carry out caring responsibilities for your children?',
                agree: false
            },
            more: ''
        },
        eligibility: {
            elig: {
                question:
                    'Does your need for support arise from a physical or mental impairment or illness?',
                agree: false
            },
            more: ''
        },
        wellbeing: {
            safe: {
                question: "If I don't get support, I will not feel safe.",
                agree: false
            },
            relaxed: {
                question: "If I don't get support, I will not feel relaxed.",
                agree: false
            },
            happy: {
                question: "If I don't get support, I will not feel happy.",
                agree: false
            },
            friends: {
                question:
                    "If I don't get support, I will not be able to see my friends.",
                agree: false
            },
            feelValued: {
                question:
                    "If I don't get support, I will not feel valued in society.",
                agree: false
            },
            family: {
                question:
                    "If I don't get support, I will not be able to keep my family together",
                agree: false
            },
            more: {
                question:
                    'Are there other ways that your wellbeing will be negatively affected if you do not recieve support? Please describe below.',
                more: ''
            }
        },
        duty: {
            advocate: {
                question:
                    'Yes, I would like to be considered for free support from an advocate.',
                agree: false
            },
            more: {
                question:
                    'Is there anything that you want to tell the advocate about your communication needs?',
                more: ''
            },
            more2: {
                question:
                    'Is there anything that you want the Local Authority to know about your communication needs?',
                more: ''
            }
        }
    };

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

    handleChangeInput = (event, qs, section) => {
        const target = event.target;
        // console.log("target", target)
        const value = target.name === 'more' ? target.value : null;
        console.log('value', value);
        this.setState({
            [section]: {
                ...this.state[section],
                [qs]: { ...this.state[section][qs], more: value }
            }
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
                        <Route
                            path="/initial-checks"
                            render={props => (
                                <InitialChecks
                                    info={this.state.initialChecks}
                                    section="initialChecks"
                                    handleChangeInput={this.handleChangeInput}
                                    toggleChange={this.toggleChange}
                                />
                            )}
                        />
                        <Route
                            path="/consent"
                            render={props => (
                                <Consent
                                    info={this.state.consent}
                                    section="consent"
                                    handleChangeInput={this.handleChangeInput}
                                    toggleChange={this.toggleChange}
                                />
                            )}
                        />
                        <Route path="/sorry" component={Sorry} />
                        <Route
                            path="/contact"
                            render={props => (
                                <Contact
                                    info={this.state.contact}
                                    section="contact"
                                    handleChangeInput={this.handleChangeInput}
                                />
                            )}
                        />
                        <Route path="/begin" component={Begin} />
                        <Route
                            path="/nutrition"
                            render={props => (
                                <Nutrition
                                    info={this.state.nutrition}
                                    section="nutrition"
                                    handleChangeInput={this.handleChangeInput}
                                    toggleChange={this.toggleChange}
                                />
                            )}
                        />
                        <Route
                            path="/hygiene"
                            render={props => (
                                <Hygiene
                                    info={this.state.hygiene}
                                    section="hygiene"
                                    handleChangeInput={this.handleChangeInput}
                                    toggleChange={this.toggleChange}
                                />
                            )}
                        />
                        <Route
                            path="/toilet"
                            render={props => (
                                <Toilet
                                    info={this.state.toilet}
                                    section="toilet"
                                    handleChangeInput={this.handleChangeInput}
                                    toggleChange={this.toggleChange}
                                />
                            )}
                        />
                        <Route
                            path="/clothing"
                            render={props => (
                                <Clothing
                                    info={this.state.clothing}
                                    section="clothing"
                                    handleChangeInput={this.handleChangeInput}
                                    toggleChange={this.toggleChange}
                                />
                            )}
                        />
                        <Route
                            path="/safety"
                            render={props => (
                                <Safety
                                    info={this.state.safety}
                                    section="safety"
                                    handleChangeInput={this.handleChangeInput}
                                    toggleChange={this.toggleChange}
                                />
                            )}
                        />
                        <Route
                            path="/environment"
                            render={props => (
                                <Environment
                                    info={this.state.environment}
                                    section="environment"
                                    handleChangeInput={this.handleChangeInput}
                                    toggleChange={this.toggleChange}
                                />
                            )}
                        />
                        <Route
                            path="/relationships"
                            render={props => (
                                <Relationships
                                    info={this.state.relationships}
                                    section="relationships"
                                    handleChangeInput={this.handleChangeInput}
                                    toggleChange={this.toggleChange}
                                />
                            )}
                        />
                        <Route
                            path="/work"
                            render={props => (
                                <Work
                                    info={this.state.work}
                                    section="work"
                                    handleChangeInput={this.handleChangeInput}
                                    toggleChange={this.toggleChange}
                                />
                            )}
                        />
                        <Route
                            path="/transport"
                            render={props => (
                                <Transport
                                    info={this.state.transport}
                                    section="transport"
                                    handleChangeInput={this.handleChangeInput}
                                    toggleChange={this.toggleChange}
                                />
                            )}
                        />
                        <Route
                            path="/responsibilites"
                            render={props => (
                                <Responsibilities
                                    info={this.state.responsibilities}
                                    section="responsibilities"
                                    handleChangeInput={this.handleChangeInput}
                                    toggleChange={this.toggleChange}
                                />
                            )}
                        />
                        <Route
                            path="/eligibility"
                            render={props => (
                                <Eligibility
                                    info={this.state.eligibility}
                                    section="eligibility"
                                    handleChangeInput={this.handleChangeInput}
                                    toggleChange={this.toggleChange}
                                />
                            )}
                        />
                        <Route
                            path="/wellbeing"
                            render={props => (
                                <Wellbeing
                                    info={this.state.wellbeing}
                                    section="wellbeing"
                                    handleChangeInput={this.handleChangeInput}
                                    toggleChange={this.toggleChange}
                                />
                            )}
                        />
                        <Route
                            path="/duty"
                            render={props => (
                                <Duty
                                    info={this.state.duty}
                                    section="duty"
                                    handleChangeInput={this.handleChangeInput}
                                    toggleChange={this.toggleChange}
                                />
                            )}
                        />
                        <Route
                            path="/overview"
                            render={props => (
                                <Overview
                                    info={this.state}
                                    section="overview"
                                    handleChangeInput={this.handleChangeInput}
                                    toggleChange={this.toggleChange}
                                />
                            )}
                        />
                        <Route
                            path="/complete"
                            render={props => (
                                <Complete
                                    info={this.state.complete}
                                    section="complete"
                                    handleChangeInput={this.handleChangeInput}
                                    toggleChange={this.toggleChange}
                                    handleSubmit={this.handleSubmit}
                                />
                            )}
                        />
                        {/* NAV COMPONENTS */}
                        <Route path="/menu" component={Menu} />
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

export default App;
