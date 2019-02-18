import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from '../buttons/Button';

function Help(){
    return(
        <div>
            <h1>How we aim to help</h1>
            <p>The Advocacy Project has developed this app to help people with the process of 
                getting the help they need from the local authority.
                <br/>
                <br/>
                This app will help you:</p>
            <ul>
                <li>Identify if you have a right to a Care Act assessment by the local authority</li>
                <li>Identify if you may have a right to a Care Act Advocate</li>
                <li>Identify if you may be eligible for support</li>
                <li>Be involved in the assessment process</li>
                <li>Secure the support you need if you are eligible</li>
            </ul>
            <p>The Care Act is about helping and protecting people aged 18 and over who need care and 
                support. The local authority has a duty under the Care Act to make sure people have the 
                support they need to improve their independence and wellbeing and be safe.
                <br/>
                <br/>
                Click here to find out more about <a href="./care-act">the Care Act</a> or <a href="./Support">the eligibility criteria.</a>
                <br/>
                <br/>
                Need help with this app? 
                <br/>
                <br/>
                Please contact us at: 
                <br/>
                <br/>
                The Advocacy Project <br/>
                73 St Charles Square<br/>
                London<br/>
                W10 6EJ<br/>
                <br/>
                <br/>
                020 8969 3000
                <br/>
                <br/>
                Email: <a href = "mailto: info@advocacyproject.org.uk">info@advocacyproject.org.uk</a>
                </p>
                
           <div className="navButtons"><Link to={'./'} >
                <Button 
                text='Back' 
                type='submit' 
                className="buttons"
                onClick={() => {}}/>
            </Link>
            <Link to={'./how'} >
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

export default Help;