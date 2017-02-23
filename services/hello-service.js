require('seneca')()
  .use('../plugins/hello.js')
  // listen for role:math messages
  // IMPORTANT: must match client
  .listen({ type: 'tcp', pin: 'role:hello' });