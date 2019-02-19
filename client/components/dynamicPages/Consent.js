import React from 'react';
import NavHeader from '../navigation/NavHeader';
import {Button} from '../buttons/Button';
import { Link } from 'react-router-dom';


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
                <div className="checkboxInput">
                    <h2 className="checkboxText title--green margin50">{props.info[qs].question}</h2>
                    <input
                        type="checkbox"
                        checked={props.info[qs].agree}
                        name="agree"
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
            <div className="wrapper">
                <h1>Your consent</h1>
                <p>
                    Select the relevant options below to consent to sharing your
                    information with the local authority, with us and sending a
                    copy to yourself.
                </p>
                <div className="margin50 clear"></div>
                { displayConsent }
            </div>

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
