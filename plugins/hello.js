module.exports = function hello() {
  
  this.add('role:hello', function sum(msg, respond) {
    respond(null, { msg: 'hello' + msg.name });
  });

};