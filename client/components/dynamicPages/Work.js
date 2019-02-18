import React from 'react';
import {Button} from '../buttons/Button';
import { Link } from 'react-router-dom';

function Work(props) {
    return (
        <div>
            <h1>Accessing and engaging in work, training, education or volunteering</h1>
            <h2>Please check what applies to you</h2>
            <ul>
                <li>
                    <label>Do you need help to look for new opportunities?</label>
                    <input type="checkbox"></input>
                </li>
                <li>
                    <label>Do you need help to apply for things?</label>
                    <input type="checkbox"></input>
                </li>
                <li>
                    <label>Do you need help to get somewhere or take part in something you are interested in?</label>
                    <input type="checkbox"></input></li>
            </ul>
            <label>The questions above are examples of how you may meet this requirement. Please expand and / or let us know other ways that you need help developing and maintaining accessing and engaging in work, training, education or volunteering.</label>
            <textarea placeholder="Tell us more..."></textarea>
            <div className="navButtons"><Link to={'./relationships'} >
                <Button 
                text='Back' 
                type='submit' 
                className="buttons"
                onClick={() => {}}/>
            </Link>
            <Link to={'./transport'} >
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

export default Work;
