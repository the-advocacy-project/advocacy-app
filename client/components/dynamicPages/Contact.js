import React from 'react';
import houses from '../../images/houses.png';
import NavHeader from '../navigation/NavHeader';
import { Button } from '../buttons/Button';
import { Link } from 'react-router-dom';

const Contact = props => {
    const displayContact = Object.keys(props.info).map((qs, index) => {
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

    return (
        <div>
            <NavHeader />
            <div>
                <div className="wrapper wrapper__contact">
                    <img
                        src={houses}
                        className="people img-top"
                        alt="line drawing of houses"
                    />
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
};

export default Contact;
