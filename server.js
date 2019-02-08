// Dependencies
// =============================================================
var express = require("express");
var path = require("path");;

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT;

// Sets up the Express app to handle data parsing
var friends = require('./data/friends');
app.use(express.urlencoded({ extended: true }));
app.use(express.json(friends));

// Routes
// =============================================================

// Add the application routes
require(path.join(__dirname, './routing/apiRoutes.js'))(app);
require(path.join(__dirname, './routing/htmlRoutes.js'))(app);

  
  
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});