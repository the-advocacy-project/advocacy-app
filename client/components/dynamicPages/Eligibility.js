import React from 'react';
import {Button} from '../buttons/Button';
import { Link } from 'react-router-dom';
import NavHeader from '../navigation/navHeader';


function Eligibility(props) {
    return (
        <div>
            <NavHeader />
            <h1>Eligibility</h1>
            <label>Does your need for support arise from a physical or mental impairment or illness?</label>
            <p>This includes if you have a condition as a result of physical, mental, sensory, learning or cognitive disabilities or illnesses, substance misuse or brain injury.</p>
            <input type="checkbox"></input>
            <div className="navButtons"><Link to={'./responsibilites'} >
                <Button 
                text='Back' 
                type='submit' 
                className="buttons"
                onClick={() => {}}/>
            </Link>
            <Link to={'./wellbeing'} >
                <Button 
                text='Next' 
                type='submit' 
                className="buttons"
                onClick={() => {}}/>
            </Link>
        </div>
        </div>
    );
}

export default Eligibility;
