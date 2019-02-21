import React from 'react';
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom';
import {Button} from "../buttons/Button";
import {Home, About, Care, Eligibility, Key, Application, Advocacy} from '../../images/MenuImages';


import "../../styles/css/menustyle.css";

export default props => {
    return (
        <Menu right className="wrapper_menu" className="menuList" {...props}>
            <Link to={'./'} className="menu-item menuList">
                <Home />
                <p className="menuText">Home</p>
            </Link>
            <Link to={'./about'} className="menu-item menuList">
                <About />
                <p className="menuText">About</p>
            </Link>
            <Link to={'./care-act'} className="menu-item menuList" >
                <Care />
                <p className="menuText">The Care Act</p>

            </Link>
            <Link to={'./eligibility'} className="menu-item menuList">
                <Eligibility />
                <p className="menuText">Eligibility Criteria</p>
            </Link>
            <Link to={'./key-rights'} className="menu-item menuList">
                <Key />
                <p className="menuText">Key Rights</p>
            </Link>
            <Link to={'./initial-checks'} className="menu-item menuList" >
                <Application />
                <p className="menuText">Your Application</p>
            </Link>
            <Link to={'./advocacy'} className="menu-item menuList">
                <Advocacy />
                <p className="menuText">Advocacy</p>
            </Link>

        </Menu>
    );
};
