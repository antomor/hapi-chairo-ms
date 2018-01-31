# hapi-chairo-ms
A small example of microservices architecture using [hapi](https://github.com/hapijs/hapi) and [chairo](https://github.com/hapijs/chairo).

For more information about micro-service and api-gateway architecture [Micro-services - API gateway](http://microservices.io/patterns/apigateway.html)

## Getting Started

In order to running the architecture it is necessary to install all the dependecies and to run the gulp default task which starts the micro-services and the api-gateway.

## Folder structure
```
hapi-chairo.ms/
  README.md
  node_modules/
  package.json
  plugins/
  services/
  spec/
  gulpfile.js
  server.js
```

### Prerequisites

```
git clone 'https://github.com/antomor/hapi-chairo-ms.git'
```

### Installing

We need to run the `npm instal` command from the directory in which the repo has been cloned

```
cd hapi-chairo-ms
npm install
```

In order to run the *default* gulp task:

```
gulp
```

The `gulp.js` file contains also other tasks:
 - `run:<name-service>` to start a single micro-service
 - `run:services` to start all the micro-service
 - `run:server` to start the api-gateway service
 - `run:all` to start the api-gateway service and all the micro-services

## Running the tests

For running the tests, please make to sure to have started the application with `gulp`.

```
npm test
```

All the tests are in the `spec` folder.
Each micro-service is provided with a *-spec file containing the test for that specific service.

## Built With
* [Gulp](https://gulpjs.com/) - Task Runner
* [hapi](https://github.com/hapijs/hapi) - Web services framework
* [chairo](https://github.com/hapijs/chairo) - Senece micro-services plugin
* [Jasmin](https://github.com/hapijs/chairo) - For writing BDD micro-services tests

## Acknowledgments

* Thank you to [PianoBit](http://www.pianobit.com/) which permitted me to practice with the tools and architecture described.
