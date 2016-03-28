//Arrow functions

var foo = function(){
	return a + b;
}
 //same as

var foo = (a, b) => {
	return a + b;
}

do.something(function(a, b){
return a + b;
})
//Same as
do.something((a, b) => {return a + b; });
//And if oneliner
do.something(a => a++);

[0, 1, 2].map(val => val++); // [1, 2, 3]


// function binding
var module = {
	age: 30,
	foo: function(){
		console.log(this.age);
	}
}

module.foo(); //30

var module = {
	age: 30,
	foo: function(){
		setTimeout(function(){
			console.log(this.age); //Doesent work, we are in new scope
		}, 100)
	}
}

module.foo(); //30

module.foo(); //30

var module = {
	age: 30,
	foo: function(){
		setTimeout(() => {
			console.log(this.age); //With arrow function this automaticly bild to module
		}, 100)
	}
}

module.foo(); //30