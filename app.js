var express = require("express");
var app = express();
var chalk = require("chalk");

app.use("*/special/", function(req, res, next) {
	res.send(chalk.red(req.method + req.originalUrl));
		next();
})

app.use("/", function(req, res, next) {
	res.send(chalk.blue(req.method + req.originalUrl));
})



app.get("/", function(req, res) {
	res.send("we got the get");
});

app.get("/news", function(req, res) {
	res.send("we got the news get");
});






app.listen(3000, function() {
	console.log("server listening")
});

WHATS UP CHRIS?!