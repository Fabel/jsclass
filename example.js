  var A = new Class(function(x){
    this.x = x
    this.className = 'A'
  })

  A.def(function(){
    //private func
    var hello = function(){
      return 'hello'
    }

    this.hi = function(arr){
      return hello() + '!!!'+this.className
    }
  })

  var B = new Class(function(x, y){
    this.$super(x)
    this.y = y
    this.className = 'B'
  }).extend(A)

  var C = new Class(function(){
    this.$super(10, 20)
    this.z = 'c'
    this.className = 'C'
  }).extend(B)

  var a = new A
  console.log(a.hi())

  var b = new B
  console.log(b.hi())

  var c = new C
  console.log(c.hi())

