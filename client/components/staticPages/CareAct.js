import React from 'react';
import NavHeader from '../navigation/navHeader';
import '../../styles/css/home.css';

function CareAct(){
    return(
        <div id="outer-container">
            {window.scrollTo(0,0)}
            <NavHeader />
            <div id="page-wrap" className="wrapper">
                <h1>The Care Act</h1>
                <blockquote>
                The Care Act puts people in control of their care and support.
                It gives people a right to be involved.
                </blockquote>
                <p>The Care Act 2014 sets out in one place, local authorities’ duties in relation to
                    assessing people’s needs and their eligibility for publicly funded care and support.
                <br/>
                <br/>
                Under the Care Act 2014, local authorities must:
                <ul>
                    <li>carry out an assessment of anyone who appears to require care and support,
                        regardless of their likely eligibility for state-funded care</li>
                    <li>focus the assessment on the person’s needs and how they impact on their wellbeing,
                        and the outcomes they want to achieve</li>
                    <li>involve the person in the assessment and, where appropriate, their carer or someone
                        else they nominate provide access to an independent advocate to support the person’s
                        involvement in the assessment if required.</li>
                    <li>provide access to an independent advocate to support the person’s
                        involvement in the assessment if required.</li>
                </ul>
                </p>
                <h2>For more information:</h2> <br/><br/>
                <p>The Social Care Institute for Excellence:</p>
                <a href="https://www.scie.org.uk/care-act-2014/advocacy-services/commissioning-independent-advocacy/duties/independent-advocacy-care-act.asp">https://www.scie.org.uk/care-act-2014/advocacy-services/commissioning-independent-advocacy/duties/independent-advocacy-care-act.asp</a>
                <br/><br/>
                <br/><br/>
                <br/><br/>
            </div>
        </div>
    )
}

export default CareAct;
