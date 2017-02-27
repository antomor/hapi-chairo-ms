var seneca = require('seneca')()
  .use('../../plugins/math.js');


describe("Testing math-service", function () {
  it("contains an sum method", function (done) {
    var left = 10;
    var right = 13;
    seneca.act({ role: 'math', cmd: 'sum', left: left, right: right }, function (err, result) {
      expect(err).toBe(null);
      expect(result.answer).toBe(left + right);
      done();
    });
  });
});

