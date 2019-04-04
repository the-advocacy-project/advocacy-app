import React from 'react';
import { Button } from '../buttons/Button';
import { Link } from 'react-router-dom';
import NavHeaderForm from '../navigation/NavHeaderForm';
import '../../styles/css/styles.css';

function Environment(props) {
    const displayEnvironment = Object.keys(props.info).map((qs, i) => {
        if (qs === 'more') {
            return (
                <div>
                    <label>
                        The questions above are examples of how you may need
                        help. Please expand and / or let us know other ways that
                        you need help maintaining a habitable home environment.
                    </label>
                    <div className="textAreaInput" key={`environment-${i}`}>
                        <textarea
                            placeholder="Tell us more..."
                            className="textArea more__questions"
                            type="text"
                            name="more"
                            key={`input-${i}`}
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
            <NavHeaderForm>
                <h1 className="h1__questions">
                    Maintaining a habitable home environment
                </h1>
                <div className="nav-containerForm--green" />
            </NavHeaderForm>
            <div id="page-wrap" className="wrapper">
                <div className="progress-bar">
                    <div className="progress-bar--blue60" />
                </div>
                <h2 className="margin50 h2__questions">
                    Please check what applies to you
                </h2>
                {displayEnvironment}
                <div className="margin50 clear" />
            </div>
            <div className="navButtons">
                <Link to={'./safety'}>
                    <Button
                        text="Back"
                        type="submit"
                        className="buttons"
                        onClick={() => {}}
                    />
                </Link>
                <Link to={'./relationships'}>
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

export default Environment;
