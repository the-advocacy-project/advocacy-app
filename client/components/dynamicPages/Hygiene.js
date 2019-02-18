import {Button} from '../buttons/Button';
import { Link } from 'react-router-dom';
import React from 'react';

function Hygiene(props) {
    return (
        <div>
            <h1>Maintaining personal hygiene</h1>
            <h2>Please check what applies to you</h2>
            <ul>
                <li>
                    <label>Do you need help buying toiletries like soap and shampoo?</label>
                    <input type="checkbox"></input>
                </li>
                <li>
                    <label>Do you need help washing your hair and body? </label>
                    <input type="checkbox"></input>
                </li>
                <li>
                    <label>Do you need help doing your laundry and cleaning your clothes? </label>
                    <input type="checkbox"></input>
                </li>
            </ul>
            <label>The questions above are examples of how you may meet this requirement. Please expand and / or let us know other ways that you need help maintaining personal hygiene below.</label>
            <textarea placeholder="Tell us more..."></textarea>
            <div className="navButtons"><Link to={'./nutrition'} >
                <Button 
                text='Back' 
                type='submit' 
                className="buttons"
                onClick={() => {}}/>
            </Link>
            <Link to={'./toilet'} >
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

export default Hygiene;
