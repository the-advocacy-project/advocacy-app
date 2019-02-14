import React from 'react';
import houses from '../../images/houses.png'

function Contact(props) {
    return (
        <div>
            <img src={ houses } alt="line drawing of houses" ></img>
            <h1>Please enter your contact details:</h1>
            <label>Full Name:</label>
            <input type="text"></input>
            <label>Address:</label>
            <input type="text"></input>
            <label>Post Code:</label>
            <input type="text"></input>
            <label>Email Address:</label>
            <input type="text"></input>
            <label>Phone Number:</label>
            <input type="text"></input>
        </div>
    );
}

export default Contact;
