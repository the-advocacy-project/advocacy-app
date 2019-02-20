import React from 'react';
import { Button } from '../buttons/Button';
import { Link } from 'react-router-dom';
import NavHeader from '../navigation/navHeader';
import '../../styles/css/home.css';

const DisplayOverview = overview => (
    <div>
        {Object.entries(overview).map(([sectionKey, sectionValue], i) => (
            <div>
                <h2>{sectionKey}</h2>
                {Object.entries(sectionValue).map(
                    ([headerKey, headerValue], i) => (
                        <div>
                            <h2>{headerKey}</h2>
                            {Object.values(headerValue).map((value, i)=> (
                                <div>
                                    {console.log("value",value)}
                                    <p>{value.question}</p><br/>
                                    {value.agree ? "Yes" : "No"}<br/><br/>
                                </div>
                            ))}
                        </div>
                    )
                )}
            </div>
        ))}
    </div>
);

function Overview({ info }) {
    return (
        <div>
            <NavHeader />
            <h1>Overview</h1>
            <DisplayOverview overview={info} />
            <div className="navButtons">
                <Link to={'./duty'}>
                    <Button
                        text="Back"
                        type="submit"
                        className="buttons"
                        onClick={() => {}}
                    />
                </Link>
                <Link to={'./complete'}>
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

export default Overview;
