import React from 'react';
import NavHeader from '../navigation/navHeader';
import '../../styles/css/home.css';

function Advocacy(props) {
    return (
        <div id="outer-container">
            {window.scrollTo(0,0)}
            <NavHeader />
            <div id="page-wrap" className="wrapper">
                <h1>What's advocacy?</h1>
                <p>Advocacy is taking action to help people say what they want, secure their rights,
                    represent their interests and obtain services they need.
                    <br/>
                    <br/>
                    Advocates and advocacy providers work in partnership with the people they support
                    and take their side.
                    <br/>
                    <br/>
                    Advocacy promotes social inclusion, equality and social justice.
                    </p>
                <h2>For more information:</h2>
                <a href="https://qualityadvocacy.org.uk/wp-content/uploads/2018/05/Code-of-Practice-1.pdf">https://qualityadvocacy.org.uk/wp-content/uploads/2018/05/Code-of-Practice-1.pdf</a>
            </div>
        </div>
    );
}

export default Advocacy;
