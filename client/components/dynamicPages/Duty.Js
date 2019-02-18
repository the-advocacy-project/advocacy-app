import React from 'react';
import {Button} from '../buttons/Button';
import { Link } from 'react-router-dom';
import NavHeader from '../navigation/navHeader';
import '../../styles/css/home.css';

function Duty(){
    return(
        <div>
            <NavHeader />
            <h1>Duty to provide an Advocate</h1>
            <p>The Care Act puts people in control of their care and support. 
                It gives people the right to be involved.
                You might be entitled to free support help from an advocate to help you to: </p>
            <ul>
                <li>think about what you want</li>
                <li>understand your rights</li>
                <li>be fully involved in the assessment process</li>
                <li>communicate with the local authority</li>
            </ul>
            <label>Would you like free support from an advocate</label>
            <label>Yes</label><input type="checkbox"></input>
            <label>No</label><input type="checkbox"></input>
            <label>Is there anything you want to tell the advocate about your communication needs?</label>
            <textarea placeholder="Tell us more..."></textarea>
            <label>Is there anything you want the local authority to know about your communication needs?</label>
            <textarea placeholder="Tell us more..."></textarea>
            <a href="../key-rights">Click here for more information on your right to a Care Act advocate </a>
            <div className="navButtons"><Link to={'./wellbeing'} >
                <Button 
                text='Back' 
                type='submit' 
                className="buttons"
                onClick={() => {}}/>
            </Link>
            <Link to={'./overview'} >
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

export default Duty;