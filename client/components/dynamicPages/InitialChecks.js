import React from 'react';

function InitialChecks(props) {
    return (
        <div>
            <h1>Let’s get started...</h1>
            <p>Please check the box below to confirm that:</p>
            <label>I am a resident of Hackney.</label>
            <input type="checkbox"></input>
            <label>I am 18 years old or older.</label>
            <input type="checkbox"></input>
        </div>
    );
}

export default InitialChecks;
