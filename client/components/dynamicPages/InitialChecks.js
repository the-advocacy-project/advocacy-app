import React from 'react';
import NavHeader from '../navigation/NavHeader';

function InitialChecks(props) {
    const displayInitialChecks = Object.keys(props.info).map((qs, i) => {
        if (qs === 'more') {
            console.log('I am textarea');
            return (
                <div>
                    <p>Tell us more</p>
                    <textarea
                        type="text"
                        name="more"
                        key={i}
                        onChange={event =>
                            props.handleChangeInput(event, qs, props.section)
                        }
                    />
                </div>
            );
        } else {
            return (
                <div>
                    <h2>{props.info[qs].question}</h2>
                    <input
                        type="checkbox"
                        checked={props.info[qs].agree}
                        name="agree"
                        key={i}
                        onChange={event =>
                            props.toggleChange(event, qs, props.section)
                        }
                    />
                </div>
            );
        }
    });

    return (
        <div>
            <NavHeader />
            <h1>Let’s get started...</h1>
            <p>Please check the box below to confirm that:</p>
            { displayInitialChecks }
        </div>
    );
}


export default InitialChecks;

