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
    const {nutrition: {food: {question, agree}}} = req.body;
    console.log('tis is form data', question, agree);

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
        html: `This is the question: ${question}${agree}`,
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


app.listen(3000, () => console.log('Listening on port 3000!'));
