import React from 'react';
import {Button} from '../buttons/Button';
import { Link } from 'react-router-dom';
import NavHeaderForm from '../navigation/NavHeaderForm';

function Clothing(props) {
    return (
        <div>
            <NavHeaderForm />
            <h1>Being appropriately clothed</h1>
            <h2>Please check what applies to you</h2>
            <ul>
                <li><label>Do you need help to put your clothes and shoes on in the morning?</label> <input type="checkbox"></input></li>
                <li><label>Do you need help to take your clothes and shoes off?</label> <input type="checkbox"></input></li>
                <li><label>Do you need help to buy new clothes for different occasions such as work?</label> <input type="checkbox"></input></li>
            </ul>
            <label>The questions above are examples of how you may meet this requirement. Please expand and / or let us know other ways that you need help being appropriately clothed.</label>
            <textarea placeholder="Tell us more..."></textarea>
            <div className="navButtons"><Link to={'./toilet'} >
                <Button 
                text='Back' 
                type='submit' 
                className="buttons"
                onClick={() => {}}/>
            </Link>
            <Link to={'./safety'} >
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

export default Clothing;
