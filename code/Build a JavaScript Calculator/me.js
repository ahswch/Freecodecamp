$(document).ready(function(){
    var display='';//显示内容的字符串
    $(".normal").click(function(){//点击普通按钮，将要计算的式子显示到计算器输出框
        display +=$(this).html();//累加每次点击的按钮内容，实现式子的显示
        if(display.length>14){//显示的字符串长度大于14，多于的部分显示...
            $(".result").html(display.slice(0,14)+'...');
        }
        else{//显示的字符串长度不大于14，正常显示
            $(".result").html(display);
        }
    });
    $("#ac").click(function(){//清楚所有显示
        display="";
        $(".result").empty()
    });
    $("#ce").click(function(){//后退
        display=display.slice(0,-1);
        $(".result").html(display);
    });
    $("#equa").click(function(){//‘=’操作，运算字符串式子，将结果显示到计算器输出框
        $(".result").html(eval(display));
        
    });
  });
/*
  var temp='';
    $(".num").click(function(){
        temp+=$(this).html();
        if(temp.length>14){
            var temp1="..."+temp.slice(temp.length-14);
            $(".result").html(temp1);
        }
        else{
            $(".result").html(temp);
        }
    });
    $("#ac").click(function(){
        temp="";
        $(".result").empty()
    });
    $("#ce").click(function(){
        temp=temp.slice(0,-1);
        $(".result").html(temp);
    });
    $("#equa").click(function(){
        $(".result").html(eval(temp));
        temp="";
    });
    $("#ans").click(function(){
        temp=$(".result").html();
    });
 */ 