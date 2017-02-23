var hello = function (options) {
  /*options.server.seneca.add('role:hello', (msg, reply) => {
        reply(null, { msg: ("hello, " + msg.name) })
    })*/
  options.server.seneca.client({ type: 'tcp', pin: 'role:hello',  port:10001 });
    // Add the route
  options.server.route({
    method: 'GET',
    path: '/hello/{name?}',
    handler: function (request, reply) {
      options.server.seneca.act({ role: 'hello', name: request.params.name }, function (err, result) {
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

module.exports = hello;