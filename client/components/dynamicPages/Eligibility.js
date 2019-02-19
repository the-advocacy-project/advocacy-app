import React from 'react';
import { Button } from '../buttons/Button';
import { Link } from 'react-router-dom';
import NavHeader from '../navigation/navHeader';
import '../../styles/css/home.css';

function Eligibility(props) {
    const displayNutrition = Object.keys(props.info).map((qs, i) => {
        if (qs === 'more') {
            console.log('I am textarea');
            return (
                <div>
                    <label>
                        This includes if you have a condition as a result of
                        physical, mental, sensory, learning or cognitive
                        disabilities or illnesses, substance misuse or brain
                        injury.
                    </label>
                    <div className="textAreaInput">
                        <p className="textAreaText">Tell us more</p>
                        <textarea
                            className="textArea more__questions"
                            type="text"
                            name="more"
                            key={i}
                            onChange={event =>
                                props.handleChangeInput(
                                    event,
                                    qs,
                                    props.section
                                )
                            }
                        />
                    </div>
                </div>
            );
        } else {
            console.log('I am a checkbox');
            console.log('checked: ', props.info[qs].agree);
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
        <div>
            <NavHeader />

            <div className="wrapper">
                <h1>Eligibility</h1>
                <h2 className="margin50 h2__questions">
                    Please check what applies to you
                </h2>
                {displayNutrition}
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
