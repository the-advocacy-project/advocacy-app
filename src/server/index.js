const express = require('express');
const os = require('os');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.post('/api/data', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jasoncharnley@gmail.com',
      pass: 'Cumbria792111'
    }
  });

  const name = req.body.value;
  console.log('Server side data', req.body);
  const mailOptions = {
    from: 'jasoncharnley@gmail.com',
    to: 'jasoncharnley@gmail.com',
    subject: 'test',
    html: `This is the question:          ${name}`,
    replyTo: 'jasoncharnley@gmail.com'
  };
  transporter.sendMail(mailOptions, (err, response) => {
    if (err) {
      console.error(err);
    } else {
      console.log(response);
    }
  });
});

app.use(express.static('dist'));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
