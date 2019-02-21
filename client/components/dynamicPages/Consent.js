import React from 'react';
import NavHeader from '../navigation/NavHeader';
import {Button} from '../buttons/Button';
import { Link, Redirect } from 'react-router-dom';



function Consent(props) {
    console.log('I am props: ', props);
    console.log('I am validation: ', props.validation);

    const displayConsent = Object.keys(props.info).map((qs, i) => {
        console.log("qs", qs)
        if (qs === "consentToCouncil" || qs ==="consentToAdvocacy"){
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

        }
        else {
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
        }
    });

    if(!props.validation.resident.agree || !props.validation.over18.agree)  {
        return <Redirect to="/sorry-checks" />
    } else {
        return (
            <div>
                {window.scrollTo(0,0)}
                <NavHeader />
                <div className="wrapper">
                    <h1>Your consent</h1>
                    <p className="margin50">
                        For this application, your consent is required so that we can share your information with the Local Authority
                        and with us, the Advocacy Project.
                    </p>
                    <p>
                        If you would like a copy of your application, please check the last box so we can send it to your email.
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



    return (
        <div id="outer-container">
            {window.scrollTo(0,0)}
            <NavHeader />
            <div id="page-wrap" className="wrapper">
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

}

export default Consent;
