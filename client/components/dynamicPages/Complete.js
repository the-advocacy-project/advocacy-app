import React from 'react';
import {Button} from '../buttons/Button';
import { Link } from 'react-router-dom';

function Complete(){
    return(
        <div>
            <h1>Complete the application</h1>
            <p>Please check the email addresses below before submitting your application. Click button to send.</p>
            <div className="navButtons"><Link to={'./overview'} >
                <Button 
                text='Back' 
                type='submit' 
                className="buttons"
                onClick={() => {}}/>
            </Link>
            <Link to={'./'} >
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

export default Complete;