$(document).ready(function(){
  var html = '';
  function search(){
  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + $('#content').val(),
    dataType: 'jsonp',
    type: 'get',
    headers: { 'Api-User-Agent': 'Example/1.0' },
    success: function(data) {
      $('.results').empty();
      var res = data.query.search; //接收到的数据
      for (var i=0;i<res.length;i++){
      
        html = '<div class="disp"><a href="https://en.wikipedia.org/wiki/' + res[i].title + '"target="_blank"><h3>' + res[i].title + '</h3></a><p>' + res[i].snippet + '</p><p>'+res[i].timestamp+'</p></div>';
        $('.results').append(html);
      }
    },
    error: function(){
      alert('error');
    }
  });
}
  $("#btns").click(function () {
    search();
  });
});