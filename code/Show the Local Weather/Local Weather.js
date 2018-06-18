$(document).ready(function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          $(".l").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
          lat = position.coords.latitude;
          lon = position.coords.longitude;
      });
      }
      $(".bb").click(function(){
        $.ajax({
          url: "https://v.juhe.cn/weather/geo?lon="+lon+"&lat=" +lat+ "&format=2&key=bf4796cf557b98cd1faa0115aa836025",
          type: "get",
          dataType: "jsonp",
          success: function(json){
            var future = json.result.future;
            $(".d").html(json.result.today.date_y+" "+json.result.today.week);
            $(".c").html(json.result.today.city);
            $(".de").html(json.result.today.temperature+' '+json.result.today.weather+' '+json.result.today.wind);
            for(var i =1;i<4;i++){
            var day = "#day" + i;
            $(day).html("<p>天气:" + future[i].weather + "</p><p>气温:" + future[i].temperature + "</p><p>" + future[i].date + "</p><p>" + future[i].week + "</p>");
            }
          },
          error: function(){
            alert("error 天气数据通过经纬度定位获得，请确保您已允许此网页使用定位权限");
          }
          
        });
    });
});