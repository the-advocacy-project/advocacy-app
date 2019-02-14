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
    console.log('this is form data', req.body);
    const { value, question, consentInput, answer  } = req.body;
  
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
        html: `${question}
         ${value} ${consentInput} ${answer}`,
        replyTo: 'jasoncharnley@gmail.com'
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

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.listen(3000, () => console.log('Listening on port 3000!'));
