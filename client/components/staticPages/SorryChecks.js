import React from 'react';
import NavHeader from '../navigation/NavHeader';
import '../../styles/css/how.css';
import { Link } from 'react-router-dom';
import {Button} from '../buttons/Button';

function SorryChecks(){
    return(
        <div id="outer-container">
            <NavHeader />
            <div className="wrapper">
                <h1>Sorry!</h1>
                <p>You need to be 18 years of age or older and a resident of Hackney in order to apply for support under the Care Act 2014.</p>


                <div className="navButtons">
                    <Link to={'./initial-checks'} >
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

export default SorryChecks;
