import React from 'react';
import NavHeader from '../navigation/navHeader';
import '../../styles/css/home.css';

function Sorry(){
    return(
        <div>
            <Navheader />
            <h1>Sorry, we need your consent.</h1>
            <p>In order to continue with your application, we need your consent to share your
                 information with the Hackney Council and with the Advocacy Project. Please click 
                 Back and revise your consent if you would like to continue.</p>
        </div>
    )
}

export default Sorry;