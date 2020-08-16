// Your code here:
var string_1 = "bottles of milk on the wall";
var string_2 = "bottles of milk";
var string_3 = "Take one down and pass it around";
var string_4 = "No more ";
var string_5 = "Go to the store and buy some more";
var string_6 = "no more ";
var signal_1 = ",";
var signal_2 = ".";
var counter_1 = 98;
var counter_2 = 0;
var concatenate_1 = "";
var concatenate_2 = "";
var concatenate_3 = "Take one down and pass it around";

function bottlesofmilk() {
    while(counter_1 <= 98) {
        if(counter_1 < 1) {
            concatenate_2 = string_4 + string_1 + signal_1 + " " + string_6 + string_2 + signal_2 + " " + string_5 + signal_1 + " 99 " + string_1 + signal_2; 
            console.log(concatenate_2);
            //counter_1 = 0;
            return;
        };
        if(counter_1 > 1) {
            counter_2 = counter_1 - 1;
            concatenate_1 = counter_1 + " " + string_1 + signal_1 + " " + counter_1 + " " + string_2 + signal_2 + " " + string_3 + signal_1 + " " + counter_2 + " " + string_1 + signal_2;
        } else {
            concatenate_1 = counter_1 + " " + string_1 + signal_1 + " " + counter_1 + " " + string_2 + signal_2 + " " + string_3 + signal_1 + " " + string_6 + string_1 + signal_2;
        };
        counter_1 --;
        console.log(concatenate_1);
    };
};

bottlesofmilk();