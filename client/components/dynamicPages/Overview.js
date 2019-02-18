import React from 'react';
import {Button} from '../buttons/Button';
import { Link } from 'react-router-dom';

function Overview(){
    return(
        <div>
            <h1>Overview</h1>
            <div className="navButtons"><Link to={'./duty'} >
                <Button 
                text='Back' 
                type='submit' 
                className="buttons"
                onClick={() => {}}/>
            </Link>
            <Link to={'./completes'} >
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

export default Overview;