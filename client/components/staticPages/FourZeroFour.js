import React from 'react';
import people from '../../images/people.png'
import NavHeader from '../navigation/navHeader';

function FourZeroFour(){
    return(
        <div>
            <NavHeader />
            <h1>Whoops, there's been an error</h1>
            <h2>404</h2>
            <p>Return to the homepage.</p>
            <img src={ people } alt="line drawing of people's faces"/>
        </div>
    )
};

export default FourZeroFour;