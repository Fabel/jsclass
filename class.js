var Class = (function(){
  var extend = function(destination, source) {
    for (var property in source)
      destination[property] = source[property]
    return destination
  }
  var F = new Function

  var Class = function(constructor, parent){
    extend(constructor, Class)
    extend(constructor.prototype, Class.prototype)
    if(parent){
      F.prototype = parent.prototype
      constructor.prototype = new F
      constructor.prototype.super = parent.prototype
    }
    return constructor
  }

  Class.def = function(name, cb){
    if(typeof name == "object"){
      this.defChain(name)
    } else {
      this.prototype[name] = cb
    }
  }

  Class.defChain = function(methods){
    for(var name in methods){
      this.prototype[name] = methods[name]
    }
  }

  Class.undef = function(name){
    delete this.prototype[name]
  }

  Class.prototype = {
    superConstructor: function(){
      if(!this.super)
        return
      this.super.constructor.apply(this, arguments)
    },

    send: function(){
      var name = arguments[0]
      var args = [].slice.call(arguments, 1, arguments.length)
      var fn = (this[name] && typeof this[name] == 'function') ? this[name] : this.methodMissing
      return fn.apply(this, args)
    },

    methodMissing: function(){
      console.log("Method missing.", arguments)
    }

  }

  return Class
})()
