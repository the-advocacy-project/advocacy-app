import React from 'react';

function Nutrition(props) {
    return (
        <div>
            <h1>Managing and Maintaining Nutrition</h1>
            <h2>Please check what applies to you</h2>
            <ul>
                <li>
                    <label>Do you help eating, drinking, shopping or cooking? </label>
                    <input type="checkbox"></input>
                </li>
                <li>
                    <label>Do you need help maintaining a balanced diet?</label> 
                    <input type="checkbox"></input>
                </li>
            </ul>
            <label>The questions above are examples of how you may meet this requirement. Please expand and / or let us know other ways that you need help maintaining and managing nutritrion below.</label>
            <textarea placeholder="Tell us more..."></textarea>
        </div>
    );
}

export default Nutrition;
