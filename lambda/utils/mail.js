require("dotenv").config();
const sgMail = require('@sendgrid/mail');


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

class Mail {
  constructor() { }
  async sendMail(emailParams) {


    const msg = {
      to: emailParams.to,
      from: `Rev Pilot <miguel@revpilot.co.uk>`,
      bcc: emailParams.bcc,
      subject: emailParams.subject,
      html: emailParams.content
    };
    const dataSend = await sgMail.send(msg);

    return dataSend;
  }
}
export { Mail };
