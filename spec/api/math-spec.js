var frisby = require('frisby');

var base_url = 'http://localhost:8000/sum/';

frisby.create('Math service')
  .post(base_url, { 
    left: 10, 
    right: 11 
  })
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSONTypes({
    answer: Number
  })
  .expectJSON({
    answer: 21
  })
  .toss();