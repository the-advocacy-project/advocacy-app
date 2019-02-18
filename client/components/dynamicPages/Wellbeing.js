import React from 'react';
import {Button} from '../buttons/Button';
import { Link } from 'react-router-dom';

function Wellbeing(props) {
    return (
        <div>
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
            <blockquote>"Wellbeing is all the things that are important to someone to have a good life"</blockquote>
            <p>If you don’t get support to do the above will you:</p>
            <ul>
                <li>
                    <label>Feel safe</label>
                    <textarea placeholder="Yes/No..."></textarea>
                </li>
                <li>
                    <label>Feel relaxed </label>
                    <textarea placeholder="Yes/No..."></textarea>
                </li>
                <li>
                    <label>Feel happy</label> 
                    <textarea placeholder="Yes/No..."></textarea>
                </li>
                <li>
                    <label>Be able to see your friends</label> 
                    <textarea placeholder="Yes/No..."></textarea>
                </li>
                <li>
                    <label>Feel valued in society</label> 
                    <textarea placeholder="Yes/No..."></textarea>
                </li>
                <li>
                    <label>Keep your family together </label>
                    <textarea placeholder="Yes/No..."></textarea>
                </li>
                <li>
                    <label>Other: (please state below)</label> 
                    <textarea placeholder="Yes/No..."></textarea>
                </li>
            </ul>
            <textarea placeholder="Tell us more..."></textarea>
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
