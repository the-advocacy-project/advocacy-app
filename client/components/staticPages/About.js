import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div>
            <h1>About</h1>
            <Link to={'./menu'}>
                <button>Menu</button>
            </Link>
        </div>
    );
}

export default About;
