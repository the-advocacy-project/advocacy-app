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
    // const contactMap = contact.map((data) => {
    //    return data;
    // })
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
        <h4>Dear Local Authority decision maker,</h4>
        <p>Please accept this referral to Adult Social Care on behalf of the named client.<br/>
        Please consider the evidence outlined in this document and fulfil the appropriate duty to provide:<br/>

        <ol>
            <li><b>A Care Act Assessment</b><br/>
                S.9 (1) Care Act 2014<br/>
                <i>http://www.legislation.gov.uk/ukpga/2014/23/section/9/enacted</i>
            </li>
            <br />
            <li><b>An Independent Care Act Advocate</b><br/>
                S.67 Care Act 2014<br/>
                <i>https://www.legislation.gov.uk/ukpga/2014/23/section/67</i>
            </li>
        </ol>

        Please note the advocacy duty applies from the first point of contact with the local authority + any subsequent stage of the assessment, planning, care review ect.<br/><br/>

        The local authority must arrange an Independent Care Act Advocate to facilitate the involvement of a person in their assessment, in the preparation of their care and support plan and in the review of their care plan in two conditions are met:<br/>
        <ol>
            <li>That if an independent advocate were not provided the person would have substantial difficulty in being fully involved in the process.</li>
            <li>There is no appropriate individual available to support and represent the person’s wishes who is not paid or professionally engaged in providing care or treatment to the person or their carer.</li>
        </ol>

        Please feel free to contact the client or The Advocacy Project if more information is required.<br/><br/>
            
        Warm Regards,<br/><br/>

        <b>The Advocacy Project<br/></b>
        https://www.advocacyproject.org.uk/advocacy-referrals/<br/>
        </p>

        _______________________________________________________________________________________________________________
        <br><br>

        <h1>Name intn</h1>
        <h2>Contact Information</h2>
        <h3>${contact.name.question}</h3>
        <p>${contact.name.more}</p>
        <h2>Consent</h2>
        <h3>${consent.consentToCouncil.question}</h3>
       <p>${consent.consentToCouncil.agreed ? "Yes" : "No" }</p>

        
        
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
