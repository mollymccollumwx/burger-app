// requires express, handlebars
var express = require("express");
var exphbs = require("express-handlebars");
// import routes
var routes = require("./controllers/burgerController.js");

//allows Heroku to choose PORT or uses PORT 8080
var PORT = process.env.PORT || 8080;

//creates an instance of express
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// MIDDLEWARE: Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars engine config
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//give server access to the routes
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
