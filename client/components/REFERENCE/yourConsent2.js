import React from 'react';

function YourConsent(props) {

    return(
        <div>
            <p>Select the relevant options below to consent to sharing your information with the local authority, with us and sending a copy to yourself. </p>
            <p>I consent to sharing my information and contact details with the Hackney Council to see if I am eligible for a Care Act assessment</p>
            <input type="checkbox"
                id="consent-1"
                name="consent"
                checked={props.consent}
                onChange={props.toggleChangeConsent}
            />
            <input type="checkbox"
                id="consent-2"
                name="sendMail"
                checked={props.sendMail}
                onChange={props.toggleChangeConsent}
            />
            <form>
                <label>Input Field
                    <textarea type="text"
                        name="consentInput"
                        onChange={props.handleChangeInput}
                    />

                    <textarea type="text"
                        name="consentInput2"
                        onChange={props.handleChangeInput}
                    />
                </label>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default YourConsent;
