exports.handler =  async function(event, context, callback) {
    try {
        console.log('sending...', event.body);
        callback(null, {
            statusCode: 200,
            body: "Hello, World"
            });
    } catch (error) {
        throw error;
    }
}