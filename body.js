(function(w) {
  var djQuery = function(selector, context) {
    return new init(selector, context)
  };

  init = function( selector ) {

    if(!selector){
      return this;
    }

    var results = document.querySelectorAll(selector);
    for (var i = 0; i < results.length; i++) {
      this[i] = results[i];
    }

    this.length = i;
  };

  djQuery.prototype = {
    length: 0,
    push: [].push,
    sort: [].sort,
    splice: [].splice
  };

  init.prototype = djQuery.prototype;

  w.$ = w.djQuery = djQuery;
})(window);
