import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from "../buttons/Button";


import {Home, About, Care, Eligibility, Key, Application, Advocacy} from '../../images/MenuImages';


function Menu() {

 

    return (
        
        <div className="wrapper">
            <Link to={'./'} >
                <Home />
                <p>Home</p>
            </Link>
            <Link to={'./about'} >
                <About />
                <p>About</p>
            </Link>
            <Link to={'./care-act'} >
                <Care />
                <p>The Care Act</p>

            </Link>
            <Link to={'./eligibility'} >
                <Eligibility />
                <p>Eligibility Criteria</p>
            </Link>
            <Link to={'./key-rights'} >
                <Key />
                <p>Key Rights</p>
            </Link>
            <Link to={'./initial-checks'} >
                <Application />
                <p>Initial Checks</p>
            </Link>
            <Link to={'./advocacy'} >
                <Advocacy />
                <p>Your Application</p>
            </Link>
          
        </div>
    );
}

export default Menu;


