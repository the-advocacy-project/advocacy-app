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
    const {contact} = req.body;
    console.log('tis is form data', contact);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'theadvocacyfac@gmail.com',
            pass: '2password$'
        }
    });

    const mailOptions = {
        from: 'theadvocacyfac@gmail.com',
        to: 'theadvocacyfac@gmail.com',
        subject: 'test',
        html: `
        Dear local authority decision maker,

        Please accept this referral to Adult Social Care on behalf of the named client.

        Please consider the evidence outlined in this document and fulfil the appropriate duty to provide:

        A Care Act Assessment
        S.9 (1) Care Act 2014
        http://www.legislation.gov.uk/ukpga/2014/23/section/9/enacted

        2.An Independent Care Act Advocate
        S.67 Care Act 2014

        https://www.legislation.gov.uk/ukpga/2014/23/section/67

        Please note the advocacy duty applies from the first point of contact with the local authority + any subsequent stage of the assessment, planning, care review ect.

        The local authority must arrange an Independent Care Act Advocate to facilitate the involvement of a person in their assessment, in the preparation of their care and support plan and in the review of their care plan in two conditions are met:

        (1) That if an independent advocate were not provided the person would have substantial difficulty in being fully involved in the process.
        (2) There is no appropriate individual available to support and represent the person’s wishes who is not paid or professionally engaged in providing care or treatment to the person or their carer.

        Warm Regards,

        The Advocacy Project

        https://www.advocacyproject.org.uk/advocacy-referrals/


        
        ${JSON.stringify(req.body)}`,
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
