var _ = require("lodash");

var data = [];

var functions = {
  add: function (name, text) {
    data.push({ name:name, text:text })
  },

  list: function () {
    return _.cloneDeep(data);
  },

  find: function (properties) {
    return _.filter(data, properties)
  }
}

var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Shanna', 'Charlotte', 'Scott', 'Ayana', 'Omri', 'Gabriel', 'Joe'];
  var fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

module.exports = functions;

for(var i=0; i<10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}




//console.log(data);