# Make a Person

---
1.要求

- 用下面给定的方法构造一个对象:方法有 getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).
- 所有有参数的方法只接受一个字符串参数.
- 所有的方法只与实体对象交互. 

2.思路

- 根据相关链接介绍用题目给定的方法构造一个对象.构造对象

3.代码

```javascript
var Person = function(firstAndLast) {
    var firstName=firstAndLast.split(' ')[0];
    var lastName=firstAndLast.split(' ')[1];
  this.getFirstName=function(){
    return firstName;
  };
  this.getLastName=function(){
    return lastName;
  };
  this.getFullName=function(){
    return firstName+' '+lastName;
  };
  this.setFirstName=function(first){
    firstName=first;
  };
  this.setLastName=function(last){
    lastName=last;
  };
  this.setFullName=function(firstAndLast){
    firstName=firstAndLast.split(' ')[0];
    lastName=firstAndLast.split(' ')[1];
  };
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
```

4.相关链接

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Details_of_the_Object_Model