var seneca = require('seneca')()
  .use('../../plugins/hello.js');


describe("Testing hello-service", function () {
  it("contains an hello method", function (done) {
    var name = 'billi';
    seneca.act({ role: 'hello', name: name }, function (err, result) {
      expect(err).toBe(null);
      expect(result.msg).toBe('hello' + name);
      done();
    });
  });
});

