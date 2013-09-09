var A = new Class(function(x){
  this.arg = 'a' + (x || "")
})

var B = new Class(function(){
  this.ar = 'b'
  this.superConstructor()
}, A)


var C = new Class(function(){
  this.arg = 'c'
  this.superConstructor()
}, B)

A.def({
  hi: function(arr){ arr.push(this.arg); return arr }
})

B.def({
  // hi: function(arr){
  //   this.super.hi(arr).push(this.ar)
  //   return arr
  // }
})

C.def({
  hi: function(arr){
    this.super.hi(arr).push(this.arg)
    return arr
  }
})

var a = new A
console.log(a.hi(new Array))

var b = new B
console.log(b.hi(new Array))

var c = new C
console.log(c.hi(new Array))

var D = new Class(function(){
  this.ar = 'd'
  this.superConstructor()
}, C)

D.def({
  hi: function(arr){
    this.super.hi(arr).push('dololo')
    return arr
  }
})

var d = new D
console.log(d.hi(new Array))
