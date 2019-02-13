import React from 'react';

function Nutrition(props) {

    const displayNutrition = Object.keys(props.info).map((qs, i) =>
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
            <h1>Nutrition is working</h1>
            {displayNutrition}

        </div>
    )
}

export default Nutrition;
