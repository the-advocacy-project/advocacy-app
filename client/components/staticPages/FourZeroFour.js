import React from 'react';
import people from '../../images/people.png';
import NavHeader from '../navigation/navHeader';
import '../../styles/css/home.css';

function FourZeroFour(){
    return(
        <div id="outer-container">
            {window.scrollTo(0,0)}
            <NavHeader />
            <div id="page-wrap" className="wrapper">
                <h1>Whoops, there's been an error</h1>
                <h2>404</h2>
                <p>Return to the homepage.</p>
                <div className="clear"></div>
                <img src={ people } className="people" alt="line drawing of people's faces"/>
            </div>
        </div>
    )
};

export default FourZeroFour;
