import React from 'react';

function QuizOne(props) {

    const displayNutrition = Object.keys(props.info).map((qs, i) =>
    {if(qs === "more") {
        return (
            <div>
                <p>Tell us more</p>
                <textarea type="text"
                    name="more"
                    onChange={(event) => props.handleChangeInput(event, qs, props.section)}
                />
            </div>
        )
    } else {
        return (
            <div>
                <h2>{props.info[qs].question}</h2>
                <input type="checkbox"
                    checked={qs.agree}
                    name="agree"
                    key={`question${i}`}
                    onChange={(event) => props.toggleChange(event, qs, props.section)}
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

export default QuizOne;
