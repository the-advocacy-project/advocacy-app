import React from 'react';
import NavHeader from '../navigation/NavHeader';
import {Button} from '../buttons/Button';
import { Link } from 'react-router-dom';


function Consent(props) {
    console.log('I am props: ', props);
    const displayConsent = Object.keys(props.info).map((qs, i) => {

        console.log('I am a checkbox');
        console.log('checked: ', props.info[qs].agree);
        return (
            <div className="checkboxInput">
                <h2 className="checkboxText title--green margin50">{props.info[qs].question}</h2>
                <input
                    className="checkBox"
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

    });

    return (
        <div>
            <NavHeader />
            <div className="wrapper">
                <h1>Your consent</h1>
                <p className="margin50">
                    Select the relevant options below to give consent to share your
                    information with the Local Authority and The Advocacy Project.
                </p>
                <p>
                    If you would like a copy of your application, please check the last box.
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
