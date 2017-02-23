require('seneca')()
  .use('../plugins/user.js')
  // listen for role:math messages
  // IMPORTANT: must match client
  .listen({ type: 'tcp', pin: 'role:user',  port:10003});