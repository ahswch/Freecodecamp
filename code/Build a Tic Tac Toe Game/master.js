$(document).ready(function(){
    var youMark;//玩家角色选择
    var compMark;//电脑角色选择
    $(".inc").fadeIn(1000);//显示选择框
    
    $("#x").click(function(){//玩家选择X
      $(".inc").fadeOut(500);
      youMark='X';
      compMark='O';
      console.log(youMark+compMark);
    });
    $("#o").click(function(){//玩家选择O
      $(".inc").fadeOut(500);
      youMark='O';
      compMark='X';
      console.log(youMark+compMark);
    });
    var mark=true;//输赢标记
    $(".xo").click(function () {//玩家点击下棋
      
      $(this).html(youMark);
      check();//检查输赢-玩家
      if(mark===false){
        return reset();//玩家赢了，重新开始游戏
      } 
      else{//玩家没赢，电脑下棋
        for(var i=0;i<9;i++){//电脑在空白格下一步棋
          if($("#a"+i).html()!=''){
            continue;
          } 
          $("#a"+i).html(compMark);break;
        }
        check();//检查输赢-电脑
        if(mark===false){
          return reset();//电脑赢了，重新开始游戏
        } 
      }
    });
    function check(){//检查输赢
      if($("#a0").html()!='' && ($("#a0").html()==$("#a1").html()) && ($("#a1").html()==$("#a2").html())){
        if($("#a0").html()==compMark){
          console.log('lose');
          $(".lose").fadeIn(1000);//玩家输了
          $(".lose").fadeOut(1000);
        }
        else{
          console.log('win');
          $(".win").fadeIn(1000);//玩家赢了
          $(".win").fadeOut(1000);
        }
        mark=false;
      }
      else if($("#a3").html()!='' && ($("#a3").html()==$("#a4").html()) && ($("#a4").html()==$("#a5").html())){
        if($("#a3").html()==compMark){
          console.log('lose');
          $(".lose").fadeIn(1000);
          $(".lose").fadeOut(1000);
        }
        else{
          console.log('win');
          $(".win").fadeIn(1000);
          $(".win").fadeOut(1000);
        }
        mark=false;
      }
      else if($("#a6").html()!='' && ($("#a6").html()==$("#a7").html()) && ($("#a7").html()==$("#a8").html())){
        if($("#a6").html()==compMark){
          console.log('lose');
          $(".lose").fadeIn(1000);
          $(".lose").fadeOut(1000);
        }
        else{
          console.log('win');
          $(".win").fadeIn(1000);
          $(".win").fadeOut(1000);
        }
        mark=false;
      }
      else if($("#a0").html()!='' && ($("#a0").html()==$("#a3").html()) && ($("#a3").html()==$("#a6").html())){
        if($("#a0").html()==compMark){
          console.log('lose');
          $(".lose").fadeIn(1000);
          $(".lose").fadeOut(1000);
        }
        else{
          console.log('win');
          $(".win").fadeIn(1000);
          $(".win").fadeOut(1000);
        }
        mark=false;
      }
      else if($("#a1").html()!='' && ($("#a1").html()==$("#a4").html()) && ($("#a4").html()==$("#a7").html())){
        if($("#a1").html()==compMark){
          console.log('lose');
          $(".lose").fadeIn(1000);
          $(".lose").fadeOut(1000);
        }
        else{
          console.log('win');
          $(".win").fadeIn(1000);
          $(".win").fadeOut(1000);
        }
        mark=false;
      }
      else if($("#a2").html()!='' && ($("#a2").html()==$("#a5").html()) && ($("#a5").html()==$("#a8").html())){
        if($("#a2").html()==compMark){
          console.log('lose');
          $(".lose").fadeIn(1000);
          $(".lose").fadeOut(1000);
        }
        else{
          console.log('win');
          $(".win").fadeIn(1000);
          $(".win").fadeOut(1000);
        }
        mark=false;
      }
      else if($("#a0").html()!='' && ($("#a0").html()==$("#a4").html()) && ($("#a4").html()==$("#a8").html())){
        if($("#a0").html()==compMark){
          console.log('lose');
          $(".lose").fadeIn(1000);
          $(".lose").fadeOut(1000);
        }
        else{
          console.log('win');
          $(".win").fadeIn(1000);
          $(".win").fadeOut(1000);
        }
        mark=false;
      }
      else if($("#a2").html()!='' && ($("#a2").html()==$("#a4").html()) && ($("#a4").html()==$("#a6").html())){
        if($("#a2").html()==compMark){
          console.log('lose');
          $(".lose").fadeIn(1000);
          $(".lose").fadeOut(1000);
        }
        else{
          console.log('win');
          $(".win").fadeIn(1000);
          $(".win").fadeOut(1000);
        }
        mark=false;
      }
      else if($("#a0").html()!='' &&$("#a1").html()!='' &&$("#a2").html()!='' &&$("#a3").html()!='' &&$("#a4").html()!='' &&$("#a5").html()!='' &&$("#a6").html()!='' &&$("#a7").html()!='' &&$("#a8").html()!=''){//平局
        $(".tie").fadeIn(1000);
        $(".tie").fadeOut(1000);
        mark=false;
      }
    }
    function reset(){//重新开始游戏函数
      setTimeout(function(){$(".xo").html('')},3000);
      //$(".xo").html('');
      $(".inc").fadeIn(1000);
      mark=true;
    }
  });