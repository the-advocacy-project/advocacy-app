import React from 'react';
import logo from '../../images/logo.png';

function About() {
    return (
        <div>
            <img src={ logo } class="logo"></img>
            <h1>About us</h1>
            <p>The Advocacy Project has developed this app to help people 
                with the process of getting the help they need from the local authority. 
                <br/>
                <br/>
                For more information, check out&nbsp;
                <a href="https://www.advocacyproject.org.uk/news/the-advocacy-project-in-hackney/">our website.</a>
                </p>
        </div>
    );
}

export default About;
