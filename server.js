var express = require("express");
const router =express.Router();
var app = express();
var cfenv = require("cfenv");
var bodyParser = require('body-parser')
var request=require("request");
//var expressValidator=require("express-validator");
//var expressSession=require("express-session");


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });

//app.use(expressValidator());

var database;
//changes
app.post("/login", function (req, res) {
  var username=req.body.username;
  var password=req.body.password;

  console.log(req.body);

//   mydb.get('username', function(err, data) {
//     console.log(`Document contents: ${data.toString('utf8')}`);
//   });

res.send("Hello " + username);
    
});


// load local VCAP configuration  and service credentials
// var vcapLocal;
// try {
//   vcapLocal = require('./vcap-local.json');
//   console.log("Loaded local VCAP", vcapLocal);
// } catch (e) { }

// const appEnvOpts = vcapLocal ? { vcap: vcapLocal} : {}

// const appEnv = cfenv.getAppEnv(appEnvOpts);

// if (appEnv.services['cloudantNoSQLDB'] || appEnv.getService(/cloudant/)) {
//   // Load the Cloudant library.
//   var Cloudant = require('cloudant');

//   // Initialize database with credentials
//   if (appEnv.services['cloudantNoSQLDB']) {
//      // CF service named 'cloudantNoSQLDB'
//      var cloudant = Cloudant(appEnv.services['cloudantNoSQLDB'][0].credentials);
//   } else {
//      // user-provided service with 'cloudant' in its name
//      var cloudant = Cloudant(appEnv.getService(/cloudant/).credentials);
//   }

//   //database name
//   var dbName = 'mydb';

//   // Create a new "mydb" database.
//   cloudant.db.create(dbName, function(err, data) {
//     if(!err) //err if database doesn't already exists
//       console.log("Created database: " + dbName);
//   });

//   // Specify the database we are going to use (mydb)...
//   database = cloudant.db.use(dbName);
// }


//serve static file (index.html, images, css)
app.use(express.static(__dirname + '/views'));



var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});