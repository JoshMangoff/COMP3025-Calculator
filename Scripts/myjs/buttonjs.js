$(document).bind('pageinit',function(){

    var invisibleNum = 0;
    var operator = "=";
    var nextNum = true;

    $("button").bind("click",function(event, ui){
        var visibleNum = document.getElementById("display").value;
        var pressedButton = $(this).text();
        
        if (visibleNum == "AC") {
            nextNum = true;
            visibleNum = 0;
            invisibleNum = 0;
            operator = "=";
            document.getElementById("display").value = visibleNum;
        }
        else if (visibleNum == /*operators*/) {
            if (operator != "=") {
                //calcs
            }
            nextNum = true;
            invisibleNum = visibleNum;
        }
        else {
            if (nextNum) {
                visibleNum = "";
                nextNum = false;
            }
            document.getElementById("display").value 
                = visibleNum + pressedButton
        }
    });

});