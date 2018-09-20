# Exact Change

---
1.要求

- 设计一个收银程序 checkCashRegister() ，其把购买价格(price)作为第一个参数 , 付款金额 (cash)作为第二个参数, 和收银机中零钱 (cid) 作为第三个参数.
- cid 是一个二维数组，存着当前可用的找零.
- 当收银机中的钱不够找零时返回字符串 "Insufficient Funds". 如果正好则返回字符串 "Closed".否则, 返回应找回的零钱列表,且由大到小存在二维数组中.

2.思路

- 暂无

3.代码

```javascript
function checkCashRegister(price, cash, cid) {
  var change=[];
  var mark=true;
  var tempdiff=cash-price;//要找的钱
  var arr = [1,5,10,25,100,500,1000,2000,10000];
  var dif=tempdiff*100;
  for(var i=7;i>=0;i--){
    if(dif===0){
      break;
    }
    if(dif/arr[i]>=1){
      var last=cid[i][1]*100;
      var give=0;
      if(last>=dif){
        give=parseInt(dif/arr[i])*arr[i];
        
            if(mark){
              if(last!==dif){
                mark=false;
              }
            }
      }
      else{
        give=last;
      }
      change.push([cid[i][0],parseFloat((give/100).toFixed(2))]);
      dif -=give;
    }
    //dif.toFixed(2);/保留2位小数
  }
  if(dif===0){
      if(mark){
      return "Closed";
    }
    else{
      return change;
    }
  }
  else{
    return "Insufficient Funds";
  }
  //return typeof dif;
  
}
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
```

4.相关链接

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object

5.说明

- 代码参考：https://freecodecamp.cn/yinyoupoet 