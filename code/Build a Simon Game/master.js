/*
    部分思路及音频来源参考https://codepen.io/yinyoupoet/pen/MvEmBq
    请不要在电脑闪烁时点击色块
*/
$(document).ready(function(){
    var comp=[];//电脑数组
    var user=[];//玩家数组
    var allMark=false;//总开关标记
    var strictMark=false;//strict模式标记
    var startMark=false;//游戏开始标记
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
                restart();
                console.log('restart');
            }
        }
    });
    
    $("#g1").click(function(){
        run(1);
        user.push(1);
        check();
    });
    $("#g2").click(function(){
        run(2);
        user.push(2);
        check();
    });
    $("#g3").click(function(){
        run(3);
        user.push(3);
        check();
    });
    $("#g4").click(function(){
        run(4);
        user.push(4);
        check();
    });
    function runGame(){//运行游戏
        if(startMark){
        comp.push(Math.floor(Math.random()*4+1));
        console.log("comp:"+ comp);
        display(comp);//按电脑数组进行闪烁
        }
    }
    
    
    function check(){//检查用户数组和电脑数组
        console.log("user:"+ user);
        if(user[user.length-1] === comp[user.length-1]){ //两数组对应元素相等
            if(user.length === comp.length){ // 且两数组长度相等 即两数组相等
                    if(user.length === 4){  // 完成20关 游戏结束 目测测试设为4
                        startMark=false;
                        console.log('win');
                        $(".win").fadeIn(2000);
                        $(".win").fadeOut(1000);
                        end();
                        return;
                    }
                    else{
                        showLevel();
                        user=[];
                        return runGame();
                    }
            }
        }
        else{
            $("#music").attr("src","http://ydown.smzy.com/yinpin/2008-12/smzy_2008129221423146.mp3");
            $("#allmusic")[0].pause();
            $("#allmusic")[0].load();
            $("#allmusic")[0].play();
            $(".countdisp").html('!!');//警告声音
            console.log('warning');
            if(strictMark===false){//非strict模式，游戏面板重新按电脑数组亮起
                display(comp);
                user=[];
                return;
            }
            else{//strict模式，游戏重新开始
                comp=[];
                user=[];
                return runGame();
            }
        }
        
    }
    function showLevel(){
        if(user.length < 10){
            $(".countdisp").html('0'+comp.length);
        }
        else{
            $(".countdisp").html(comp.length);
        }   
    }
    function restart(){//重新开始游戏
        user=[];
        comp=[];
        startMark=true;
        runGame;
    }
    function end(){//结束游戏
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
    var musiclib=["http://ydown.smzy.com/yinpin/2008-12/smzy_2008129221430811.mp3","http://ydown.smzy.com/yinpin/2008-12/smzy_2008129222534573.mp3","http://ydown.smzy.com/yinpin/2008-12/smzy_2008129222441729.mp3","http://ydown.smzy.com/yinpin/2008-12/smzy_2008129222356427.mp3"];//点击音乐地址数组
    function run(i){//色块闪烁发出声音
            $("#g"+i).css("background-color","#fff");
            $("#g"+i).css("box-shadow","0px 2px 10px 5px #97B1BF");
            $("#music").attr("src",musiclib[i-1]);
            setTimeout(function(){
                $("#g"+i).css("background-color",color[i-1]);
                $("#g"+i).css("box-shadow","0px 0px 0px 0px");
            },400);
            $("#allmusic")[0].pause();
		    $("#allmusic")[0].load();
		    $("#allmusic")[0].play();
    }
    function display(val) {
        var temp;
        var i=0;
        temp=setInterval(function(){
            if(i<val.length){
                run(val[i]);
                i++;
            }
            else{
                clearInterval(temp);
                console.log('doneDisplay');
            }
            
        },1000);
      }
      
  });
 