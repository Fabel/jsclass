var Class = (function(){
  var extend = function(destination, source) {
    for (var property in source)
      destination[property] = source[property]
    return destination
  }

  var Class = function(constructor){
    extend(constructor, Class)
    return constructor
  }

  Class.extend = function(parent){
    extend(this.prototype, parent.prototype)
    var constructor = parent
    var _super = constructor.prototype.$super || function(){}
    this.prototype.$super = function(){
      this.$super = _super
      constructor.apply(this, arguments)
    }
    return this
  }

  Class.def = function(name, cb){
    if(typeof name == "object"){
      for(var method in name){
        this.prototype[method] = name[method]
      }
    } else if(typeof name == 'function') {
      name.call(this.prototype)
    } else {
      this.prototype[name] = cb
    }
  }

  Class.undef = function(name){
    delete this.prototype[name]
  }

  return Class
})()
