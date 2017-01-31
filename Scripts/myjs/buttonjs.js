/*
* Josh Mangoff
* Jan 30 2017
* button events for calculator app
*/
$(document).bind('pageinit',function(){

    //variables
    var invisibleNum = 0;
    var operator = "";
    var nextNum = true;

    //function for buttons
    $("button").bind("click",function(event, ui){
        //variables reset every button click
        var visibleNum = document.getElementById("display").value;
        var pressedButton = $(this).text();
        
        //if for what button was clicked
        if (pressedButton == "AC") {
            nextNum = true;
            visibleNum = 0;
            invisibleNum = 0;
            operator = "";
            document.getElementById("display").value = visibleNum;
        }
        else if (pressedButton == "+" | pressedButton == "-"
            | pressedButton == "*" | pressedButton == "/"
            | pressedButton == "=") {

            if (nextNum == false) {
                if (operator == "+") {
                    invisibleNum = invisibleNum + visibleNum;
                    document.getElementById("display").value = invisibleNum;
                }
                else if (operator == "-") {
                    invisibleNum = invisibleNum - visibleNum;
                    document.getElementById("display").value = invisibleNum;
                }
                else if (operator == "*") {
                    invisibleNum = invisibleNum * visibleNum;
                    document.getElementById("display").value = invisibleNum;
                }
                else if (operator == "/") {
                    invisibleNum = invisibleNum / visibleNum;
                    document.getElementById("display").value = invisibleNum;
                }

                if (pressedButton == "=") {
                    operator = pressedButton;
                }
                else if (operator == "") {
                    invisibleNum = visibleNum;
                }
                
                nextNum = true;
            }
            if (pressedButton != "=") {
                operator = pressedButton;
            }

        }
        else {
            if (operator != "=") {

                if (nextNum) {
                    visibleNum = "";
                    nextNum = false;
                }
                document.getElementById("display").value 
                    = visibleNum + pressedButton

            }
        }
    });

});