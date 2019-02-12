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
    const name = req.body.value;
    console.log('tis is form data', name);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jasoncharnley@gmail.com',
            pass: 'Cumbria792111'
        }
    });

    const mailOptions = {
        from: 'jasoncharnley@gmail.com',
        to: 'jasoncharnley@gmail.com',
        subject: 'test',
        html: `This is the question: ${name}`,
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
