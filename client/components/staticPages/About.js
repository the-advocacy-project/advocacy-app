import React from 'react';
import NavHeader from '../navigation/NavHeader';
import logo from '../../images/logo.png';

import '../../styles/css/styles.css';
import '../../styles/css/about.css'

function About() {
    return (
        <div id="outer-container">
            {window.scrollTo(0,0)}
            <NavHeader />
            <div id="page-wrap" className="wrapper about-wrapper">
                <img src={require('../../images/logo.png')} className="align-center logo-about" />
                <h1 className="about-h1">About us</h1>
                <p>
                    The Advocacy Project has developed this app to help people get the help they need from the local
                    authority.
                    <br />
                    <br />
                    <section className="contact-p">
                            The Advocacy Project
                        <br />
                            020 8969 3000
                        <br />
                        <br />
                            Email:{' '}
                        <a href="mailto: info@advocacyproject.org.uk" target="_blank">info@advocacyproject.org.uk</a>
                    </section>

                    <br />
                    <br />
                    For more information, check out&nbsp;
                    <a href="https://www.advocacyproject.org.uk/news/the-advocacy-project-in-hackney/" target="_blank">
                        our website.
                    </a>
                </p>
            </div>
        </div>
    );
}

export default About;
