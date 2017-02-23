
var sum = function (options) {
    /*options.server.seneca.add('role:math,cmd:sum', (msg, reply) => {
        reply(null, { answer: (msg.left + msg.right) })
    })*/
    options.server.seneca.client({ type: 'tcp', pin: 'role:math,cmd:sum' });
    // Add the route
    options.server.route({
        method: 'POST',
        path: '/sum',
        handler: function (request, reply) {
            options.server.seneca.act({ role: 'math', cmd: 'sum', left: request.payload.left, right: request.payload.right }, function (err, result) {
                if (err) {
                    console.error(err);
                    return reply(err);
                }
                console.log(result);
                return reply(result);
            });
        }
    });
};

module.exports = sum;