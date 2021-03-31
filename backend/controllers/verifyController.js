const client = require("twilio")(
  process.env.ACCOUNT_SID,
  process.env.AUTH_TOKEN
);
//trial no use
exports.getme = (req, res) => {
  res.send(process.env.VERIFY_SERVICE_SID);
};
exports.getCode = async (req, res) => {
  client.verify
    .services(process.env.VERIFY_SERVICE_SID)
    .verifications.create({
      to: `+${req.query.phonenumber}`,
      channel: req.query.channel
    })
    .then(verification => {
      console.log(verification);
      res.status(200).send(verification);
    })
    .catch(error => {
      res.status(404).send(error);
    });
};

exports.verifyCode = async (req, res) => {
  client.verify
    .services(process.env.VERIFY_SERVICE_SID)
    .verificationChecks.create({
      to: `+${req.query.phonenumber}`,
      code: req.query.code
    })
    .then(verification_check => {
      res.status(200).send(verification_check);
      //console.log(verification_check.status);
    })
    .catch(error => {
      //console.log(error);
      res.status(401).send(error);
    });
};
