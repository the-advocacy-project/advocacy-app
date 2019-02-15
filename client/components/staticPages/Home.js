import React from 'react';
import logo from '../../images/logo.png';
import people from '../../images/people.png';
import '../../styles/css/home.css';


function Home(){
    return(
        <div className="wrapper">
            <h1><img src={logo} className='logo' alt="The Advocacy Project logo"></img></h1>
            <h2>Your voice. Your rights. Your choice.</h2>
            <img src={people} className='people' alt="line drawing of people's faces"></img>
            <p>Need help with day to day tasks?<br/>
            See if you can get the help you need.</p>
        </div>
    )
}

export default Home;