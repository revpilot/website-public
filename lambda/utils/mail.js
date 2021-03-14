require("dotenv").config();
const sgMail = require('@sendgrid/mail');


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

class Mail {
  constructor() { }
  async sendMail(emailParams) {
    try {
      const msg = {
        to: emailParams.to,
        from: emailParams.from,
        bcc: emailParams.bcc,
        subject: emailParams.subject,
        html: emailParams.content
      };
      console.log(msg)
      const dataSend = await sgMail.send(msg);
      console.log(JSON.stringify(dataSend));
      return dataSend;
    } catch (error) {
      console.error(JSON.stringify(error));
      return error.body;

    }


  }
}
export { Mail };
