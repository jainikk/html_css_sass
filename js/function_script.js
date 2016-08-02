var object={
	username:''
}


function AnimalTestUser(username){
	console.log(arguments.length);
	object.username=username;
	return object;

}
var testSheep = AnimalTestUser('CottonBall');
console.log(testSheep);

