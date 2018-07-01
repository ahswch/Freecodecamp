$(document).ready(function(){
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
  });
  