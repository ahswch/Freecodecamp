$(document).ready(function(){
    var user = ["food","freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","ESL_SC2","noobs2ninjas","beohoff"];//设置需要查询的用户名数组
    function makeurl(username){//产生获取数据的地址
        return "https://api.twitch.tv/kraken/streams/" +username+ "?client_id=nuauwmfr41xjq0khktqfkjfs58dtr2";
    }
    
    function getDate(val){//获取数据，并输出
        $.ajax({//通过ajax get方式获取数据
            url:makeurl(val),
            type:'get',
            dataType:'jsonp',
            success: function(data){//获取数据成功
                if(data.stream !==null){//用户直播在线
                    var temp=data.stream.channel;//当前频道数据
                    var display="<div class='all on'><img class='img' src="+temp.logo+"><div class='text text-center'><h3><a target='_blank' href="+temp.url+">"+temp.name+"</a></h3><p>"+temp.game+":"+temp.status+"</p></div></div>";//播主的房间logo、直播地址、播主用户名、正在播的内容
                    $(".main").append(display);//网页显示信息
                }
                else{//播主不在线
                    $.ajax({//以ajax get 方式通过Chanel地址获取播主信息
                        url:'https://api.twitch.tv/kraken/channels/'+val+'?client_id=nuauwmfr41xjq0khktqfkjfs58dtr2',
                        type:'get',
                        dataType:'jsonp',
                        success: function(data){//数据获取成功
                            console.log(data.display_name+'666');//控制台测试
                            var temp="<div class='all off'><img class ='img' src="+ data.logo + "><div class = 'text-center text'><a target = '_blank' href ="+ data.url +"><h3>"+ data.name +"</h3></a><p>offline</p></div></div>";//播主的房间logo、直播地址、播主用户名
                            $(".main").append(temp);//网页显示信息
                        },
                        error: function(){//播主关闭了账号或不存在这个用户，显示404
                            alert('404 error');
                        }
                    });
                }
            },
            error: function(){
                alert('error');
            }
        });
    }
    
    for(var i=0;i<user.length;i++){//遍历user数组，在网页显示获取的数据
        getDate(user[i]);
    }
    
    $(".btnall").click(function(){//显示数组中所有用户的状态
        $(".all").show();
    });
    $(".btnon").click(function(){//显示在线用户
        $(".on").show();
        $(".off").hide();
    });
    $(".btnoff").click(function(){//显示离线用户
        $(".off").show();
        $(".on").hide();
    });
    $(".btnsearch").click(function(){  //搜索用户。参考：https://www.freecodecamp.cn/liuboaibc
        var txt=$("#txt").val();  
        if(txt != ""){  
          $(".all").hide().filter(":contains('"+txt+"')").show();
        }
      });
  });