import React from 'react';
import {Button} from '../buttons/Button';
import { Link } from 'react-router-dom';
import NavHeader from '../navigation/navHeader';

function Complete(){
    return(
        <div>
            <NavHeader />
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
                text='Back to start' 
                type='submit' 
                className="buttons"
                onClick={() => {}}/>
            </Link>
        </div>
        </div>
    )
}

export default Complete;