const router = require('express').Router();
const { workHistory } = require('./data');
const nodemailer = require('nodemailer');

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === "test") require('../secrets');

module.exports = router;

router.get('/work', (req, res, next) => {
  res.send(workHistory);
});

router.post('/email', (req, res, next) => {
  try {

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const text = `New Message from ${req.body.sender}, The message is: \n ${req.body.message}`;

    const mailOptions = {
      from: req.body.email,
      to: process.env.EMAIL,
      subject: req.body.subject,
      text: text,
    };
    res.sendStatus(200)
    // transporter.sendMail(mailOptions, function (err, info) {
    //   if (err) {
    //     console.log(err);
    //     throw err;
    //   } else {
    //     console.log('Email sent: ', info.response);
    //     res.sendStatus(200);
    //   }
    // });
  } catch (err) {
    next(err);
  }
});
