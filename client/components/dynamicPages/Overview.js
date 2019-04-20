import React from 'react';
import { Button } from '../buttons/Button';
import { Link } from 'react-router-dom';
import NavHeader from '../navigation/NavHeader';
import '../../styles/css/home.css';

function Overview(props) {
    // console.log(props.info);
    const sections = Object.keys(props.info); //get array of object sections
    // console.log(sections);
    // sections.forEach(item => {
    //     console.log('zzz: ', Object.keys(props.info[item]));
    // });
    let displayOverview = [];
    sections.forEach(item => {
        // console.log(props.info[item]);

        displayOverview.push(
            Object.keys(props.info[item]).map((qs, i) => {
                if (qs === 'more' || qs === 'more2') {
                    // console.log('I am textarea');
                    return (
                        <div>
                            <label>
                                Further information about my needs:
                            </label>
                            <div
                                className="textAreaInput"
                                key={`overview-${i}`}
                            >
                                <textarea
                                    placeholder="Tell us more..."
                                    className="textArea more__questions"
                                    type="text"
                                    name="more"
                                    value={props.info[item][qs].more}
                                    key={`input-${i}`}
                                    onChange={event => {
                                        event.preventDefault();
                                        props.handleChangeInput(
                                            event,
                                            qs,
                                            item
                                        );
                                    }}
                                />
                            </div>
                        </div>
                    );
                } else if (qs.includes('contactData')) {
                    return (
                        <div
                            className="input-align margin50"
                            key={`container-${i}`}
                        >
                            <p>{props.info[item][qs].question}</p>
                            <input
                                type="text"
                                key={`input-${i}`}
                                value={props.info[item][qs].more}
                                name="more"
                                onChange={event => {
                                    event.preventDefault();
                                    props.handleChangeInput(event, qs, item);
                                }}
                            />
                        </div>
                    );
                } else {
                    // console.log('I am a checkbox');
                    // console.log('checked: ', props.info[qs].agree);
                    //console.log('checked: ', props.info);
                    return (
                        <div className="checkboxInput">
                            <h2 className="checkboxText">
                                {props.info[item][qs].question}
                            </h2>
                            <input
                                className="checkBox"
                                type="checkbox"
                                checked={props.info[item][qs].agree}
                                name="agree"
                                key={i}
                                onChange={event =>
                                    props.toggleChange(event, qs, item)
                                }
                            />
                            <div className="margin50" />
                        </div>
                    );
                }
            })
        );
    });

    // });

    return (
        <div id="outer-container">
            {/* {window.scrollTo(0, 0)} */}
            <NavHeader />
            <div id="page-wrap" className="wrapper">
                <h1>Overview</h1>
                <h2 className="margin50 h2__questions">
                    Please check what applies to you
                </h2>
                {displayOverview}
            </div>
            <div className="navButtons">
                <Link to={'./duty'}>
                    <Button
                        text="Back"
                        type="submit"
                        className="buttons"
                        onClick={() => {}}
                    />
                </Link>
                <Link to={'./complete'}>
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

export default Overview;
