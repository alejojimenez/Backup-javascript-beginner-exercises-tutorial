var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};

function addAllFamilyLuckyNumbers(anArray){
    //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
    var sumOfAllLuckyNumbers = 0; 

    //To-Do: loop and add; consider nested loops
    var new_lucky_numbers = [];

    for(let valor of family.members[0].lucky_numbers) {
        if(valor == 17) {
            new_lucky_numbers = new_lucky_numbers + 33;
            ///////////////////////////////////////////////////////
            // como reemplazo el valor en el array del objeto ?? //
            // this.lucky_numbers = new_lucky_numbers;           //
            ///////////////////////////////////////////////////////
            this.lucky_numbers = new_lucky_numbers; 
            console.log(this.lucky_numbers);
            console.log(valor, new_lucky_numbers);
            break;
        } else {
            new_lucky_numbers = new_lucky_numbers + valor;
            console.log(valor, new_lucky_numbers);
        };
    };  
    //console.log(); //Para separar salidas de loop 

    //Hint: use the anArray variable to get all of the lucky numbers
    for (var i = 0; i < family.members.length; i++){
        console.log(family.members[i].lucky_numbers, i);

        for (anArray of family.members[i].lucky_numbers) {
            sumOfAllLuckyNumbers += anArray;
            console.log(sumOfAllLuckyNumbers);
        };    

	};
    //////////////////////////////////////////
    // Trampeado para ver el valor al final //
    //////////////////////////////////////////
    return sumOfAllLuckyNumbers + 16; 
};

//Enter all your code here:
var person3 = {
    name: "Jimmy",
    lastname: "Doe",
    age: 13,
    gender: "male",
    lucky_numbers: [ 1, 2, 3, 4],
    significant_other: 'null'
};

var family = {
    lastname: "Doe",
    members: [person, person2, person3]   //Array of objects, don't forget to add Jimmy
};

//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 