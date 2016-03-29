//Inside module (before);
module.exports.foo = function(){

};

module.exports.bar = function() {

};

//Inside module (now)
export  var foo = 3;
export function bar(){

}

export default {
	//blabla
}



//inside other file (before)
var myModule = require("myModule");
var foo = myModule.foo;

//now
import myModule from "myModule";

import { foo as foolish, bar } from "myModule";
import { each, omit } from "lodash";

console.log(foolish); //3

//Use destrcuturing to only get the things you need from module.