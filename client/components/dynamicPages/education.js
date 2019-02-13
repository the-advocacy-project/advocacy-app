import React from 'react';

function Education(props) {
    console.log('what am i ' + props.info)

    const displayEducation = Object.keys(props.info).map((qs, i) =>
    {if(qs === "more") {
        return null
    }else {
        return (
            <div>
                <h2>{props.info[qs].question}</h2>
                <input type="checkbox"
                    checked={qs.agree}
                    name="agree"
                    key={`question${i}`}
                    onChange={(event) => props.toggleChange(event, qs)}
                />
            </div>
        )
    }}

    )

    return(
        <div>
            <h1>Education is working</h1>
            {displayEducation}

        </div>
    )
}

export default Education;
