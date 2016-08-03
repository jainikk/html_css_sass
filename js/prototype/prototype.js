//declaring and initializing array
var cars=["audi","bmw","swift","zen","hyundai"]; 
var phones=["android","ios","windows"];                                                 //prototypes[array]

//defining prototype for getting first element of array
Object.defineProperty(Array.prototype,'first',{get:function (){return this[0]}});
console.log(cars.first); //audi
console.log(phones.first); //android

//defining prototype for getting middle element of array
var findmidnumber=["10","20","30","40","50"];
Object.defineProperty(Array.prototype,'midnumber',{get:function (){return this[(this.length-1)/2]}});
console.log(findmidnumber.midnumber); //30


//If the property is not found in rabbit, 
//interpreter uses __proto__ link and searches in animal
var animal={color:"red"};                                                              //protoypes[object]
var rabbit= {jump:"yes"};
rabbit.__proto__=animal
console.log(rabbit.color); //red
console.log(rabbit.__proto__); //animal {color:"red"}
console.log(animal.__proto__); // object	
console.log(animal.__proto__.__proto__); //null


//If the property is found in physiotherapist, 
//then __proto__ is not checked.
var doctor = { checks_up: false };
var physiotherapist= { checks_up: true};
physiotherapist.__proto__ = doctor; 
console.log(physiotherapist.checks_up) // true

//Creates an empty object with given __proto__:
var birds = { eats: true };
pegion = Object.create(birds);
console.log(pegion.eats) // true

//prototypal change example
function human(language){
	this.language=language || 'english';
}
human.prototype.speak=function() {
	console.log(this.language);
}

function man(name,skin){
	human.call(this,'hindi');
	this.name=name;
	this.skin=skin;
}

man.prototype=Object.create(human.prototype);
man.prototype.constructor=man;

var abc=new man('abc','white');
console.log(abc); // man { language:'hindi', name:'abc',skin:'white'}
console.log(abc.__proto__); //human
console.log(abc.__proto__.__proto__);//object
