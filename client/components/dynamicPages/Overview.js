import React from 'react';
import { Button } from '../buttons/Button';
import { Link } from 'react-router-dom';
import NavHeader from '../navigation/navHeader';
import '../../styles/css/home.css';

function Overview(props) {
    // console.log(props.info);
    const sections = Object.keys(props.info); //get array of object sections
    console.log(sections);
    // sections.forEach(item => {
    //     console.log('zzz: ', Object.keys(props.info[item]));
    // });
    let displayOverview = [];
    for (let j = 0; j < sections.length; j++) {
        console.log(props.info[sections[j]]);

        displayOverview.push(
            Object.keys(props.info[sections[j]]).map((qs, i) => {
                if (qs === 'more') {
                    console.log('I am textarea');
                    return (
                        <div>
                            <label>
                                The questions above are examples of how you may
                                need help. Please expand and / or let us know
                                other ways that you need help maintaining and
                                managing nutritrion below.
                            </label>
                            <div
                                className="textAreaInput"
                                key={`nutrition-${i}`}
                            >
                                <textarea
                                    placeholder="Tell us more..."
                                    className="textArea more__questions"
                                    type="text"
                                    name="more"
                                    value={props.info[sections[j]][qs].more}
                                    key={`input-${i}`}
                                    onChange={event => {
                                        event.preventDefault();
                                        props.handleChangeInput(
                                            event,
                                            qs,
                                            sections[j]
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
                            <p>{props.info[sections[j]][qs].question}</p>
                            <input
                                type="text"
                                key={`input-${i}`}
                                value={props.info[sections[j]][qs].more}
                                name="more"
                                onChange={event => {
                                    event.preventDefault();
                                    props.handleChangeInput(
                                        event,
                                        qs,
                                        sections[j]
                                    );
                                }}
                            />
                        </div>
                    );
                } else {
                    console.log('I am a checkbox');
                    // console.log('checked: ', props.info[qs].agree);
                    console.log('checked: ', props.info);
                    return (
                        <div className="checkboxInput">
                            <h2 className="checkboxText">
                                {props.info[sections[j]][qs].question}
                            </h2>
                            <input
                                className="checkBox"
                                type="checkbox"
                                checked={props.info[sections[j]][qs].agree}
                                name="agree"
                                key={i}
                                onChange={event =>
                                    props.toggleChange(event, qs, sections[j])
                                }
                            />
                            <div className="margin50" />
                        </div>
                    );
                }
            })
        );
    }

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
