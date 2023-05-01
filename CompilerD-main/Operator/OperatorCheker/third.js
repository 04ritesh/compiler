function myFunction() {
    var string = document.getElementById("OperatorCheker").value;
    var answerStr = "";
    var ch = string.charAt(0);
    if(string.length==1){
        if (ch == '=')
            answerStr = "Assignment Operator"
        else if (ch == '<')
            answerStr = "Less than Operator"
        else if (ch == '>')
             answerStr = "Greater than Operator"
        else if(ch == '+')
            answerStr = "Plus operator"
        else if(ch=='-')
            answerStr = "substraction operator"
        else if (ch == '*')
            answerStr = 'Multiplication operator'
        else if (ch == '/')
            answerStr = "Division Operator"
        else if (ch == '|')
            answerStr = 'Bitwise Or Operator'
        else if (ch == '&')
            answerStr == "Bitwise And Opreator"
        else
            answerStr == "Not a valid Operator"
    } else if (string.length == 2) {
        c = string.charAt(1);
        if (ch == '>' && c == '=')
            answerStr = "Greater than equal to Operator"
        else if (ch == '<' && c == '=')
            answerStr = "Less the equal to Operator"
        else if (ch == '|' && c == '|')
            answerStr = "Or operator"
        else if (ch == '&' && c == '&')
            answerStr = "And Operator"
        else if (ch == '=' && c == '=')
            answerStr = "Equal to Operator"
        else
            answerStr = "Not a valid Operator"
    } else
        answerStr = "Not a Operator"
    document.getElementById("answer").innerHTML = answerStr;
}