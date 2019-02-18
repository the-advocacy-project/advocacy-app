import React from 'react';
import {Button} from '../buttons/Button';
import { Link } from 'react-router-dom';
import NavHeaderForm from '../navigation/NavHeaderForm';

function Transport(props) {
    return (
        <div>
            <NavHeaderForm />
            <h1>Making use of necessary facilities or services in the local community</h1>
            <h3>including public transport, and recreational facilities or services</h3>
            <h2>Please check what applies to you</h2>
            <ul>
                <li>
                    <label>Do you need help to access your local shops or park?</label>
                    <input type="checkbox"></input></li>
                <li>
                    <label>Do you need help to get to your GP or the pharmacy?</label>
                    <input type="checkbox"></input></li>
                <li>
                    <label>Do you need help to use public transport or arrange a taxi?</label>
                    <input type="checkbox"></input></li>
            </ul>
            <label>The questions above are examples of how you may meet this requirement. Please expand and / or let us know other ways that you need help making use of necessary facilities or services in the local community, including public transport, and recreational facilities or services</label>
            <textarea placeholder="Tell us more..."></textarea>
            <div className="navButtons"><Link to={'./work'} >
                <Button 
                text='Back' 
                type='submit' 
                className="buttons"
                onClick={() => {}}/>
            </Link>
            <Link to={'./responsibilites'} >
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

export default Transport;
