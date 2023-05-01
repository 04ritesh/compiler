function myFunction() {
    var string = document.getElementById("IdentifierCheker").value;
    var answerStr = "";
    var ch = string.charAt(0);
    if (!(ch == '_' || (ch >='a' && ch <='z') || (ch >='A' && ch <= 'Z')))
        answerStr = string + " is not a valid Identifier."
    else {
        var check = 0;
        for (var i = 1; i < string.length; i++){
            var c = string.charAt(i);
            if (!(c == '-' || (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9'))){
                answerStr = string + " is not a valid Identifier."
                check = -1;
            }
            if (check == 0)
                answerStr = string + " is a valid Identifier."
        }

    }
    document.getElementById("answer").innerHTML = answerStr;
}