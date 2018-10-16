function one() {
	var fb;
	for (var i=1; i < 101; i++){
		if ((i % 3 == 0) &&(i % 5 ==0)) fb = "fizzBuzz";
		else if (i % 3 == 0) fb = "Fizz";
		else if (i % 5 == 0) fb = "Buzz";
		else fb = i;
	};
};


function two() {
	var fb;
	for (var i=1; i < 101; i++){
		switch (true) {
    	case (i % 5 === 0 && i % 3 === 0):
        fb = "FizzBuzz";
        break;
    	case i % 3 === 0:
        fb = "Fizz";
        break;
    	case i % 5 === 0:
        fb = "Buzz";
        break;
    	default:
        fb = i;
        break;
        
  		};
	};

};
console.time('else-if:');
one();
console.timeEnd('else-if:');
console.time('Switch:');
two();
console.timeEnd('Switch:');
