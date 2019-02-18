import React from 'react';
import '../../styles/css/help.css';
import NavHeader from '../navigation/navHeader';
import { Link } from 'react-router-dom';
import { Button } from '../buttons/Button';

function Help() {
    return (
        <div>
            <div className="help-nav-container">
                <NavHeader />
            </div>

            <div className="help-wrapper">
                <h1 className="help-h1">
                    How we <br />
                    aim to help
                </h1>
                <p className="help-p">
                    The Advocacy Project has developed this app to help people
                    with the process of getting the help they need from the
                    local authority.
                    <br />
                    <br />
                    <br />
                    This app will help you:
                </p>
                <br />
                <br />

                <ul className="help-list">
                    <li className="help-list">
                        Identify if you have a right to a Care Act assessment by
                        the local authority
                    </li>
                    <br />
                    <li className="help-list">
                        Identify if you may have a right to a Care Act Advocate
                    </li>
                    <br />
                    <li className="help-list">
                        Identify if you may be eligible for support
                    </li>
                    <br />
                    <li className="help-list">
                        Be involved in the assessment process
                    </li>
                    <br />
                    <li className="help-list">
                        Secure the support you need if you are eligible
                    </li>
                </ul>
                <p className="help-p">
                    The Care Act is about helping and protecting people aged 18
                    and over who need care and support. The local authority has
                    a duty under the Care Act to make sure people have the
                    support they need to improve their independence and
                    wellbeing and be safe.
                    <br />
                    <br />
                    Click here to find out more about{' '}
                    <a href="./care-act" className="link">
                        the Care Act{' '}
                    </a>{' '}
                    or{' '}
                    <a href="./Support" className="link">
                        the eligibility criteria.
                    </a>
                    <br />
                    <br />
                    Need help with this app?
                    <br />
                    <br />
                    Please contact us at:
                    <br />
                    <br />
                    <div className="contact-p">
                        The Advocacy Project <br />
                        73 St Charles Square
                        <br />
                        London
                        <br />
                        W10 6EJ
                        <br />
                        <br />
                        <br />
                        020 8969 3000
                        <br />
                        <br />
                        Email:{' '}
                        <a
                            href="mailto: info@advocacyproject.org.uk"
                            className="link"
                        >
                            info@advocacyproject.org.uk
                        </a>
                    </div>
                </p>

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
        </div>
    );
}

export default Help;
