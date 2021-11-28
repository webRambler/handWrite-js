function subClass(age) {
  this.age = age
}

function superClass(name, id, works) {
  this.name = name
  this.id = id
  this.works = works // 数组或更为复杂的数据结构
}

// 1.类继承
/*
缺点有二：
  1.若父类中的共有属性是引用类型的，则会在所有的子类共有这一个引用类型，会互相影响
  2.因为是把原型指向了父类的实例，所以无法对父类的构造函数进行参数传递
*/
subClass.prototype = new superClass()



// 2.构造函数继承
/*
缺点是没有继承父类的原型
 */
function subClass(age, name, id, works) {
  superClass.call(this, name, id, works)
  this.age = age
}


// 3.组合式继承（将1和2组合起来）
/*
缺点是执行了两次父类的构造函数
 */
function subClass(age, name, id, works) {
  superClass.call(this, name, id, works)
  this.age = age
}
subClass.prototype = new superClass()


// 4.原型式继承
function inheritObj(obj) {
  // 此函数其实就是Object.create()的实现
  function Fn(){}
  Fn.prototype = obj
  return new Fn
}

// 5.寄生式继承（实际是对原型式继承的封装，扩展属性和方法而已）
function CreateInheritObj(obj) {
  const resObj = inheritObj(obj)
  resObj.getNmae = function () {
    return 'Tom'
  }
  // 返回扩展后的对象
  return resObj
}

// 6. 寄生组合式继承（最终大BOSS）
function subClass(age) {
  superClass.apply(this, arguments)
  this.age = age
}
function InheritPrototype(subClass, superClass) {
  const p = Object.create(superClass.prototype)
  p.constructor = subClass
  subClass.prototype = p
}

