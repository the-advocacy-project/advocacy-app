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
          onChange={props.toggleChange}
        />
      <input type="checkbox"
          id="consent-2"
          name="sendMail"
          checked={props.sendMail}
          onChange={props.toggleChange}
        />
      <form>
        <label>Input Field
        <textarea type="text"
        name="consentInput"
          onChange={props.handleChange}
        />

        <textarea type="text"
        name="consentInput2"
          onChange={props.handleChange}
        />
        </label>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default YourConsent;
