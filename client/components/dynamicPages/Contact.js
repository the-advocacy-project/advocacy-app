import React from 'react';
import houses from '../../images/houses.png';
import NavHeader from '../navigation/NavHeader';

// function Contact(props) {
//     return (
//         <div>
//             <img src={ houses } alt="line drawing of houses" ></img>
//             <h1>Please enter your contact details:</h1>
//             <label>Full Name:</label>
//             <input type="text"></input>
//             <label>Address:</label>
//             <input type="text"></input>
//             <label>Post Code:</label>
//             <input type="text"></input>
//             <label>Email Address:</label>
//             <input type="text"></input>
//             <label>Phone Number:</label>
//             <input type="text"></input>
//         </div>
//     );
// }


function Contact(props) {
    console.log('I am props: ', props);
    console.log(`info`, props.info)
    
    const displayContact = Object.keys(props.info).map((qs, index) => {
        console.log("more",props.info[qs].more.value)
        console.log(`name`, props.info[qs])
        return (
            <div>
                <h2>{props.info[qs].question}</h2>
                <textarea
                    type="text"
                    key={index}
                    name={props.info[qs].more}
                    onChange={event => {
                        props.handleChangeInput(event)
                    }}
                />
            </div>
        );
    });

    return (
        <div>
            <NavHeader />
            <img src={ houses } alt="line drawing of houses" ></img>
            <h1>Please enter your contact details:</h1>
            { displayContact }
        </div>
    );
}


export default Contact;
