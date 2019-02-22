import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from "../buttons/Button";

import {Home, About, Care, Support, Key, Application, Advocacy} from '../../images/MenuImages';

import "../../styles/css/menustyle.css";

function Menu() {



    return (
        <div className="wrapper_menu" className="menuList">
        <NavHeader />
            <Link to={'./'} >
                <Home />
                <p className="menuText">Home</p>
            </Link>
            <Link to={'./about'} className="menuList">
                <About />
                <p className="menuText">About</p>
            </Link>
            <Link to={'./care-act'} className="menuList" >
                <Care />
                <p className="menuText">The Care Act</p>

            </Link>
            <Link to={'./support'} className="menuList">
                <Support />
                <p className="menuText">Eligibility Criteria</p>
            </Link>
            <Link to={'./key-rights'} className="menuList">
                <Key />
                <p className="menuText">Key Rights</p>
            </Link>
            <Link to={'./initial-checks'} className="menuList" >
                <Application />
                <p className="menuText">Initial Checks</p>
            </Link>
            <Link to={'./advocacy'} className="menuList">
                <Advocacy />
                <p className="menuText">Your Application</p>
            </Link>

        </div>
    );
}

export default Menu;
