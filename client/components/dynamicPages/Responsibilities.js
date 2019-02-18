import React from 'react';
import {Button} from '../buttons/Button';
import { Link } from 'react-router-dom';
import NavHeaderForm from '../navigation/NavHeaderForm';

function Responsibilities(props) {
    return (
        <div>
            <NavHeaderForm />
            <h1>Carrying out any caring responsibilities for a child.</h1>
            <h2>Please check what applies to you</h2>
            <ul>
                <li>
                    <label>Are you a parent, a step parent or grandparent?</label>
                    <input type="checkbox"></input>
                </li>
                <li>
                    <label>Do need help to understand all your children’s needs?</label>
                    <input type="checkbox"></input>
                </li>
                <li>
                    <label>Do you need help to carry out caring responsibilities for your children?</label>
                    <input type="checkbox"></input>
                </li>
            </ul>
            <label>The questions above are examples of how you may meet this requirement. Please expand and / or let us know other ways that you need help carrying out caring responsibilities for a child.</label>
            <textarea placeholder="Tell us more..."></textarea>
            <div className="navButtons"><Link to={'./transport'} >
                <Button 
                text='Back' 
                type='submit' 
                className="buttons"
                onClick={() => {}}/>
            </Link>
            <Link to={'./eligibility'} >
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

export default Responsibilities;
