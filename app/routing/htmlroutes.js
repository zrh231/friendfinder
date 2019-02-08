// Pull in required dependencies
var path = require('path');


// Export HTML routes
module.exports = function(app) {
	// console.log('___ENTER htmlRoutes.js___');


//Survey Page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

//Home Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};