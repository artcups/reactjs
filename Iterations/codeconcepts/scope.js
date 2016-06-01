var a = 1;

function() {
	var b = 2;
}

//This will not be found, not in same scope
console.log(b);

var a = 1;
//Block scooping, let. Let is redifined every iterration. and is undefined outside the loop, it gets destroyed
for(20) {
	let b = 2 //let is the new var
}
console.log(b); //Bothing there

const a = 1;

//Use const for everthing 
//Block scooping, const for everything and if you have to change a value use let.
if(true) {
	const bar = 2; //cannot be changed and is not defined outside the if statement.
	const barObj = { a: 1}; 
	barObj.a = 2; //This can be done but barObj = bar is impossible

}
console.log(bar); //not defined