$(document).ready(function(){
  var html = '';
  function search(){
  $.ajax({//通过ajax get方式从wiki获取数据
    url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + $('#content').val(),
    dataType: 'jsonp',
    type: 'get',
    headers: { 'Api-User-Agent': 'Example/1.0' },
    success: function(data) {//获取数据成功，将标题、简介、和时间依次显示
      $('.results').empty();
      var res = data.query.search; //接收到的数据
      for (var i=0;i<res.length;i++){
      
        html = '<div class="disp"><a href="https://en.wikipedia.org/wiki/' + res[i].title + '"target="_blank"><h3>' + res[i].title + '</h3></a><p>' + res[i].snippet + '</p><p>'+res[i].timestamp+'</p></div>';//标题、简介、和时间依次显示
        $('.results').append(html);//将结果显示到网页上
      }
    },
    error: function(){//获取数据失败，弹出提示框
      alert('error');
    }
  });
}
  $("#btns").click(function () {//点击按钮搜索输入框里的内容
    search();
  });
});