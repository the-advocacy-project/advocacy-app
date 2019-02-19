import React from 'react';
import {Button} from '../buttons/Button';
import { Link } from 'react-router-dom';
import NavHeader from '../navigation/navHeader';

function Begin(){
    return(
        <div>
            <NavHeader />
            <div className="wrapper">
                <h1>Let's begin</h1>
                <p>We will now ask you a series of questions to gather evidence of your right to
                    a Care Act assessment, eligibility for support and an advocate to help you
                    through the Care Act process.
                <br/><br/>
                    The application will be broken up into three sections:</p>
                <ol>
                    <li>Eligibility</li>
                    <p>Gathering evidence of your right to a Care Act assessment and eligibility
                        for support against the outcomes outlined in the Care Act.</p>
                    <li>Wellness</li>
                    <p>Checking the extent to which your wellbeing is negatively affected if you do
                        not get the support you need to meet the outcomes outlined in the Care Act.</p>
                    <li>Advocacy</li>
                    <p>Gathering evidence about your need for an advocate to help with the process
                        of receiving support under the Care Act.</p>
                </ol>
            </div>
            <div className="navButtons"><Link to={'./contact'} >
                <Button
                    text='Back'
                    type='submit'
                    className="buttons"
                    onClick={() => {}}/>
            </Link>
            <Link to={'./nutrition'} >
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

export default Begin;
