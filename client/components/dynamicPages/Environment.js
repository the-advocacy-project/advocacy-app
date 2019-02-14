import React from 'react';

function Environment(props) {
    return (
        <div>
            <h1>Maintaining a habitable home environment</h1>
            <h2>Please check what applies to you</h2>
            <ul>
                <li>
                    <label>Do you need help to make sure all your bills are paid?</label>
                    <input type="checkbox"></input>
                </li>
                <li>
                    <label>Do you need help to make sure your home is clean?</label>
                    <input type="checkbox"></input>
                </li>
                <li>
                    <label>Do you need help to make sure your home is free from damp?</label>
                    <input type="checkbox"></input>
                </li>
            </ul>
            <label>The questions above are examples of how you may meet this requirement. Please expand and / or let us know other ways that you need help maintaining a habitable home environment.</label>
            <textarea placeholder="Tell us more..."></textarea>
        </div>
    );
}

export default Environment;
