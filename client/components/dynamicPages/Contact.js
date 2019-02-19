import React from 'react';
import houses from '../../images/houses.png';
import NavHeader from '../navigation/NavHeader';
import {Button} from '../buttons/Button';
import { Link } from 'react-router-dom';

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


const Contact = props => {

    const displayContact = Object.keys(props.info).map((qs, index) => {
        console.log("index",index);
        return (
            <div className="input-align margin50" key={`container-${index}`}>
                <p>{props.info[qs].question}</p>
                <input
                    type="text"
                    key={`input-${index}`}
                    value={props.info[qs].more}
                    name="more"
                    onChange={event => {
                        props.handleChangeInput(event, qs, props.section)
                    }}
                />
            </div>
        );
    });

    return (
        <div>
            <NavHeader />
            <div>
                <div className="wrapper wrapper__contact">
                    <img src={ houses }  className="people img-top" alt="line drawing of houses" ></img>
                    <h1>Please enter your contact details:</h1>
                    { displayContact }
                </div>
                <div className="navButtons"><Link to={'./consent'} >
                    <Button
                    text='Back'
                    type='submit'
                    className="buttons"
                    onClick={() => {}}/>
                </Link>
                <Link to={'./begin'} >
                    <Button
                    text='Next'
                    type='submit'
                    className="buttons"
                    onClick={() => {}}/>
                </Link>
            </div>
            </div>
        </div>
    );







    // return (
    //     <div>
    //         <NavHeader />
    //         <div className="wrapper">
    //             <img src={ houses }  className="people" alt="line drawing of houses" ></img>
    //             <h1>Please enter your contact details:</h1>
    //             { displayContact }
    //             <div className="navButtons"><Link to={'./consent'} >
    //                 <Button
    //                 text='Back'
    //                 type='submit'
    //                 className="buttons"
    //                 onClick={() => {}}/>
    //             </Link>
    //             <Link to={'./begin'} >
    //                 <Button
    //                 text='Next'
    //                 type='submit'
    //                 className="buttons"
    //                 onClick={() => {}}/>
    //             </Link>
    //         </div>
    //         </div>
    //     </div>
    // );
}


export default Contact;
