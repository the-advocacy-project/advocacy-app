import React from 'react';
import NavHeader from '../navigation/navHeader';
import '../../styles/css/home.css';

function Support(){
    return(
        <div>
            {window.scrollTo(0,0)}
            <NavHeader />
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
            <ul>
                <div>
                    <li>Managing and maintaining nutrition</li>
                    <p>Do you help eating, drinking, shopping or cooking?</p>
                    <p>Do you need help maintaining a balanced diet?</p>
                </div>
                <div>
                    <li>Maintaining personal hygiene</li>
                    <p>Do you need help buying cleaning products like shampoo?</p>
                    <p>Do you need help washing your body?</p>
                    <p>Do you need help doing your laundry and cleaning your clothes?</p>
                </div>
                <div>
                    <li>Managing toilet needs</li>
                    <p>Do you need help to access the toilet?</p>
                    <p>Do you need help to use the toilet?</p>
                    <p>Do you need help to go to the toilet at night?</p>
                </div>
                <div>
                    <li>Being appropriately clothed</li>
                    <p>Do you need help to decide what to wear?</p>
                    <p>Do you need help to put your clothes on in the morning?</p>
                    <p>Do you need help to take your clothes off?</p>
                    <p>Do you need help to fasten your shoes?</p>
                    <p>Do you need help to buy new clothes for different occasions such as work?</p>
                </div>
                <div>
                    <li>Being able to make use of the adult’s home safely</li>
                    <p>Do you need help to get into your home?</p>
                    <p>Do you need help to move around your home?</p>
                    <p>Do you need help to help to use your cooker or heater?</p>
                    <p>Are there any rooms you cannot access or use without help?</p>
                </div>
                <div>
                    <li>Maintaining a habitable home environment</li>
                    <p>Do you need help to make sure all your bills are paid?</p>
                    <p>  Do you need help to make sure your house is clean and free from damp?</p>
                </div>
                <div>
                    <li>Developing and maintaining family or other personal relationships</li>
                    <p>Do you need help to stay in touch with your family?</p>
                    <p>Do you need help to meet new people?</p>
                    <p>Do you need help to stay close to your children?</p>
                </div>
                <div>
                    <li>Accessing and engaging in work, training, education or volunteering</li>
                    <p>Do you need help to look for new opportunities?</p>
                    <p>Do you need help to apply for things?</p>
                    <p>  Do you need help to physically get somewhere or take part in something you are interested in?</p>
                </div>
                <div>
                    <li>Making use of necessary facilities or services in the local community, including public transport, 
                        and recreational facilities or services</li>
                    <p>Do you need help to access your local shops?</p>
                    <p>Do you need help to get to your GP or the pharmacy?</p>
                    <p>Do you need help to use public transport or arrange a taxi?</p>
                </div>
                <div>
                    <li>Carrying out caring responsibilities for a child</li>
                    <p>Are you a parent, a step parent or grandparent?</p>
                    <p>Do need help to understand all your children’s need?</p>
                    <p>Do you need help to care for your children?</p>
                </div>
            </ul>
            <h3>For more details on eligibility, please <a href="https://www.scie.org.uk/care-act-2014/assessment-and-eligibility/eligibility/criteria-adults-care.asp">click here.</a></h3>
        </div>
    )
}

export default Support;