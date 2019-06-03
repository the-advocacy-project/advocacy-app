import React from 'react';
import '../../styles/css/help.css';
import NavHeader from '../navigation/NavHeader';
import { Link } from 'react-router-dom';
import { Button } from '../buttons/Button';
import '../../styles/css/home.css';

function Help() {
    return (
        <div id="outer-container">
            {window.scrollTo(0,0)}
            <NavHeader className="nav-container"/>

            <div id="page-wrap" className="wrapper">
                <h1 className="help-h1">
                    How we <br />
                    aim to help
                </h1>
                <p>
                    The Advocacy Project has developed this app to help people
                    get the help they need from the
                    local authority.
                </p><br/><br/>
                <p>This app will help you:</p>

                <ul className="help-list">
                    <li className="help-list margin50">
                        Outline your right to a Care Act assessment by
                        the local authority
                    </li>
                    <li className="help-list margin50">
                        Identify if you may have a right to a Care Act Advocate
                    </li>
                    <li className="help-list margin50">
                        Identify if you may be eligible for support
                    </li>
                    <li className="help-list margin50">
                        Be involved in the assessment process
                    </li>
                    <li className="help-list margin50">
                        Secure the support you need if you are eligible
                    </li>
                </ul>

                <p className="help-p">
                        The Care Act is about helping and protecting people aged 18
                        and over who need care and support. The local authority has
                        a duty under the Care Act to make sure people have the
                        support they need to improve their independence and
                        wellbeing and be safe. </p>
                <br />
                <br />
                <br />
                <p>Click here to find out more about{' '}
                    <Link to={'./care-act'} className="link">
                            the Care Act{' '}
                    </Link>{' '}
                        or{' '}
                    <Link to={'./support'} className="link">
                            the eligibility criteria.
                    </Link></p>
                <br />
                <br />
                <p className="help-section">
                            Need help with this app? Please contact us at:</p>
                <br />
                <br />

                <section className="contact-p">
                            The Advocacy Project
                    <br />
                            73 St Charles Square
                    <br />
                            London
                    <br />
                            W10 6EJ
                    <br />
                    <br />
                            020 8969 3000
                    <br />
                    <br />
                            Email:{' '}
                    <a href="mailto: info@advocacyproject.org.uk" target="_blank">info@advocacyproject.org.uk</a>
                </section>


                <div className="advocacy-section">
                    <p>For more information on advocacy, <Link to={"/advocacy"}>click here.</Link>
                    </p>
                </div>
            </div>
            <div className="navButtons">
                <Link to={'./'}>
                    <Button
                        text="Back"
                        type="submit"
                        className="buttons"
                        onClick={() => {}}
                    />
                </Link>
                <Link to={'./how'}>
                    <Button
                        text="Next"
                        type="submit"
                        className="buttons"
                        onClick={() => {}}
                    />
                </Link>
            </div>
        </div>
    );
}

export default Help;
