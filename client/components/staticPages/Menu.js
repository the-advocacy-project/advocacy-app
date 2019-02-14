import React from 'react';
import { Link } from 'react-router-dom';
import {Home, About, Care, Eligibility, Key, Application, Advocacy} from '../../images/MenuImages';


function Menu() {


    return (
        <div>
            <Link to={'./'}>
                <Home />
                <button>Home</button>
            </Link>
            <Link to={'./about'}>
                <About />
                <button>About</button>
            </Link>
            <Link to={'./care-act'}>
                <Care />
                <button>The Care Act</button>

            </Link>
            <Link to={'./eligibility'}>
                <Eligibility />
                <button>Eligibility Criteria</button>
            </Link>
            <Link to={'./key-rights'}>
                <Key />
                <button>Key Rights</button>
            </Link>
            <Link to={'./initial-checks'}>
                <Application />
                <button>Your Application</button>
            </Link>
            <Link to={'./advocacy'}>
                <Advocacy />
                <button>Advocacy</button>
            </Link>
        </div>
    );
}

export default Menu;


