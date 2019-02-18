import React from 'react';
import {Button} from '../buttons/Button';
import { Link } from 'react-router-dom';
import NavHeaderForm from '../navigation/NavHeaderForm';

function Toilet(props) {
    return (
        <div>
            <NavHeaderForm />
            <h1>Managing toilet needs</h1>
            <h2>Please check what applies to you</h2>
            <ul>
                <li>
                    <label>Do you need help to access the toilet?</label>
                    <input type="checkbox"></input></li>
                <li>
                    <label>Do you need help to use the toilet? </label>
                    <input type="checkbox"></input></li>
                <li>
                    <label> Do you need help to go to the toilet at night</label>
                    <input type="checkbox"></input></li>
            </ul>
            <label>The questions above are examples of how you may meet this requirement. Please expand and / or let us know other ways that you need help managing toilet needs.</label>
            <textarea placeholder="Tell us more..."></textarea>
            <div className="navButtons"><Link to={'./hygiene'} >
                <Button 
                text='Back' 
                type='submit' 
                className="buttons"
                onClick={() => {}}/>
            </Link>
            <Link to={'./clothing'} >
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

export default Toilet;
