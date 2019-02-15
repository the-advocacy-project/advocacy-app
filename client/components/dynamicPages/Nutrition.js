import React from 'react';
import NavHeader from '../navigation/NavHeader'
// function QuizOne(props) {

//     const displayNutrition = Object.keys(props.info).map((qs, i) =>
//     {if(qs === "more") {
//         return (
//             <div>
//                 <p>Tell us more</p>
//                 <textarea type="text"
//                     name="more"
//                     onChange={(event) => props.handleChangeInput(event, qs, props.section)}
//                 />
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 <h2>{props.info[qs].question}</h2>
//                 <input type="checkbox"
//                     checked={qs.agree}
//                     name="agree"
//                     key={`question${i}`}
//                     onChange={(event) => props.toggleChange(event, qs, props.section)}
//                 />
//             </div>
//         )
//     }}

//     )

//     return(

function Nutrition(props) {
    console.log('I am props: ', props);
    const displayNutrition = Object.keys(props.info).map((qs, i) => {
        if (qs === 'more') {
            console.log('I am textarea');
            return (
                <div>
                    <p>Tell us more</p>
                    <textarea
                        type="text"
                        name="more"
                        key={i}
                        onChange={event =>
                            props.handleChangeInput(event, qs, props.section)
                        }
                    />
                </div>
            );
        } else {
            console.log('I am a checkbox');
            console.log('checked: ', props.info[qs].agree);
            return (
                <div>
                    <h2>{props.info[qs].question}</h2>
                    <input
                        type="checkbox"
                        checked={props.info[qs].agree}
                        name="agree"
                        key={i}
                        onChange={event =>
                            props.toggleChange(event, qs, props.section)
                        }
                    />
                </div>
            );
        }
    });

    return (
        <div>
            <NavHeader />
            <h1>Managing and Maintaining Nutrition</h1>
            <h2>Please check what applies to you</h2>
            {/* <ul>
                <li>
                    <label>Do you help eating, drinking, shopping or cooking? </label>
                    <input type="checkbox"></input>
                </li>
                <li>
                    <label>Do you need help maintaining a balanced diet?</label>
                    <input type="checkbox"></input>
                </li>
            </ul> */}
            { displayNutrition }
            <label>The questions above are examples of how you may meet this requirement. Please expand and / or let us know other ways that you need help maintaining and managing nutritrion below.</label>
            <textarea placeholder="Tell us more..."></textarea>
        </div>
    );
}


export default Nutrition;
