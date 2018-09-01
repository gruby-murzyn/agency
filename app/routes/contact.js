const express = require('express');
const router = express.Router();
const request = require('request');
const nodemailer = require('nodemailer');

router.post('/send', (req, res) => {
    const outputData = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

    let transporter = nodemailer.createTransport({
       service: 'gmail',
        auth: {
            user: 'myEmail',
            pass: 'pass'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let HelperOptions = {
        from: '"Geofrey" <hotbonge@gmail.com',
        to: 'jasmine2016',
        subject: 'Majeni Contact Request',
        text: 'Hello',
        html: outputData
    };



    transporter.sendMail(HelperOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("The message was sent!");
        console.log(info);
    });
    setTimeout((function() {res.send("ok")}), 2000);
});
module.exports = router;