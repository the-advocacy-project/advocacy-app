import React from 'react';
import {Button} from '../buttons/Button';
import { Link } from 'react-router-dom';
import NavHeader from '../navigation/NavHeaderForm';
import '../../styles/css/home.css';

function Wellbeing(props) {

    const  displayWellbeing  = Object.keys(props.info).map((qs, i) => {
        if (qs === 'more') {
            return (
                <div>
                    <div className="textAreaInput" key={`wellbeing-${i}`}>
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
        } else {
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

    return (
        <div>
            {window.scrollTo(0,0)}
            <NavHeader />
            <h1>Your Wellbeing</h1>
            <p>Wellbeing is all the things that are important to someone to have a good life, in particular:</p>
            <ul>
                <li>personal dignity (including treatment of the individual with respect)</li>
                <li>physical and mental health and emotional wellbeing</li>
                <li>protection from abuse and neglect</li>
                <li>control by the individual over their day-to-day life (including over care and support provided and the way they are provided)</li>
                <li>participation in work, education, training or recreation</li>
                <li>social and economic wellbeing</li>
                <li>domestic, family and personal domains</li>
                <li>suitability of the individual’s living accommodation</li>
                <li>the individual’s contribution to society.</li>
            </ul>
            <p>As part of your application for support and advocacy, the local authority will want to measure how much your wellbeing
                will be negatively affected if you do not receive support. Please select the statements relevant to you.
            </p>
            { displayWellbeing }
            <div className="navButtons"><Link to={'./eligibility'} >
                <Button 
                    text='Back' 
                    type='submit' 
                    className="buttons"
                    onClick={() => {}}/>
            </Link>
            <Link to={'./duty'} >
                <Button 
                    text='Next' 
                    type='submit' 
                    className="buttons"
                    onClick={() => {}}/>
            </Link>   
            </div>
        </div>
    );
}

export default Wellbeing;
