$(document).ready(function(){
    var a = 5;
    var b = 25;
    var c = 0;
    var change1 = true;
    var change2 = true;
    var result;
  
    $('#btn1').click(function(){
      if (change1 === true){ 
        a--;
        if (a < 1) {
         a = 1;
        }
        $('#p1').html(a);
      }
    })
    $('#btn2').click(function(){
      if (change1 === true){
        a++;
        if(a > 60){
          a = 60;
        }
        $('#p1').html(a);
      }
    })
    $('#btn3').click(function(){
      if (change1 === true){
        b--;
        if (b < 1) {
         b = 1;
        }
        
        $('#p2').html(b);
      }
    })
    $('#btn4').click(function(){
      if (change1 === true){
        b++;
        if (b > 60) {
         b = 60;
        }
        $('#p2').html(b);
      }
    })
    $('#btn6').click(function(){
      if (change1 === true){
        b = $('#p2').html();
        c = 0;
        $('.min').html(b);
        $('.sec').html('00');
      }
    })
      
    function star(){ 
      if(c === 0){
        b--;
        c = 60;
      }
      c--;
      if(b === 0 && c == 0){
        if(change2 === true){ 
          b = a;
          c = 0;
          $('#p3').html('break');
          change2 = false;
        }else{
          b = $('#p2').html();
          c = 0;
          $('#p3').html('session');
          change2 = true;
        }
      }
      if(b < 10){
        $('.min').html('0'+b);
        
      }else{
        $('.min').html(b);
      }
      if (c < 10){
        $('.sec').html('0'+c);
      }else{ 
        $('.sec').html(c);
      }
    }
    
    $('#btn5').click(function(){
      if (change1 === true){
        change1 = false;
        $(this).html('pause');
        result = setInterval(star, 1000);
      }else{
        change1 = true;
        $(this).html('star');
        clearInterval(result);
      }    
    })
  
  })