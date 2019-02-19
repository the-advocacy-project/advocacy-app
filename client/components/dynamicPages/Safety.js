import React from 'react';
import { Button } from '../buttons/Button';
import { Link } from 'react-router-dom';
import NavHeaderForm from '../navigation/NavHeaderForm';
import '../../styles/css/styles.css';

function Safety(props) {
    const displayNutrition = Object.keys(props.info).map((qs, i) => {
        if (qs === 'more') {
            console.log('I am textarea');
            return (
                <div>
                    <label>
                        The questions above are examples of how you may meet
                        this requirement. Please expand and / or let us know
                        other ways that you need help using your home safely.
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
            <NavHeaderForm>
                <h1 className="h1__questions">
                    Being able to make use of your home safely
                </h1>
            </NavHeaderForm>
            {/* <h1 className="nutritionH1">Managing and Maintaining Nutrition</h1> */}
            <div className="wrapper">
                <h2 className="margin50 h2__questions">
                    Please check what applies to you
                </h2>
                {displayNutrition}
                <div className="margin50 clear" />
            </div>
            <div className="navButtons">
                <Link to={'./clothing'}>
                    <Button
                        text="Back"
                        type="submit"
                        className="buttons"
                        onClick={() => {}}
                    />
                </Link>
                <Link to={'./environment'}>
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

export default Safety;
