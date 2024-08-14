const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'ar318527@gmail.com', // Use your email service provider
  auth: {
    user: 'ar318527@gmail.com', // Replace with your email
    pass: 'ar1234#@' // Replace with your email password
  }
});

exports.sendEmail = (from, to, subject, body) => {
  const mailOptions = {
    from,
    to,
    subject,
    html: body
  };

  return transporter.sendMail(mailOptions);
};
