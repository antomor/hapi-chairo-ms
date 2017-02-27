
var sum = function (options) {
    /*options.server.seneca.add('role:math,cmd:sum', (msg, reply) => {
        reply(null, { answer: (msg.left + msg.right) })
    })*/
    options.server.seneca.client({ type: 'tcp', pin: 'role:math,cmd:sum',  port:10002 });
    // Add the route
    options.server.route({
        method: 'POST',
        path: '/sum/',
        handler: function (request, reply) {
            var left = new Number(request.payload.left);
            var right = new Number(request.payload.right);
            options.server.seneca.act({ role: 'math', cmd: 'sum', left: left, right: right }, function (err, result) {
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