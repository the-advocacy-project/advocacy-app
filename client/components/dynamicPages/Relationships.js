import React from 'react';

function Relationships(props) {
    return (
        <div>
            <h1>Developing and maintaining family or other personal relationships</h1>
            <h2>Please check what applies to you</h2>
            <ul>
                <li>
                    <label>Do you need help to stay in touch with your family?</label>
                    <input type="checkbox"></input>
                </li>
                <li>
                    <label>Do you need help to meet new people?</label>
                    <input type="checkbox"></input>
                </li>
                <li>
                    <label>Do you need help to stay maintain your relationship with your children?</label>
                    <input type="checkbox"></input>
                </li>
            </ul>
            <label>The questions above are examples of how you may meet this requirement. Please expand and / or let us know other ways that you need help developing and maintaining family or personal relationships.</label>
            <textarea placeholder="Tell us more..."></textarea>
        </div>
    );
}

export default Relationships;
