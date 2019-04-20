import React from 'react';
import NavHeader from '../navigation/NavHeader';
import '../../styles/css/home.css';
// import '../../styles/css/styles.css';

function Support(){
    return(
        <div id="outer-container">
            {window.scrollTo(0,0)}
            <NavHeader />
            <div id="page-wrap" className="wrapper">
                <h1>Am I eligible for support?</h1>
                <p>To be eligible for a package of care and support, you must meet three requirements: </p>
                <ol>
                    <li>Your needs must be the result of a
                    physical or mental impairment or illness</li>
                    <li>As a result, you must be unable to achieve two or more of the outcomes set out in the
                    eligibility criteria</li>
                    <li>As a consequence, there is likely to be a significant impact on your wellbeing</li>
                </ol>
                <h2>Eligibility criteria</h2>
                <p>Eligibility is determined by an inability to achieve a two or more of the tasks or outcomes listed below.
                Please note that eligibility includes being able to achieve the task but:</p>
                <ul>
                    <li>only with assistance, or </li>
                    <li>if doing so without assistance, it takes much longer than for someone else, or</li>
                    <li>if doing so without assistance causes a lot of pain, distress or anxiety, or</li>
                    <li>if doing so without assistance might put you or someone else in danger</li>
                </ul>
                <h2>Do you need help... </h2>
                <ol>
                    <div>
                        <li>Managing and maintaining nutrition</li>
                        <ul>
                            <li>Do you help eating, drinking, shopping or cooking?</li>
                            <li>Do you need help maintaining a balanced diet?</li>
                        </ul>

                    </div>
                    <div>
                        <li>Maintaining personal hygiene</li>
                        <ul>
                            <li>Do you need help buying cleaning products like shampoo?</li>
                            <li>Do you need help washing your body?</li>
                            <li>Do you need help doing your laundry and cleaning your clothes?</li>
                        </ul>
                    </div>
                    <div>
                        <li>Managing toilet needs</li>
                        <ul>
                            <li>Do you need help to access the toilet?</li>
                            <li>Do you need help to use the toilet?</li>
                            <li>Do you need help to go to the toilet at night?</li>
                        </ul>
                    </div>
                    <div>
                        <li>Being appropriately clothed</li>
                        <ul>
                            <li>Do you need help to decide what to wear?</li>
                            <li>Do you need help to put your clothes on in the morning?</li>
                            <li>Do you need help to take your clothes off?</li>
                            <li>Do you need help to fasten your shoes?</li>
                            <li>Do you need help to buy new clothes for different occasions such as work?</li>
                        </ul>
                        
                    </div>
                    <div>
                        <li>Being able to make use of the adult’s home safely</li>
                        <ul>
                            <li>Do you need help to get into your home?</li>
                            <li>Do you need help to move around your home?</li>
                            <li>Do you need help to help to use your cooker or heater?</li>
                            <li>Are there any rooms you cannot access or use without help?</li>
                        </ul>
        
                    </div>
                    <div>
                        <li>Maintaining a habitable home environment</li>
                        <ul>
                            <li>Do you need help to make sure all your bills are paid?</li>
                            <li>Do you need help to make sure your house is clean and free from damp?</li>
                        </ul>
        
                    </div>
                    <div>
                        <li>Developing and maintaining family or other personal relationships</li>
                        <ul>
                            <li>Do you need help to stay in touch with your family?</li>
                            <li>Do you need help to meet new people?</li>
                            <li>Do you need help to stay close to your children?</li>
                        </ul>
                    </div>
                    <div>
                        <li>Accessing and engaging in work, training, education or volunteering</li>
                        <ul>
                            <li>Do you need help to look for new opportunities?</li>
                            <li>Do you need help to apply for things?</li>
                            <li>Do you need help to physically get somewhere or take part in something you are interested in?</li>
                        </ul>
                    </div>
                    <div>
                        <li>Making use of necessary facilities or services in the local community, including public transport,
                        and recreational facilities or services</li>
                        <ul>
                            <li>Do you need help to access your local shops?</li>
                            <li>Do you need help to get to your GP or the pharmacy?</li>
                            <li>Do you need help to use public transport or arrange a taxi?</li>
                        </ul>
                        
                    </div>
                    <div>
                        <ul>
                            <li>Carrying out caring responsibilities for a child</li>
                            <li>Are you a parent, a step parent or grandparent?</li>
                            <li>Do need help to understand all your children’s need?</li>
                            <li>Do you need help to care for your children?</li>
                        </ul>
                    
                    </div>
                </ol>
                <p>For more details on eligibility, please <a href="https://www.scie.org.uk/care-act-2014/assessment-and-eligibility/eligibility/criteria-adults-care.asp" target="_blank">click here.</a></p>
                <br/><br/>
                <br/><br/>
            </div>
        </div>
    )
}

export default Support;
