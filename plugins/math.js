module.exports = function hello() {
  this.add('role:math, cmd:sum', function sum(msg, respond) {
    console.log('math services called');
    respond(null, { answer: msg.left + msg.right });
  });
};