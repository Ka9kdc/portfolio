const router = require('express').Router();
const { workHistory } = require('./data');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  require('../secrets');
}

const OAuth2Client = new OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET
);
OAuth2Client.setCredentials({
  // eslint-disable-next-line camelcase
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});
module.exports = router;

router.get('/work', (req, res, next) => {
  res.send(workHistory);
});

router.post('/email', (req, res, next) => {
  try {
    if (process.env.NODE_ENV === 'test') {
      res.sendStatus(200);
    } else {
      const accessToken = OAuth2Client.getAccessToken();
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
          accessToken,
        },
      });

      const text = `New Message from ${req.body.sender} : ${req.body.email}, The message is: \n ${req.body.message}`;

      const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: req.body.subject,
        text: text,
      };

      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          throw err;
        } else {
          console.log('Email sent: ', info.response);
          res.sendStatus(200);
        }
      });

      transporter.close();
    }
  } catch (err) {
    next(err);
  }
});
