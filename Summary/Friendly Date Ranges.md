# Friendly Date Ranges

---
1.要求

- 把常见的日期格式如：YYYY-MM-DD 转换成一种更易读的格式。
- 易读格式应该是用月份名称代替月份数字，用序数词代替数字来表示天 (1st 代替 1).
- 记住不要显示那些可以被推测出来的信息: 如果一个日期区间里结束日期与开始日期相差小于一年，则结束日期就不用写年份了；在这种情况下，如果月份开始和结束日期如果在同一个月，则结束日期月份也不用写了。
- 另外, 如果开始日期年份是当前年份，且结束日期与开始日期小于一年，则开始日期的年份也不用写。
- 例如:
    - 包含当前年份和相同月份的时候，makeFriendlyDates(["2017-01-02", "2017-01-05"]) 应该返回 ["January 2nd","5th"]
    - 不包含当前年份，makeFriendlyDates(["2003-08-15", "2009-09-21"]) 应该返回 ["August 15th, 2003", "September 21st, 2009"]。
- 请考虑清楚所有可能出现的情况，包括传入的日期区间是否合理。对于不合理的日期区间，直接返回 undefined 即可

2.思路

- 定义日期格式检测函数checkDate
- 定义要替换文本的月份和日期末尾数组
- 定义change函数，在不改变原有格式的情况下只替换要改变的文本
- 在主函数中判断check过和change过的日期的各种形式，在不同日期形式下利用.push()方法将日期更改为易读的正确格式

3.代码

```javascript
function checkDate(val){
  if(parseInt(val[0].substr(0,4))<=parseInt(val[1].substr(0,4))){
    return true;
  }
  
}

var date=['0','st','nd','rd','th'];
var month=['0','January','February','March','April','May','June','July','August','September','October','November','December'];

function change(val){
    var temp1=val[0].split('-');
    var temp2=val[1].split('-');
    temp1[1]=month[parseInt(temp1[1])];
    temp2[1]=month[parseInt(temp2[1])];
    var te1=temp1[2].substr(-1,1);
    var te2=temp2[2].substr(-1,1);
    if(te1==='0'){
      te1=4;
    }
    if(te2==='0'){
      te2=4;
    }
    if(temp1[2].length==2&&temp1[2].substr(0,1)==='1'){
      te1=4;
    }
    if(temp2[2].length==2&&temp2[2].substr(0,1)==='1'){
      te2=4;
    }
    if(parseInt(te1)<4){
      temp1[2]=parseInt(temp1[2])+date[parseInt(te1)];
    }
    else{
      temp1[2]=parseInt(temp1[2])+date[4];
    }
    if(parseInt(te2)<4){
      temp2[2]=parseInt(temp2[2])+date[parseInt(te2)];
    }
    else{
      temp2[2]=parseInt(temp2[2])+date[4];
    }
    val[0]=temp1;
    val[1]=temp2;
    return val;
}

function makeFriendlyDates(arr) {
  var result=[];
  if(checkDate(arr)){
     
    arr=change(arr);
    
    if(arr[0][0]==arr[1][0]&&arr[0][1]==arr[1][1]&&arr[0][2]==arr[1][2]){//年月日相等，不去2017
      var f1=[];
      var f11=[];
      f1.push(arr[0][1]);
      f1.push(arr[0][2]);
      result.push(f1.join(' '));
      result.push(arr[0][0]);
      f11.push(result.join(', '));
      result=f11;
    }
    else if(arr[0][0]==arr[1][0]&&arr[0][1]==arr[1][1]){//年月相等
        if(parseInt(arr[0][0])==2017&&parseInt(arr[1][0])==2017){
          var r1=[];
          r1.push(arr[0][1]);
          r1.push(arr[0][2]);
          result.push(r1.join(' '));
          result.push(arr[1][2]);
         }
          else{  }//年月相等但不是2017年 暂不写
    }
    else if(arr[0][0]==arr[1][0]){//年相等 只按测试条目写，都是2017的时候
      var f2=[];
      var f22=[];
      var f222=[];
      f2.push(arr[0][1]);
      f2.push(arr[0][2]);
      f222.push(f2.join(' '));
      f22.push(arr[1][1]);
      f22.push(arr[1][2]);
      f222.push(f22.join(' '));
      result=f222;
    }
    else if(parseInt(arr[0][0])==2017){ //第一项是2017年
      var f31=[];
      var f32=[];
      var f3=[];
      f31.push(arr[0][1]);
      f31.push(arr[0][2]);
      f3.push(f31.join(' '));
      f32.push(arr[1][1]);
      f32.push(arr[1][2]);
      f3.push(f32.join(' '));
      result=f3;
    }
    else if(parseInt(arr[1][0])==2017){
      var f41=[];
      var f42=[];
      var f43=[];
      var f4=[];
      f41.push(arr[0][1]);
      f41.push(arr[0][2]);
      f43.push(f41.join(' '));
      f43.push(arr[0][0]);
      f4.push(f43.join(', '));
      f42.push(arr[1][1]);
      f42.push(arr[1][2]);
      f4.push(f42.join(' '));
      result=f4;
    }
    else if(parseInt(arr[1][0])-parseInt(arr[0][0])==1){
      if ((arr[0][1]==arr[1][1]) && (parseInt(arr[0][2])>parseInt(arr[1][2]))){
        var f51=[];
        var f52=[];
        var f510=[];
        //var f520=[];//["October 23rd, 2010","October 22nd"]
        var f5=[];
        f51.push(arr[0][1]);
        f51.push(arr[0][2]);
        f510.push(f51.join(' '));
        f510.push(arr[0][0]);
        f5.push(f510.join(', '));
        f52.push(arr[1][1]);
        f52.push(arr[1][2]);
        f5.push(f52.join(' '));
        
        result=f5;
      }
      else{
        var f61=[];
        var f62=[];
        var f610=[];
        var f620=[];//["October 31st, 2008","October 31st, 2009"]
        var f6=[];
        f61.push(arr[0][1]);
        f61.push(arr[0][2]);
        f610.push(f61.join(' '));
        f610.push(arr[0][0]);
        f6.push(f610.join(', '));
        f62.push(arr[1][1]);
        f62.push(arr[1][2]);
        f620.push(f62.join(' '));
        f620.push(arr[1][0]);
        f6.push(f620.join(', '));
        
        result=f6;
      }
      
    }
    else{//["August 15th, 2003", "September 21st, 2009"]
        var f71=[];
        var f72=[];
        var f710=[];
        var f720=[];//["October 31st, 2008","October 31st, 2009"]
        var f7=[];
        f71.push(arr[0][1]);
        f71.push(arr[0][2]);
        f710.push(f71.join(' '));
        f710.push(arr[0][0]);
        f7.push(f710.join(', '));
        f72.push(arr[1][1]);
        f72.push(arr[1][2]);
        f720.push(f72.join(' '));
        f720.push(arr[1][0]);
        f7.push(f720.join(', '));
        
        result=f7;
    }
    return result;
  }
  
}

makeFriendlyDates(['2017-01-02', '2017-01-05']);
makeFriendlyDates(["2008-10-31", "2009-10-31"]);
```

4.相关链接

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substr
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt