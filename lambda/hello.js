exports.handler = function (event, context, callback) {
  // your server-side functionality
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello worl2a22d ${Math.floor(Math.random() * 10)}`
    })
  });
};