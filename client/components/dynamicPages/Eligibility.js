import React from 'react';
import { Button } from '../buttons/Button';
import { Link } from 'react-router-dom';
import NavHeader from '../navigation/NavHeader';
import '../../styles/css/home.css';

function Eligibility(props) {
    const displayEligibility = Object.keys(props.info).map((qs, i) => {
        if (qs === 'more') {
            return (
                <div>
                    <label>
                        This includes if you have a condition as a result of
                        physical, mental, sensory, learning or cognitive
                        disabilities or illnesses, substance misuse or brain
                        injury.
                    </label>
                    <div className="textAreaInput">
                        <textarea
                            placeholder="Tell us more..."
                            className="textArea more__questions"
                            type="text"
                            name="more"
                            key={i}
                            onChange={event => {
                                event.preventDefault();
                                props.handleChangeInput(
                                    event,
                                    qs,
                                    props.section
                                );
                            }}
                        />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="checkboxInput">
                    <h2 className="checkboxText">{props.info[qs].question}</h2>
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
                    <div className="margin50" />
                </div>
            );
        }
    });

    return (
        <div id="outer-container">
            {/* {window.scrollTo(0,0)} */}
            <NavHeader />

            <div id="page-wrap" className="wrapper">
                <h1>Eligibility</h1>
                <div className="progress-bar">
                    <div className="progress-bar--blue90" />
                </div>
                <h2 className="margin50 h2__questions">
                    Please check what applies to you
                </h2>
                {displayEligibility}
                <div className="margin50 clear" />
            </div>
            <div className="navButtons">
                <Link to={'./responsibilites'}>
                    <Button
                        text="Back"
                        type="submit"
                        className="buttons"
                        onClick={() => {}}
                    />
                </Link>
                <Link to={'./wellbeing'}>
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

export default Eligibility;
