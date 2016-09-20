var server = (function () {

// BASE SETUP
// =============================================================================

// call the packages we need
    var express = require('express');
    var app = express();
    var cors = require('cors');
    var bodyParser = require('body-parser');

//  configure app to use Cross-Origin Resource Sharing
    app.use(cors());

// configure app to use bodyParser()
// this will let us get the data from a POST
    app.use(bodyParser.json());

// configure the app to use bodyParser()
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    const hostname = '127.0.0.1';
    const port = 3000;

// ROUTES FOR OUR API
// =============================================================================
    var router = express.Router();              // get an instance of the express Router

// REGISTER OUR ROUTES -------------------------------
// all of our routes will have no prefix
    app.use(require('./server/heroroutes.js'));
    //app.use(router);

    return {
        start: function () {
            console.log(`Server running at http://${hostname}:${port}/`);
            return app.listen(port);
        }
    }
});

// autostart
module.exports = server().start();
