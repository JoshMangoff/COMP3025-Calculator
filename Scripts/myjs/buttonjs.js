$(document).bind('pageinit',function(){

    $("button").bind("click",function(event, ui){
        var clickedButton = $(this).text();
        document.getElementById("display").value 
            = document.getElementById("display").value + clickedButton
    });

});