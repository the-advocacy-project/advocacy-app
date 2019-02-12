import React from 'react';

function YourConsent(props) {
  console.log(props)

  return(
    <div>
      <p>Select the relevant options below to consent to sharing your information with the local authority, with us and sending a copy to yourself. </p>
      <p>I consent to sharing my information and contact details with the Hackney Council to see if I am eligible for a Care Act assessment</p>
      <input type="checkbox"
          checked={props.consent}
          onChange={props.toggleChange}
        />
    </div>
  )
}

export default YourConsent;
