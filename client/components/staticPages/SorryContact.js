import React from 'react';
import NavHeader from '../navigation/NavHeader';
import '../../styles/css/how.css';
import { Link } from 'react-router-dom';
import {Button} from '../buttons/Button';

function SorryContact(){
    return(
        <div id="outer-container">
            <NavHeader />
            <div className="wrapper">
                <h1>Sorry!</h1>
                <p>You need to provide us with your name and one way to contact you. <br/>
                <br/>
                Please go back and update your contact details.</p>


                <div className="navButtons">
                    <Link to={'./contact'} >
                        <Button
                            text='Back'
                            type='submit'
                            className="buttons"
                            onClick={() => {}}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SorryContact;
