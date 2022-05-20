/*
* 1. 私有属性：函数内部的变量与方法外界访问不到的语言特性实现,即私有化变量
* 2. 私有函数：函数内部的变量与方法外界访问不到的语言特性实现,即私有化方法
* 3. 公有属性：通过this定义的属性
* 4. 公有函数：通过this定义的方法，即公有方法
* 5. 特权方法：特殊的公有方法，即访问私有属性与私有函数的公有方法，如getter与setter
* 6. 闭包：同于 1.和2. 使用函数级作用域的语言特性创建静态私有变量与静态私有方法
* 7. 私有属性在创建的对象间独立，每个对象有一份相互独立的私有属性
* 8. 静态私有属性在所有创建的对象间公有，每个对象访问同一个静态私有属性
* 9. 类函数表示了JS的class的本质是函数
* 10.静态公有属性：通过类函数原型定义的属性
* 11.静态公有函数：通过类函数原型定义的方法
* 12.以上"静态"的含义是是否该属性或函数在实例化的对象中所共享
* 13.以上"私有"的含义是是否该属性或函数不可以通过实例化的对象点形式访问
* 14.instanceof：判断某对象是否为某类的实例
*/

/*
1. 私有变量
let Book = function () {
  let ISBN;// private variable
};
2. 私有函数/嵌套函数
let Book = function (){
  // private function
  function checkISBN(){
    // check ISBN 合法性...
  }
};
3. 公有属性
let Book = function (ISBN, name){
  this.ISBN = ISBN;// public property
  this.name = name;// public property
};
4. 公有函数
let Book = function (ISBN, name){
  this.ISBN = ISBN;// public property
  this.name = name;// public property
  
  this.toString = function() {
    console.log(`this book: ${this.name} it's ISBN:  ${this.ISBN}`)
  }
};
5. 闭包、静态私有变量、静态私有函数
let Book = (function(){
  let numOfBookObj = 0;
  function checkISBN(){
    // ...
  }
  numOfBookObj ++;
  return function(ISBN, name) {
    this.ISBN = ISBN;
    this.name = name;
  }
})();
或者
let Book = (function(){
  let numOfBookObj = 0;
  function checkISBN(){
    // ...
  }
  let _book = function (ISBN, name) {
    this.ISBN = ISBN;
    this.name = name;

    numOfBookObj ++;
  }
  return _book;
})();
6. 静态公有属性、静态公有方法
let Book = function(ISBN, name){
    this.ISBN = ISBN;
    this.name = name;  
}
Book.prototype = {
  isSalesPromotion: false,
  toString: function() {
    return `ISBN:${this.ISBN} Name:${this.name}`;
  }
}
7. instanceof
let Book = function(){ }
let a = new Book();
let b = Book();
a instanceof Book// true
b instanceof Book// false
b == undefined// true
*/
