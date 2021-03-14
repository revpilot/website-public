import { Mail } from "./utils/mail.js";

const mail = new Mail();
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
};


exports.handler = async event => {

  if (event.httpMethod === "OPTIONS") {

    return {
      statusCode: 200,
      headers,
      body: 'This was a preflight call!'
    };
  }

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



    const result = await mail.sendMail({
      from: `Miguel Puig <miguel@revpilot.co.uk>`,
      to: `miguel@revpilot.co.uk`,
      content: contentEmail,
      subject: `New contact revpilot.co.uk`,
      bcc: 'anish@revpilot.co.uk'
    });



    return {
      statusCode: 200,
      headers,
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
