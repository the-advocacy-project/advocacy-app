import React from 'react';
import houses from '../../images/houses.png';
import NavHeader from '../navigation/NavHeader';
import { Button } from '../buttons/Button';
import { Link, Redirect } from 'react-router-dom';

const Contact = props => {

    console.log("validation",props.validation.consentToAdvocacy.agree)
    const displayContact = Object.keys(props.info).map((qs, index) => {
        if (qs === "email") {
            return (
                <div className="input-align margin50" key={`container-${index}`}>
                    <p>{props.info[qs].question}</p>
                    <input
                        type="email"
                        key={`input-${index}`}
                        value={props.info[qs].more}
                        name="more"
                        onChange={event => {
                            event.preventDefault();
                            props.handleChangeInput(event, qs, props.section);
                        }}
                    />
                </div>
            );
        }
        return (
            <div className="input-align margin50" key={`container-${index}`}>
                <p>{props.info[qs].question}</p>
                <input
                    type="text"
                    key={`input-${index}`}
                    value={props.info[qs].more}
                    name="more"
                    onChange={event => {
                        event.preventDefault();
                        props.handleChangeInput(event, qs, props.section);
                    }}
                />
            </div>
        );
    });


    if(!props.validation.consentToCouncil.agree || !props.validation.consentToAdvocacy.agree)  {
        return <Redirect to="/sorry" />
    } else {
    return (
        <div id="outer-container">
            {window.scrollTo(0,0)}
            <NavHeader />
            <div>
                <div id="page-wrap" className="wrapper wrapper__contact">
                    <img src={ houses }  className="people img-top" alt="line drawing of houses" ></img>
                    <h1>Please enter your contact details:</h1>
                    {displayContact}
                </div>
                <div className="navButtons">
                    <Link to={'./consent'}>
                        <Button
                            text="Back"
                            type="submit"
                            className="buttons"
                            onClick={() => {}}
                        />
                    </Link>
                    <Link to={'./begin'}>
                        <Button
                            text="Next"
                            type="submit"
                            className="buttons"
                            onClick={() => {}}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
    }
};

export default Contact;
