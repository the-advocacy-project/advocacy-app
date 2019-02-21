import React from 'react';
import '../../styles/css/how.css';
import NavHeader from '../navigation/navHeader';
import { Link } from 'react-router-dom';
import {Button} from '../buttons/Button';

function How(){
    return(
        <div>
            {window.scrollTo(0,0)}
            <NavHeader />
            <div className="wrapper">
                <h1 className="how-h1">How this works</h1>
                <div className="how-list">
                    <ul>
                        <li>Answer a set of questions about what you can and cannot do</li>
                        <br/>
                        <br/>
                        <li>With your consent, the Advocacy Project will send this information to the
                    Adult Social Care team at your local authority</li>
                        <br/>
                        <br/>
                        <li>Select ‘Send to me’ if you would like a copy of your answers</li>
                        <br/>
                        <br/>
                        <li>Select ‘The Advocacy Project’ if you would like us to contact
                    you about advocacy support</li>
                        <br/>
                        <br/>
                        <li>The local authority will look at your information and will make a
                    decision about your right to a Care Act assessment and your right
                    to a Care Act Advocate. </li>
                        <br/>
                    </ul>
                    <p className="disclaimer">Using this app does not guarantee that you are eligible for support under the Care Act. </p>
                </div>
            </div>
            <div className="navButtons"><Link to={'./help'} >
                <Button
                    text='Back'
                    type='submit'
                    className="buttons"
                    onClick={() => {}}/>
            </Link>
            <Link to={'./initial-checks'} >
                <Button
                    text='Next'
                    type='submit'
                    className="buttons"
                    onClick={() => {}}/>
            </Link>
            </div>
        </div>
    )
}

export default How;
