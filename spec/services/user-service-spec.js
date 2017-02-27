var seneca = require('seneca')()
  .use('../../plugins/user.js');


describe("Testing user-service", function () {
  it("contains an add method", function (done) {
    let name = 'pippo';
    let surname = 'pluto';

    seneca.act({ role: 'user', cmd: 'add', name: name, surname: surname }, function (err, result) {
      expect(err).toBe(null);
      expect(result.msg).toBe(name + ' ' + surname);
      done();
    });
  });
});

