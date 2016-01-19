var chalk = require("chalk");
var swig = require("swig");
var express = require("express");
var routes = require("./routes")
var app = express();

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

app.use("/", routes);

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

app.listen(3000, function() {
	console.log("server listening")
});

