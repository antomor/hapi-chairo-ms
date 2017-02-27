require('seneca')()
  .use('../plugins/hello.js')
  // listen for role:hello messages
  // IMPORTANT: must match client
  .listen({ type: 'tcp', pin: 'role:hello',  port:10001 });