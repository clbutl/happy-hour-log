const nodemailer = require('nodemailer');

const registrationEmail = async (email) => {
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "happyhourlog123@outlook.com",
      pass: "12345!@#$%"
    }
  });
  
  const options = {
    from: "happyhourlog123@outlook.com",
    to: email,
    subject: "Welcome to the log!",
    text: "Welcome! Log in to your profile to view your posts!"
  };
  
  transporter.sendMail(options, function(err, info) {
    if(err) {
      console.log(err);
      return;
    }
    console.log("Sent: " + info.response);
  });
};

module.exports = registrationEmail;
