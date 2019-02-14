import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

function About() {
    return (
        <div>
            <h1>About</h1>
            <Link to={'./menu'}>
                <button>Menu</button>
            </Link>
            <img src={logo} className="logo" />
            <h1>About us</h1>
            <p>
                The Advocacy Project has developed this app to help people with
                the process of getting the help they need from the local
                authority.
                <br />
                <br />
                For more information, check out&nbsp;
                <a href="https://www.advocacyproject.org.uk/news/the-advocacy-project-in-hackney/">
                    our website.
                </a>
            </p>
        </div>
    );
}

export default About;
