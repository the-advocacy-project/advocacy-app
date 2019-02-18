import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from "../buttons/Button";

import {Home, About, Care, Eligibility, Key, Application, Advocacy} from '../../images/MenuImages';

import "../../styles/css/menustyle.css";


function Menu() {



    return (
        <div className="wrapper" className="menuList">
        <NavHeader />
            <Link to={'./'} >
                <Home />
                <p>Home</p>
            </Link>
            <Link to={'./about'} className="menuList">
                <About />
                <p>About</p>
            </Link>
            <Link to={'./care-act'} className="menuList" >
                <Care />
                <p>The Care Act</p>

            </Link>
            <Link to={'./eligibility'} className="menuList">
                <Eligibility />
                <p>Eligibility Criteria</p>
            </Link>
            <Link to={'./key-rights'} className="menuList">
                <Key />
                <p>Key Rights</p>
            </Link>
            <Link to={'./initial-checks'} className="menuList" >
                <Application />
                <p>Initial Checks</p>
            </Link>
            <Link to={'./advocacy'} className="menuList">
                <Advocacy />
                <p>Your Application</p>
            </Link>
            
        </div>
    );
}

export default Menu;
