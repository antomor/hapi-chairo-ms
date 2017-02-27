var frisby = require('frisby');

var base_url = 'http://localhost:8000/hello/billi';

frisby.create('Hello service')
  .get(base_url)
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSONTypes({
    msg: String
  })
  .expectJSON( {
    msg: 'hellobilli'
  })
.toss();