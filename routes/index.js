var router = require('express').Router();
var tweetBank = require('../tweetBank');
var bodyParser = require('body-parser');

module.exports = function(io) {
	router.use(bodyParser.urlencoded({ extended: false}));

	router.use(bodyParser.json());

	router.get('/', function (req, res) {
	  var tweets = tweetBank.list();
	  res.render( 'index.html', { title: 'Twitter.js', tweets: tweets, showForm: true } );
	});

	router.get("/users/:name", function (req, res) {
	  var name = req.params.name;
	  var list = tweetBank.find( {name:name} );
	  console.log(list);
	  res.render( "index.html", { title: "Twitter.js - Posts by " + name, tweets:list, showForm: true, name:name } )
	});

	router.post("/tweets", function(req, res) {
		var name = req.body.name;
		var text = req.body.text;
		tweetBank.add(name, text);
		res.redirect("/");
	});
	return router;
}
