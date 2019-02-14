import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import BeginButton from './components/buttons/beginButton';
import YourConsent from './components/dynamicPages/yourConsent';
import QuizOne from './components/dynamicPages/nutrition';
import QuizTwo from './components/dynamicPages/education';
import Home from './components/pages/Home';
import List from './components/pages/List';

import axios from 'axios';

class App extends Component {
    state = {
        value: '',
        consent: false,
        sendMail: false,
        consentInput: "",
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
        education: {
            read : {
                question: "Can you read?" ,
                agree: false
            },
            write: {
                question: "Can you write?",
                agree: false,
            },
            more: ""
        }
    }

    toggleChange = (event, qs, section) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const newSection = {...this.state[section][qs], agree:value}
        this.setState({
            [section]: {...this.state[section], [qs]:newSection}
        })
    }

    handleChangeInput = (el) => {
        const target = el.target;
        const value = target.type === 'text' ?  null : target.value;
        this.setState({
            [target.name]: value
        })
    }

    handleSubmitInput = (e) => {
        alert('Advocacy ' + this.state.consentInput)
        e.preventDefault();
    }

    handleChange = event => {
        this.setState({
            value: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        // const { value } = this.state;
        axios.post('/', this.state ).then(result => {
            console.log(value);
        });
    };
    render() {

        return (
            <div>
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
                    handleChangeInput={this.handleChangeInput}
                    handleSubmitInput={this.handleSubmitInput}/>
                <QuizOne
                    info={this.state.nutrition}
                    section="nutrition"
                    handleChangeInput={this.handleChangeInput}
                    toggleChange={this.toggleChange}/>
                <QuizTwo
                    info={this.state.education}
                    section="education"
                    toggleChange={this.toggleChange}/>
                {/*<Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/list" component={List} />
                    {' '}
                </Switch>*/}
                <form onSubmit={this.handleSubmit} method="POST" action="/">
                    <label>
                        Name:
                        <input
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>

        );
    }
}

export default App;
