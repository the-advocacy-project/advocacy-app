import React from 'react';
import {Button} from '../buttons/Button';
import { Link } from 'react-router-dom';
import NavHeader from '../navigation/navHeader';
import '../../styles/css/home.css';

function Duty(props){

    const displayDuty  = Object.keys(props.info).map((qs, i) => {
        if (qs === 'more') {
            return (
                <div>
                    <div className="textAreaInput" key={`duty-${i}`}>
                        <h2 className="checkboxText">{props.info[qs].question}</h2>
                        <textarea
                            placeholder="Tell us more..."
                            className="textArea more__questions"
                            type="text"
                            name="more"
                            key={`input-${i}`}
                            onChange={event => {
                                event.preventDefault();
                                props.handleChangeInput(event, qs, props.section)
                            }}
                        />
                    </div>
                </div>
            );
        } else if (qs === 'more2') {
            return (
                <div>
                    <div className="textAreaInput" key={`duty-${i}`}>
                        <h2 className="checkboxText">{props.info[qs].question}</h2>
                        <textarea
                            placeholder="Tell us more..."
                            className="textArea more__questions"
                            type="text"
                            name="more"
                            key={`input-${i}`}
                            onChange={event => {
                                event.preventDefault();
                                props.handleChangeInput(event, qs, props.section)
                            }}
                        />
                    </div>
                </div>
            );
        } else if (qs == 'advocate') {
            return (
                <div className="checkboxInput">
                    <h2 className="checkboxText">{props.info[qs].question}</h2>
                    <input
                        className="checkBox"
                        type="checkbox"
                        checked={props.info[qs].agree}
                        name="agree"
                        key={i}
                        onChange={event =>
                            props.toggleChange(event, qs, props.section)
                        }
                    />
                    <div className="margin50" />
                </div>
            );
        }
    });
    
    return(
        <div>
            <NavHeader />
            <h1>Duty to provide an Advocate</h1>
            <p>The Care Act puts people in control of their care and support. 
                It gives people the right to be involved.
                You might be entitled to free support from an advocate to help you to: </p>
            <ul>
                <li>think about what you want</li>
                <li>understand your rights</li>
                <li>be fully involved in the assessment process</li>
                <li>communicate with the local authority</li>
            </ul>
            { displayDuty }
            <a href="../key-rights">Click here for more information on your right to a Care Act advocate </a>
            <div className="navButtons"><Link to={'./wellbeing'} >
                <Button 
                    text='Back' 
                    type='submit' 
                    className="buttons"
                    onClick={() => {}}/>
            </Link>
            <Link to={'./overview'} >
                <Button 
                    text='Next' 
                    type='submit' 
                    className="buttons"
                    onClick={() => {}}/>
            </Link>
            </div>
        </div>
        
    )
}

export default Duty;