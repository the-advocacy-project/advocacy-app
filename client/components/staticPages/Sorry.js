import React from 'react';
import NavHeader from '../navigation/NavHeader';
import '../../styles/css/how.css';
import { Link } from 'react-router-dom';
import {Button} from '../buttons/Button';

function Sorry(){
    return(
        <div id="outer-container">
            {window.scrollTo(0,0)}
            <NavHeader />
            <div id="page-wrap" className="wrapper">
                <h1>Sorry!</h1>
                <p>In order to continue with your application, we need your consent to share your
                    information with the Hackney Council and with the Advocacy Project. <br/><br/>
                    Please click the back button and revise your consent if you would like to continue.</p>


                <div className="navButtons">
                    <Link to={'./consent'} >
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

export default Sorry;
