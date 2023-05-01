function myFunction() {
    var string = document.getElementById("CommentCheker").value;
    var answerStr = "";
    if (string.charAt(0) == '/' && string.charAt(1) == '/')
        answerStr = "Your string is single Line comment"
    else if (string.charAt(0) == '/' && string.charAt(1) == '*'){
        if (string.charAt(string.length - 2) == '*' && string.charAt(string.length - 1) == '/')
            answerStr = "Your string is multiple line comment."
    } else
        answerStr = "Your String is not a Comment"
    document.getElementById("answer").innerHTML = answerStr;
}