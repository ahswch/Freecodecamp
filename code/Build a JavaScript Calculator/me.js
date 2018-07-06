$(document).ready(function(){
    var display='';
    $(".normal").click(function(){
        display +=$(this).html();
        if(display.length>14){
            $(".result").html(display.slice(0,14)+'...');
        }
        else{
            $(".result").html(display);
        }
    });
    $("#ac").click(function(){
        display="";
        $(".result").empty()
    });
    $("#ce").click(function(){
        display=display.slice(0,-1);
        $(".result").html(display);
    });
    $("#equa").click(function(){
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