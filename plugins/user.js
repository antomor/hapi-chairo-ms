module.exports = function user() {
  
  this.add('role:user,cmd:add', function sum(msg, respond) {
    var name = msg.name;
    var surname = msg.surname;
    respond(null, { msg: name + ' ' + surname });
  });

};