import React from 'react';
import logo from '../../images/logo.png'
import people from '../../images/people.png'


function Home(){
    return(
        <div>
            <h1><img src={logo} alt="The Advocacy Project logo"></img></h1>
            <h1>Your voice. Your rights. Your choice.</h1>
            <img src={people} alt="line drawing of people's faces"></img>
            <p>Need help with day to day tasks?<br/>
            See if you can get the help you need.</p>
        </div>
    )
}

export default Home;