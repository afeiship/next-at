(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var ARRAY_PROTO = Array.prototype;


  nx.at = function (inArray) {

    var result = [];
    var arg1 = arguments[1];
    var args_ = Array.isArray(arg1) ? arg1 : ARRAY_PROTO.slice.call(arguments, 1);
    for (var index = 0; index < inArray.length; index++) {
      var element = inArray[index];
      if( args_.indexOf(index)>-1 ){
        result.push( element );
      }
    }
    return result;

  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.at;
  }

}());
