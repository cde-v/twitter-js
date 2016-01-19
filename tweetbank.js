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
    return _.filter(data properties)
  }
}

