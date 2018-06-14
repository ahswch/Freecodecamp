$(document).ready(function() {
    $(".bb").click(function(){
      alert("未显示天气是因为所用天气api不支持跨域，需安装跨域插件才能显示天气，安装地址：https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=zh-CN")
    })
    var lat;
    var lon;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          $(".l").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
          lat = position.coords.latitude;
          lon = position.coords.longitude;
          $.getJSON("http://v.juhe.cn/weather/geo?lon=117.82271199999998&lat=32.891617499999995&format=&dtype=json&key=bf4796cf557b98cd1faa0115aa836025",function(json){
            $(".d").html(json.result.today[ "date_y"]);
            $(".c").html(json.result.today.city);
            $(".de").html(json.result.today.temperature+' '+json.result.today.weather+' '+json.result.today.wind);
            var a ='"'+Object.getOwnPropertyNames(json.result.future)[0]+'"';
          });
         
        });
        
      }

});