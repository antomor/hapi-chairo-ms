var frisby = require('frisby');

var base_url = 'http://localhost:8000/user/';

frisby.create('User service')
  .post(base_url, { 
    name: 'pippo', 
    surname: 'pluto' 
  })
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSONTypes({
    msg: String
  })
  .expectJSON({
    msg: 'pippo pluto'
  })
  .toss();