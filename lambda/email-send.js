import { Mail } from "./utils/mail.js";

const mail = new Mail();



exports.handler = async event => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 410,
      body: "Unsupported Request Method"
    };
  }
  try {

    const dataEvent = JSON.parse(event.body);



    let contentEmail = ` New Contact from website:<br><br>
    
    <strong>Name:</strong>  ${dataEvent.name}.<br>    
    <strong>Email:</strong>  ${dataEvent.email}.<br>
        <strong>Phone:</strong>  ${dataEvent.phone}.<br>
        <strong>Message:</strong>  ${dataEvent.message}.<br>
        `

    console.log(dataEvent);


    const result = await mail.sendMail({
      from: `Rev Pilot <miguel@revpilot.co.uk>`,
      to: `miguel@revpilot.co.uk`,
      content: contentEmail,
      subject: `New contact revpilot.co.uk`,
      bcc: ''
    });


    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: err.message
    };
  }
};
