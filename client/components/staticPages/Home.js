import React from 'react';
import logo from '../../images/logo.png';
import people from '../../images/people.png';
import '../../styles/css/home.css';
import NavHeader from '../navigation/navHeader';
import {Begin} from '../buttons/Button';
import { Link } from 'react-router-dom';



function Home(){

    return(
        <div>
            <NavHeader className="nav-desktop"/>
            <div className="wrapper">
                <img src={logo} className='logo' alt="The Advocacy Project logo"></img>
                <h2 className="tag-line1">Your voice. Your rights. Your choice.</h2>
                <img src={people} className='people' alt="line drawing of people's faces"></img>
                <p className="tag-line2">Need help with day to day tasks?<br/>
            See if you can get the help you need.</p>
           
            <Link to={'./help'} className="beginButtonContainer" >
                <Begin 
                text='Begin' 
                type='submit' 
                onClick={() => {}}/>
            </Link>
            </div>
        </div>
    )
}

export default Home;