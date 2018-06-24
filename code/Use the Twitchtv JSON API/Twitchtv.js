$(document).ready(function(){
    var userNames = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","ESL_SC2","noobs2ninjas","beohoff"];
    function makeurl(username){
        return "https://api.twitch.tv/kraken/streams/" +username+ "?client_id=nuauwmfr41xjq0khktqfkjfs58dtr2";
    }
    userNames.forEach(function(userNmae){
        $.ajax({
            url:makeurl(userNmae),
            type:'get',
            dataType:'jsonp',
            success: function(data){
                if(data.stream !== null){
                    console.log(data.stream.game);
                    var html = "<div class='all on'><img class='img' src="+data.stream.channel.logo+"><div class='text text-center'><h3><a target='_blank' href="+data.stream.channel.url+">"+data.stream.channel.name+"</a></h3><p>"+data.stream.channel.game+":"+data.stream.channel.status+"</p></div></div>"
                    $(".main").append(html);
                }
                else if(data.stream === null){
                    $.ajax({
                        url:'https://api.twitch.tv/kraken/channels/'+userNmae+'?client_id=nuauwmfr41xjq0khktqfkjfs58dtr2',
                        type:'get',
                        dataType:'jsonp',
                        success: function(data){
                            console.log(data.display_name+'666');
                            var html="<div class='all off'><img class ='img' src="+ data.logo + "><div class = 'text-center text'><a target = '_blank' href ="+ data.url +"><h3>"+ data.name +"</h3></a><p>offline</p></div></div>";
                            $(".main").append(html);
                        }
                    });
                }
            },
            error : function(){
                alert("error");
              }
        });
    });
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
    $(".btnsearch").click(function(){  
        var txt=$("#txt").val();  
        if(txt != ""){  
          $(".all").hide().filter(":contains('"+txt+"')").show();
        }
      });
  });