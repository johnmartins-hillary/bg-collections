const nodemailer = require("nodemailer");

const sendMail = async (options) => {
  // let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    // host: "smtp.sendgrid.net",
    service: "Gmail",
    port: 587,
    // secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMPT_MAIL, // generated ethereal user
      pass: process.env.SMPT_PASS, // generated ethereal password
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: "vireru.ebujuv@rungel.net",
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
