$(document).ready(function(){
    var comp=[];//电脑数组
    var user=[];//玩家数组
    var allMark=false;//总开关标记
    var strictMark=false;//strict模式标记
    var startMark=false;//游戏开始标记
    var checkMark=false;
    var color=['#EF4836','#03A678','#1E90FF','#B8860B'];
    $(".allstar").click(function(){//总开关
        if(allMark===false){
            $(".onf").animate({
                left:'62px',
            },500);
            $(".countdisp").html('--');
            allMark=true;
            console.log('allmark:'+allMark);
        }
        else{
            $(".onf").animate({
                left:'36px',
            },500);
            allMark=false;
            startMark=false;
            strictMark=false;
            $(".countdisp").html('');
            $(".light").css("background-color","#fff");
            comp=[];
            user=[];
            console.log('allmark:'+allMark);
        }
    });
    $("#strict").click(function(){//strict模式开关
        if(allMark===true){
            if(strictMark===false){
                $(".light").css("background-color","#cb4042");
                strictMark=true;
            }
            else{
                $(".light").css("background-color","#fff");
                strictMark=false;
            }
        }
    });
    
    $("#start").click(function(){
        if(allMark){
            if(!startMark){//开始游戏
                startMark=true;
                console.log('start');
                runGame();
            }
            else{//游戏进行时点击开始按钮，重新开始游戏
                console.log('restart');
            }
        }
    });
    
    $("#g1").click(function(){
        run(1);
        user.push(1);
    });
    $("#g2").click(function(){
        run(2);
        user.push(2);
    });
    $("#g3").click(function(){
        run(3);
        user.push(3);
    });
    $("#g4").click(function(){
        run(4);
        user.push(4);
    });
    function runGame(){
        if(startMark){
        var time;
        var checkTime;
        var i=0;
        comp.push(Math.floor(Math.random()*4+1));
        time=setInterval(function(){
            if(i<comp.length){
                run(comp[i]);
                i++;
            }
            else{
                clearInterval(time);
                console.log('compstop');
            }
            
        },1000);
        checkMark=false;
        console.log(comp);
        checkTime=setInterval(function(){
            if(!checkMark){
                console.log(user);
                check();
            }
            else{
                console.log('checkstop');
                clearInterval(checkTime);
                runGame();
            }
        },1000);
        }
    }
    
    function check(){
        if(comp.length===6&&user.length===6){
            startMark=false;
            checkMark=true;
            console.log('win');
            return;
        }
        else if(comp.length==user.length){
            if(comp[comp.length-1]===user[user.length-1]){
                console.log(checkMark);
                checkMark=true;
                user=[];
                return;
            }
        }
        else{
            console.log('wrong');
            return;
        }
        
    }
    function run(i){
            $("#g"+i).css("background-color","#fff");
            $("#g"+i).css("box-shadow","0px 2px 10px 5px #97B1BF");
            setTimeout(function(){
                $("#g"+i).css("background-color",color[i-1]);
                $("#g"+i).css("box-shadow","0px 0px 0px 0px");
            },400);
    }
  });