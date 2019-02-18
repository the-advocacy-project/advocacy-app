import React from 'react';
import NavHeader from '../navigation/NavHeader';
import {Button} from '../buttons/Button';
import { Link } from 'react-router-dom';


// function Consent(props) {
//     return (
//         <div>
//             <h1>Your consent</h1>
//             <p>Select the relevant options below to consent to sharing your 
//                 information with the local authority, with us and sending a 
//                 copy to yourself. </p>
//             <br/>
//             <label>I consent to sharing my information and contact details with the 
//                 Hackney Council to see if I am eligible for a Care Act assessment</label>
//             <input type="checkbox"></input>
//             <br/>
//             <label>I consent to sharing my information and contact details with 
//                 the Advocacy Project to get continued support.</label>
//             <input type="checkbox"></input>
//             <br/>
//             <label>Send to me via email</label>
//             <input type="checkbox"></input>
//         </div>
//     );
// }

function Consent(props) {
    console.log('I am props: ', props);
    const displayConsent = Object.keys(props.info).map((qs, i) => {
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
        }
    });

    return (
        <div>
            <NavHeader />
            <h1>Your consent</h1>
            <p>
                Select the relevant options below to consent to sharing your 
                information with the local authority, with us and sending a 
                copy to yourself. 
            </p>
            <br/>
            { displayConsent }

            <div className="navButtons"><Link to={'./initial-checks'} >
                <Button 
                text='Back' 
                type='submit' 
                className="buttons"
                onClick={() => {}}/>
            </Link>
            <Link to={'./contact'} >
                <Button 
                text='Next' 
                type='submit' 
                className="buttons"
                onClick={() => {}}/>
            </Link>
            </div>
        </div>
    );
}

export default Consent;
