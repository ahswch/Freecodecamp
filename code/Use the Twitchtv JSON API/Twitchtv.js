$(document).ready(function(){
    var user = ["food","freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","ESL_SC2","noobs2ninjas","beohoff"];
    function makeurl(username){
        return "https://api.twitch.tv/kraken/streams/" +username+ "?client_id=nuauwmfr41xjq0khktqfkjfs58dtr2";
    }
    
    function getDate(val){//获取数据，并输出
        $.ajax({
            url:makeurl(val),
            type:'get',
            dataType:'jsonp',
            success: function(data){
                if(data.stream !==null){
                    var temp=data.stream.channel;
                    var display="<div class='all on'><img class='img' src="+temp.logo+"><div class='text text-center'><h3><a target='_blank' href="+temp.url+">"+temp.name+"</a></h3><p>"+temp.game+":"+temp.status+"</p></div></div>";
                    $(".main").append(display);
                }
                else{
                    $.ajax({
                        url:'https://api.twitch.tv/kraken/channels/'+val+'?client_id=nuauwmfr41xjq0khktqfkjfs58dtr2',
                        type:'get',
                        dataType:'jsonp',
                        success: function(data){
                            console.log(data.display_name+'666');
                            var temp="<div class='all off'><img class ='img' src="+ data.logo + "><div class = 'text-center text'><a target = '_blank' href ="+ data.url +"><h3>"+ data.name +"</h3></a><p>offline</p></div></div>";
                            $(".main").append(temp);
                        }
                    });
                }
            },
            error: function(){
                alert('error');
            }
        });
    }
    
    for(var i=0;i<user.length;i++){//遍历user数组
        getDate(user[i]);
    }
    
    $(".btnall").click(function(){
        $(".all").show();
    });
    $(".btnon").click(function(){
        $(".on").show();
        $(".off").hide();
    });
    $(".btnoff").click(function(){
        $(".off").show();
        $(".on").hide();
    });
    $(".btnsearch").click(function(){  //参考：https://www.freecodecamp.cn/liuboaibc
        var txt=$("#txt").val();  
        if(txt != ""){  
          $(".all").hide().filter(":contains('"+txt+"')").show();
        }
      });
  });