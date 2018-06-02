$(document).ready(function(){
    $("#send").click(
        function(){
        var x = 60;       
        var y = 0;
        var rand = parseInt(Math.random() * (x - y + 1) + y);      
        $("#b").html("").append("" + rand + "");    
        var txt=$("<span></span>").text($("#danmu").val());
        $(".display").prepend(txt);
        $("#danmu").val(""); 
        $("span:first-child").css("top",Math.random()*450)
        $("span:first-child").animate({left:'-15%'},10000,'linear');
    });
    $("#clear").click(function(){
        $(".display").empty();
    });
});