/**
* 构造类通用模式 
* 1. throw new Error(): 抛异常的情况下，对象不会创建
*/
let Book = (function () {
  let bookTotalNum = 0;// 静态私有属性，对象间共享，无法通过对象访问
  let checkISBN = function(ISBN) { /* ... */ };// 静态私有方法，对象间共享，无法通过对象访问
  function getBookTotalNum() { return bookTotalNum; }// 静态私有方法
  function _book(data){
    if(!checkISBN(data.ISBN)) { throw new Error("ISBN's format is wrong!!!");}
    let ISBN = data.ISBN;// 私有属性
    
    this.name = data.name;// 公有属性
    this.price = data.price;// 公有属性
    
    this.getISBN = function() { return ISBN; };// 特权方法
    
    this.getName = function() { return this.name; };// 公有方法
    this.setName = function(name) { this.name = name; };// 公有方法
    this.getPrice = function() { return this.price; };// 公有方法
    this.setPrice = function(price) { this.price = price; };// 公有方法
    
    bookTotalNum ++;
    if(getBookTotalNum() > this.maxBookTotalNum) { throw new Error(`The total number of books can not exceed ${this.maxBookTotalNum} !!!`);}
  }
  _book.prototype.maxBookTotalNum = 100;// 静态公有属性
  _book.prototype.toString = function() {return `Name: ${this.getName()}, Price: ${this.getPrice()}.`;};// 静态公有方法
  return _book;
})();
