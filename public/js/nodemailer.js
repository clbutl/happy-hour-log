const nodemailer = require('nodemailer');

const registrationEmail = async (email, username, password) => {
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
    text: `Welcome, ${username}!\nLog in to your profile to view your posts!\n\n
    You'll use the email and password below to login.\n
    Email: ${email}\n
    Password: ${password}`
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
