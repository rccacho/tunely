// require express and other modules
var express = require('express'),
    app = express();

  

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

var controllers = require('./controllers');



// ***********
//  * DATABASE *
//  ***********

var db = require('./models');

/**********
 * ROUTES *
 **********/



app.get('/', function homepage(req, res) {
  console.log("route works!!")

  // res.sendFile(__dirname + '/views/index.html');
});

/*
* JSON Endpoints
*/

app.get('/api', controllers.api.index);


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
