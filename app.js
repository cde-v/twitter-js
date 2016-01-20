var chalk = require("chalk");
var swig = require("swig");
var express = require("express");
var bodyParser = require('body-parser');
var socketio = require("socket.io");
var app = express();
var routes = require("./routes");
var router = routes(io);

app.use("/", router);

// var locals = {
// 	title: "An Example",
// 	people: [{
// 		name: "Gandalf"}, {
// 		name: "Frodo"}, {
// 	 	name: "Hermione"}]
// };

swig.setDefaults({cache: false});

app.engine("html", swig.renderFile);

app.set("view engine", "html");
app.set("views", __dirname + "/views");







// app.get("/stylesheets/style.css", function(req, res){
// 	res.sendFile("./public/stylesheets/stylesheets.css");
// });

app.use(express.static("public"));

// app.get("/views", function (req, res) {
// 	res.render("index", locals)
// });

// app.use("*/special/", function(req, res, next) {
// 	res.send(chalk.red(req.method + req.originalUrl));
// 		next();
// })

// app.use("/", function(req, res, next) {
// 	res.send(chalk.blue(req.method + req.originalUrl));
// })

// app.get("/", function(req, res) {
// 	res.send("we got the get");
// });

// app.get("/news", function(req, res) {
// 	res.send("we got the news get");
// });

var server = app.listen(3000, function() {
	console.log("server listening")
});

var io = socketio.listen
