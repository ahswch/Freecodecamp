$(document).ready(function(){
    var youMark;
    var compMark;
    $(".inc").fadeIn(1000);
    
    $("#x").click(function(){
      $(".inc").fadeOut(500);
      youMark='X';
      compMark='O';
      console.log(youMark+compMark);
    });
    $("#o").click(function(){
      $(".inc").fadeOut(500);
      youMark='O';
      compMark='X';
      console.log(youMark+compMark);
    });
    var mark=true;
    $(".xo").click(function () {
      
      $(this).html(youMark);
      check();
      if(mark===false){
        return reset();
      } 
      else{
        for(var i=0;i<9;i++){
          if($("#a"+i).html()!=''){
            continue;
          } 
          $("#a"+i).html(compMark);break;
        }
        check();
        if(mark===false){
          return reset();
        } 
      }
    });
    function check(){
      if($("#a0").html()!='' && ($("#a0").html()==$("#a1").html()) && ($("#a1").html()==$("#a2").html())){
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
      else if($("#a0").html()!='' &&$("#a1").html()!='' &&$("#a2").html()!='' &&$("#a3").html()!='' &&$("#a4").html()!='' &&$("#a5").html()!='' &&$("#a6").html()!='' &&$("#a7").html()!='' &&$("#a8").html()!=''){
        $(".tie").fadeIn(1000);
        $(".tie").fadeOut(1000);
        mark=false;
      }
    }
    function reset(){
      setTimeout(function(){$(".xo").html('')},3000);
      //$(".xo").html('');
      $(".inc").fadeIn(1000);
      mark=true;
    }
  });