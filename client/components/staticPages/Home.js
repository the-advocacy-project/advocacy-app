import React from 'react';
import logo from '../../images/logo.png';
import people from '../../images/people.png';
import '../../styles/css/home.css';
import NavHeader from '../navigation/navHeader';
import Button from '../buttons/Button';


function Home(){
    return(
        <div>
            <NavHeader />
            <div className="wrapper">
                <img src={logo} className='logo' alt="The Advocacy Project logo"></img>
                <h2>Your voice. Your rights. Your choice.</h2>
                <img src={people} className='people' alt="line drawing of people's faces"></img>
                <p className='tag-line'>
                    Need help with day to day tasks?<br/>
                    See if you can get the help you need.
                </p>
            </div>
        </div>
    )
}

export default Home;