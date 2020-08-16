const sing = () => {

    var concatenate = "";
    var string_1 = [];
    var text = "let it be";
    for (var i = 0; i < 4; i++) {
        string_1 += text + ", ";
    }
    concatenate = string_1 + "words of wisdom, ";

    var string_2 = [];
    var text = "let it be";
    for (var i = 0; i < 5; i++) {
        string_2 += text + ", ";
    }
    concatenate = concatenate + string_2 + "there will be an answer, " + text;
    
    return concatenate;

}

//Your code above ^^^
console.log(sing());