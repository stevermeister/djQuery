(function(w) {
  var djQuery = function(selector, context) {
    return new init(selector, context)
  };

  init = function(selector) {

    if (!selector) {
      return this;
    }

    if(typeof selector === 'function'){
      djQuery.ready(selector);
      return this;
    }

    if(selector)

    var results = document.querySelectorAll(selector);
    for (var i = 0; i < results.length; i++) {
      this[i] = results[i];
    }

    this.length = i;
  };

  //$.ready // DOMContentLoaded
  var callbacks = [];
  djQuery.ready = function(callback) {
    callbacks.push(callback);
  }
  function completed() {
    document.removeEventListener( 'DOMContentLoaded', completed );
    callbacks.forEach(function(callback) {
      callback.apply();
    });
  }
  document.addEventListener( 'DOMContentLoaded', completed );

  djQuery.prototype = {
    length: 0,
    push: [].push,
    sort: [].sort,
    splice: [].splice
  };

  init.prototype = djQuery.prototype;

  w.$ = w.djQuery = djQuery;
})(window);