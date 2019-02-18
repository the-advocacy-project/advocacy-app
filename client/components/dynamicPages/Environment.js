import React from 'react';
import {Button} from '../buttons/Button';
import { Link } from 'react-router-dom';
import NavHeaderForm from '../navigation/NavHeaderForm';

function Environment(props) {
    return (

        <div>
            <NavHeaderForm />
            <h1>Maintaining a habitable home environment</h1>
            <h2>Please check what applies to you</h2>
            <ul>
                <li>
                    <label>Do you need help to make sure all your bills are paid?</label>
                    <input type="checkbox"></input>
                </li>
                <li>
                    <label>Do you need help to make sure your home is clean?</label>
                    <input type="checkbox"></input>
                </li>
                <li>
                    <label>Do you need help to make sure your home is free from damp?</label>
                    <input type="checkbox"></input>
                </li>
            </ul>
            <label>The questions above are examples of how you may meet this requirement. Please expand and / or let us know other ways that you need help maintaining a habitable home environment.</label>
            <textarea placeholder="Tell us more..."></textarea>
            <div className="navButtons"><Link to={'./safety'} >
                <Button 
                text='Back' 
                type='submit' 
                className="buttons"
                onClick={() => {}}/>
            </Link>
            <Link to={'./relationships'} >
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

export default Environment;
