
var user = function (options) {
  /*options.server.seneca.add('role:hello', (msg, reply) => {
        reply(null, { msg: ("hello, " + msg.name) })
    })*/
  options.server.seneca.client({ type: 'tcp', pin: 'role:user',  port:10003 });
    // Add the route
  options.server.route({
    method: 'POST',
    path: '/user/',
    handler: function (request, reply) {
      options.server.seneca.act({ role: 'user', cmd:'add', name: request.payload.name, surname: request.payload.surname }, 
      function (err, result) {
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

module.exports = user;