import React from 'react';

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
                    <input type="checkbox"></input>
                </li>
                <li>
                    <label>Feel relaxed </label>
                    <input type="checkbox"></input>
                </li>
                <li>
                    <label>Feel happy</label> 
                    <input type="checkbox"></input>
                </li>
                <li>
                    <label>Be able to see your friends</label> 
                    <input type="checkbox"></input>
                </li>
                <li>
                    <label>Feel valued in society</label> 
                    <input type="checkbox"></input>
                </li>
                <li>
                    <label>Keep your family together </label>
                    <input type="checkbox"></input>
                </li>
                <li>
                    <label>Other: (please state below)</label> 
                    <input type="checkbox"></input>
                </li>
            </ul>
            <textarea placeholder="Tell us more..."></textarea>
        </div>
    );
}

export default Wellbeing;
