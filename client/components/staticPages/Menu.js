import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div>
            <Link to={'./'}>
                <button>Home</button>
            </Link>
            <Link to={'./about'}>
                <button>About</button>
            </Link>
            <Link to={'./care-act'}>
                <button>The Care Act</button>
            </Link>
            <Link to={'./eligibility'}>
                <button>Eligibility Criteria</button>
            </Link>
            <Link to={'./key-rights'}>
                <button>Key Rights</button>
            </Link>
            <Link to={'./initial-checks'}>
                <button>Your Application</button>
            </Link>
            <Link to={'./advocacy'}>
                <button>Advocacy</button>
            </Link>
        </div>
    );
}

export default Menu;
