$(document).ready(function(){
    var html = '';
    var arr = [];//输出数据
    function Result(title,snippet) {
        this.title = title;
        this.snippet = snippet;
      }

      function search(){
    $.ajax({
      url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + $('#content').val(),
      dataType: 'jsonp',
      type: 'POST',
      headers: { 'Api-User-Agent': 'Example/1.0' },
      success: function(data) {
        $('.results').empty();
        arr.length = 0;
        var rArr = data.query.search; //接收到的数据
        for (var result in rArr){
          // arr.push(new Result(rArr[result].title,rArr[result].snippet));
          html = '<div id="articles" class="well"><a href="https://en.wikipedia.org/wiki/' + rArr[result].title + '"target="_blank"><h3>' + rArr[result].title + '</h3><p>' + rArr[result].snippet + '</p></a></div>';
          $('.results').append(html);
        }
      }
  
    });
    if ($('#content').val().length > 0) {
      $('.articles').css('display', 'none');
  
    } else if ($('#content').val().length < 1) {
      // display everything again
      $('.articles').css('display', 'block');
    }
  
    // This make things tick with each key stroke
    $('#content').unbind('keyup');
    $('#content').keyup(function() {
      search();
    });
  } 
  $('#content').keyup(function() {
    search();
  });
});