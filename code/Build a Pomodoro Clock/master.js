$(document).ready(function(){
    var smin=25;
    var bmin=5;
    var sec=0;
    var time;
    var timemark=true;
    var change =true;
    $(".bsubt").click(function () {
        bmin=$(".bvalue").html();
        if(timemark===true){
            bmin--;
            if(bmin<1){
                bmin=1;
            }
            $(".bvalue").html(bmin);
        }
    });
    $(".bplus").click(function () {
        bmin=$(".bvalue").html();
        if(timemark===true){
            bmin++;
            if(bmin>60){
                bmin=60;
            }
            $(".bvalue").html(bmin);
        }
    });
    $(".ssubt").click(function () {
        smin=$(".svalue").html();
        if(timemark===true){
            smin--;
            if(smin<1){
                smin=1;
            }
            $(".svalue").html(smin);
        }
    });
    $(".splus").click(function () {
        smin=$(".svalue").html();
        if(timemark===true){
            smin++;
            if(smin>60){
                smin=60;
            }
            $(".svalue").html(smin);
        }
    });
    function start(){
      
        if(change===true){
            $("p").html('session');
            if(sec===0){
                sec=60;
                smin--;
            }
            sec--;
            if(sec<10){
                console.log(smin+'0'+sec);
                $(".sec").html('0'+sec);
            }
            else{
                console.log(smin+''+sec);
                $(".sec").html(sec);
            }
            if(smin<10){
                $(".min").html('0'+smin);
            }
            else{
                $(".min").html(smin);
            }
            if(smin==0&&sec==0){
                smin=$(".svalue").html();
                change=false;
                console.log(change);
            }
        }
        else{
            $("p").html('break');
            if(sec===0){
                sec=60;
                bmin--;
            }
            sec--;
            if(sec<10){
                console.log(bmin+'0'+sec);
                $(".sec").html('0'+sec);
            }
            else{
                console.log(bmin+''+sec);
                $(".sec").html(sec);
            }
            if(bmin<10){
                $(".min").html('0'+bmin);
            }
            else{
                $(".min").html(bmin);
            }
            if(bmin==0&&sec==0){
                bmin=$(".bvalue").html();
                change=true;
                console.log(change);
            }
        }
      }
      $("#start").click(function(){
        console.log('start');
        if(timemark===true){
            timemark=false;
            $(this).html('Pause');
            time =setInterval(start,10);
        }
        else{
            timemark=true;
            $(this).html('Start');
            clearInterval(time);
        }
      });
      $("#reset").click(function(){
                timemark=true;
                $("#start").html('Start');
                clearInterval(time);
                smin=$(".svalue").html();
                bmin=$(".bvalue").html();
                sec=0;
                $(".min").html(smin);
                $(".sec").html('0'+sec);
    });
  });
  
  /* 失败
        $(".min").html($(".svalue").html());
    var sessionv=$(".svalue").html();
    var breakv=$(".bvalue").html();
    console.log(sessionv[0]);
    var min1=sessionv[0];
    var min2=sessionv[1];
    var sec1=0;
    var sec2=0;
    var markbtn=true;
    var tempb0=breakv[0];
    var temps0=sessionv[0];
    var tempb1=breakv[1];
    var temps1=sessionv[1];
    $(".set").on("click",function(){//在加减转换时会出现多运行一次前一种操作，暂未解决
        
        if($(this).hasClass('bsubt')){
            if(tempb1==-1){
                tempb1=9;
                tempb0--;
            }
            console.log(tempb0+''+tempb1);
            $(".bvalue").html(tempb0+''+tempb1);
            tempb1--;
        }
        else if($(this).hasClass('bplus')){
            if(tempb1==10){
                tempb1=0;
                tempb0++;
            }
            console.log(tempb0+''+tempb1);
            $(".bvalue").html(tempb0+''+tempb1);
            tempb1++;
        }
        else if($(this).hasClass('ssubt')){
            if(temps1==-1){
                temps1=9;
                temps0--;
            }
            console.log(temps0+''+temps1);
            $(".svalue").html(temps0+''+temps1);
            temps1--;
        }
        else if($(this).hasClass('splus')){
            if(temps1==10){
                temps1=0;
                temps0++;
            }
            console.log(temps0+''+temps1);
            $(".svalue").html(temps0+''+temps1);
            temps1++;
        }
       
      });
    $(".start").click(function(){
            if (markbtn===true){
                $(this).html("Pause");
                markbtn=false;
                count();
            }
            else if(markbtn===false){
                $(this).html('Start');
                markbtn=true;
                clearInterval(myVar);

            }
    });
    var mark=true;
    var myVar;
    function count(){
        myVar=setInterval(function(){
            start();
        },25);
        
        function start() {
            if(min1==0&&min2==0&&sec1==0&&sec2==0){//这里用===会失败，原因不明
                if(mark===true){
                    min1=breakv[0];
                    min2=breakv[1];
                    mark=false;
                    console.log('break'+mark);
                    $("p").html('break');
                }
                else 
                {
                    min1=sessionv[0];
                    min2=sessionv[1];
                    mark=true;
                    console.log('session'+mark);
                    $("p").html('session');
                }
                return start();
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
    $(".reset").click(function () {
        clearInterval(myVar);
        if(mark===true){
            min1=temps0;
            min2=temps1;
            sec1=0;
            sec2=0;
            $(".min").html(min1+''+min2);
            $(".sec").html(sec1+''+sec2);
        }
        else{
            min1=tempb0;
            min2=tempb1;
            sec1=0;
            sec2=0;
            $(".min").html(min1+''+min2);
            $(".sec").html(sec1+''+sec2);
        }
    });
  */