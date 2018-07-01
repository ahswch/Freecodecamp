$(document).ready(function(){
    var sessionv=$(".svalue").html();
    var breakv=$(".bvalue").html();
    console.log(sessionv[0]);
    var bmin1=breakv[0];
    var bmin2=breakv[0];
    var min1=sessionv[0];
    var min2=sessionv[1];
    var sec1=0;
    var sec2=0;
    var markbtn=true;
    var mark=true;
    $(".start").click(function(){
            if (markbtn===true){
                $(this).html("Pause");
                markbtn=false;
                count();
                /*if(mark===true){
                    min1=sessionv[0];
                    min2=sessionv[1];
                    count();
                }
                else if(mark===false){
                    min1=breakv[0];
                    min2=breakv[0];
                    count();
                }*/
            }
            else if(markbtn===false){
                $(this).html('Start');
                markbtn=true;
                clearInterval(myVar);

            }
        
        
    });
    if(min1===0&&min2===0&&sec1===0&&sec2===0){
        min1=bmin1;
        min2=bmin2;
    }
    function count(){
        myVar=setInterval(function(){
            start();
            
        },3);
        function start() {
            if(min1===0&&min2===0&&sec1===0&&sec2===0){
                if(mark===true){
                    min1=breakv[0];
                    min2=breakv[0];
                    mark=false;
                    alert(min1+min2);
                }
                else if(mark===false){
                    min1=sessionv[0];
                    min2=sessionv[1];
                    mark=true;
                    alert(min1+min2); 
                }
                //alert(mark);
                //clearInterval(myVar);
                return myVar;
            }
            if(min2===0&&sec1===0&&sec2===0){
                min2=10;
                min1--;
            }
            if(sec1===0&&sec2===0){
                min2--;
                sec1=6;
            }
            if(sec2===0){
                sec2=10;
                sec1--;
            }
            
            sec2--;
            $(".min").html(min1+''+min2);
            $(".sec").html(sec1+''+sec2);
            console.log(min1+''+min2+''+sec1+''+sec2);
        }
    }
    
  });