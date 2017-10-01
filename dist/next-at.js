(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var ARRAY_PROTO = Array.prototype;


  nx.at = function (inArray) {

    var result = [];
    var arg1 = arguments[1];
    var args_ = Array.isArray(arg1) ? arg1 : ARRAY_PROTO.slice.call(arguments, 1);
    for (var index = 0; index < args_.length; index++) {
      var element = args_[index];
      var pushedElement = element>=0 ? inArray[element] : inArray.slice( element )[0];
      result.push( pushedElement );
    }
    return result;

  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.at;
  }

}());
