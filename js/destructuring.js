//Destructuring

var foo = {
	bar: 1,
	baz: 2
}

var { bar, baz } = foo;
//bar == foo.bar and baz = foo.baz

var tenses = ["me", "you", "he"];
var [ firstPerson ] = tenses;
//firstPerson == "me"

var foo = 2;

var obj = {
	bar: 1,
	foo,
};

//obj.foo == foo == 2

var name = "Seb";
var age = 28;

some.method({ name, age })
// {
//	name: name,
//	age: age
//}

//Crate your own keys
var name = "Seb";
var obj = {
	["name" + name]: "some value"
}

//Same as 
var obj = {};
obj["name"+name] = "some value";


//destructuring arguments so the values will be matched on the argument name and the order no longer matter.

function calcBmi({ weight, height, max = 25, callback }) {
	var bmi = weight / Math.pow(height, 2);	
	if(bmi > 25) {
		console.log("You're overweight");
	}
	if(callback) {
		callback(bmi);
	}
};

calcBmi({weight, height, max: 25})
calcBmi({ weight, height, callback: function() {} })
