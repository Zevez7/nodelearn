const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// sgMail.send({
//   to: "datguy7@gmail.com",
//   from: "datguy7@gmail.com",
//   subject: "First email",
//   text: "Get to the right user",
// });

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "datguy7@gmail.com",
    subject: "Thank for joining in!",
    text: `Welcome to the app, name. Let me know how you like the app ${name}`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "datguy7@gmail.com",
    subject: "Account deleted!",
    text: `Your account was cancel. Thank you ${name}`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
