import React from 'react';

function Consent(props) {
    return (
        <div>
            <h1>Your consent</h1>
            <p>Select the relevant options below to consent to sharing your 
                information with the local authority, with us and sending a 
                copy to yourself. </p>
            <br/>
            <label>I consent to sharing my information and contact details with the 
                Hackney Council to see if I am eligible for a Care Act assessment</label>
            <input type="checkbox"></input>
            <br/>
            <label>I consent to sharing my information and contact details with 
                the Advocacy Project to get continued support.</label>
            <input type="checkbox"></input>
            <br/>
            <label>Send to me via email</label>
            <input type="checkbox"></input>
        </div>
    );
}

export default Consent;
