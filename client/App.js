import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import BeginButton from './components/buttons/beginButton';
import YourConsent from './components/dynamicPages/yourConsent';
import Nutrition from './components/dynamicPages/nutrition';


import axios from 'axios';

class App extends Component {
    state = {
        value: '',
        consent: false,
        sendMail: false,
        consentInput: "",
        nutrition: {
            eating: {
            answer: "",
           },
//             [Question]: {
//                 question: String,
//                 answer: boolean/string/
//             }    
        }
        
    }
    toggleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [target.name]: value
        })
    }

    handleChangeInput = (el) => {
        el.preventDefault();
        const target = el.target;
        const value = target.type === 'text' ?  null : target.value;
        this.setState({ 
            [target.name]: value,
            nutrition: {
                eating: {
                    question: "Do you need help eating, drinking, shopping or cooking?",
                    [target.name]: value
                }
            }
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
        // const { value, consentInput, answer  } = this.state;
        axios.post('/', this.state ).then(result => {
        });
    };


    static getDerivedStateFromProps(props, state) {
        console.log(props,state)
    }
    render() {

        return (
            <div>
              
               
                <YourConsent
                    consent={this.state.consent}
                    sendMail={this.state.sendMail}
                    toggleChange={this.toggleChange}
                    handleChangeInput={this.handleChangeInput}
                    handleSubmitInput={this.handleSubmitInput}/>

                    <Nutrition nutrition={this.state.nutrition}
                      handleChangeInput={this.handleChangeInput} answer={this.state.nutrition.answer}/>
                    

                    <form onSubmit={this.handleSubmit} method="POST" action="/">
               <label>
                     Submite email:
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
