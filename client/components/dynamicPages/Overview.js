import React from 'react';
import {Button} from '../buttons/Button';
import { Link } from 'react-router-dom';
import NavHeader from '../navigation/navHeader';
import '../../styles/css/home.css';

function Overview(){
    return(
        <div>
            <NavHeader />
            <h1>Overview</h1>
            <div className="navButtons"><Link to={'./duty'} >
                <Button 
                text='Back' 
                type='submit' 
                className="buttons"
                onClick={() => {}}/>
            </Link>
            <Link to={'./complete'} >
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