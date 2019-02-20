const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(bodyParser.json());

app.post('/', (req, res) => {
    const {contact, consent, initialCheck, nutrition, hygiene, toilet, clothing, safety, environment, relationships, work, transport, responsibilities, eligibility, wellbeing, duty  } = req.body;
    
    
    
    const contactMap = Object.keys(contact).map((qs) => {
     return (
         `<div>
         <h3> ${contact[qs].question} : </h3>
        <p>${contact[qs].more} </p>
         </div>`
     )
    })




    

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'theadvocacyfac@gmail.com',
            pass: '2password$'
        }
    });

//     <h3>${contact.name.question}</h3>
//     <p>${contact.name.more}</p>
    
//     <h2>Consent</h2>
//     <h3>${consent.consentToCouncil.question}</h3>
//    <p>${consent.consentToCouncil.agreed ? "Yes" : "No" }</p>

    const mailOptions = {
        from: 'theadvocacyfac@gmail.com',
        to: 'theadvocacyfac@gmail.com',
        subject: 'test',
        html: `
        <h1>Application</h1>
        <h2>Contact Information</h2>
        ${contactMap}
       

        
        
        `,
        replyTo: 'theadvocacyfac@gmail.com'
    };

    transporter.sendMail(mailOptions, function(err, res) {
        if (err) {
            console.error('there was an error: ', err);
        } else {
            console.log('here is the res: ', res);
        }
    });

    // res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.use(express.static('dist'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist/index.html'));
});


app.listen(3001, () => console.log('Listening on port 3001!'));
