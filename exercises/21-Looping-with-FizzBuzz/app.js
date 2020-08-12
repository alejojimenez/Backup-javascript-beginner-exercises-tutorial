function fizzBuzz() {  

    for (var i = 1; i <= 100; i++) {
 
        const x = 0;
        switch(x) {
            case (i % 3 || i % 5): 
                console.log('fizzbuzz');
				break;
            case i % 3: 
                console.log('fizz');
				break;
            case i % 5: 
                console.log('buzz');
				break;
            default: 
                console.log(i);
		}
    
    }            
 
    return;

}

fizzBuzz();