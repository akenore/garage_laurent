const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
     if (event.httpMethod !== 'POST') {
          return {
               statusCode: 405,
               body: JSON.stringify(
                    {error: 'Method Not Allowed'}
               )
          };
     }

     const data = JSON.parse(event.body);

     // Configure your email sending using nodemailer
     const transporter = nodemailer.createTransport({
          service: 'YourEmailServiceProvider', // e.g., 'Gmail'
          auth: {
               user: 'YourEmailAddress', // Your email address
               pass: 'YourEmailPassword', // Your email password
          }
     });

     const mailOptions = {
          from: 'YourEmailAddress', // Your email address
          to: 'joudakenore@gmail.com', // Recipient email address
          subject: 'New Contact Form Submission',
          text: `Name: ${
               data.name
          }\nPhone: ${
               data.phone
          }\nEmail: ${
               data.email
          }\nMessage: ${
               data.message
          }`
     };

     try {
          await transporter.sendMail(mailOptions);
          return {
               statusCode: 200,
               body: JSON.stringify(
                    {message: 'Email sent successfully'}
               )
          };
     } catch (error) {
          return {
               statusCode: 500,
               body: JSON.stringify(
                    {error: 'Email could not be sent'}
               )
          };
     }
};
