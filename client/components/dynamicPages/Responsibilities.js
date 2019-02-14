import React from 'react';

function Responsibilities(props) {
    return (
        <div>
            <h1>Carrying out any caring responsibilities for a child.</h1>
            <h2>Please check what applies to you</h2>
            <ul>
                <li>
                    <label>Are you a parent, a step parent or grandparent?</label>
                    <input type="checkbox"></input>
                </li>
                <li>
                    <label>Do need help to understand all your children’s needs?</label>
                    <input type="checkbox"></input>
                </li>
                <li>
                    <label>Do you need help to carry out caring responsibilities for your children?</label>
                    <input type="checkbox"></input>
                </li>
            </ul>
            <label>The questions above are examples of how you may meet this requirement. Please expand and / or let us know other ways that you need help carrying out caring responsibilities for a child.</label>
            <textarea placeholder="Tell us more..."></textarea>
        </div>
    );
}

export default Responsibilities;
