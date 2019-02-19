import React from 'react';
import { Link } from 'react-router-dom';
import NavHeader from '../navigation/navHeader';
import logo from '../../images/logo.png';
import '../../styles/css/styles.css';

function About() {
    return (
        <div>
            <NavHeader />
            <div className="wrapper">
                <img src={logo} className="logo align-center" />
                <h1>About us</h1>
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
                            Email:{' '}
                            <a href="mailto: info@advocacyproject.org.uk">info@advocacyproject.org.uk</a>
                    </section>

                    <br /><br />
                    For more information, check out&nbsp;
                    <a href="https://www.advocacyproject.org.uk/news/the-advocacy-project-in-hackney/">
                        our website.
                    </a>
                </p>
            </div>
        </div>
    );
}

export default About;
