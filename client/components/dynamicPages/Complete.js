import React from 'react';
import { Button } from '../buttons/Button';
import { Link } from 'react-router-dom';
import NavHeader from '../navigation/NavHeader';
import '../../styles/css/home.css';

function Complete(props) {
    console.log('handlesubmit prop', props.info);

    return (
        <div id="outer-container">
            {props.info === true && <h2>You have unread messages.</h2>}
            {window.scrollTo(0, 0)}
            <NavHeader />
            <div id="page-wrap" className="wrapper">
                <h1>Complete the application</h1>
                <p>
                    Please check the email addresses below before submitting
                    your application. Click button to send.
                </p>
            </div>
            <div className="navButtons">
                <Link to={'./overview'}>
                    <Button
                        text="Back"
                        type="submit"
                        className="buttons"
                        onClick={() => {}}
                    />
                </Link>
                <Link to={'/'}>
                    <Button
                        text="Send"
                        type="submit"
                        className="buttons"
                        onClick={event => {
                            props.handleSubmit(event);
                            {
                                alert('Form has been submited');
                            }
                        }}
                    />
                </Link>
            </div>
        </div>
    );
}

export default Complete;
