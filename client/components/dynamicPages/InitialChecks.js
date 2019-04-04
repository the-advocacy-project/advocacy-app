import React from 'react';
import NavHeader from '../navigation/NavHeader';
import { Link } from 'react-router-dom';
import { Button } from '../buttons/Button';
import '../../styles/css/check_consent.css';

function InitialChecks(props) {
    console.log('check', props.info.over18.agree, props.info.resident.agree);
    const displayInitialChecks = Object.keys(props.info).map((qs, i) => {
        return (
            <div className="checkboxInput">
                <h2 className="checkboxText title--green margin50">
                    {props.info[qs].question}
                </h2>
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
    });

    return (
        <div id="outer-container">
            {/* {window.scrollTo(0,0)} */}
            <NavHeader />
            <div id="page-wrap" className="wrapper">
                <h1>Let’s get started...</h1>
                <p>Please check the box below to confirm that:</p>
                <div className="margin50 clear" />
                {displayInitialChecks}
            </div>

            <div className="navButtons">
                <Link to={'./how'}>
                    <Button
                        text="Back"
                        type="submit"
                        className="buttons"
                        onClick={() => {}}
                    />
                </Link>
                <Link to={'./consent'}>
                    <Button
                        text="Next"
                        type="submit"
                        className="buttons"
                        onClick={() => {}}
                    />
                </Link>
            </div>
        </div>
    );
}

export default InitialChecks;
