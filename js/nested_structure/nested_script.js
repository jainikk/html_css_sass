//Create an array named animals for the 
//list of friends' usernames
var animals=['dog','camel','cat','duck','lion','tiger','wolf'];

//Create a variable called friends 
//and assign it to the empty data structure
var friends=[];

//•	Using your animals array, add two usernames to friends
friends.push(animals[0]);
friends.push(animals[1]);
console.log(friends);// friends data structure is an array
// ['dog' , 'camel']

// create relationships empty object
var relationships={};

//•	Add your friends data structure to the 
//relationships object.
Object.defineProperty(relationships,'friends',{value:friends});
// relationships : {friends:['dog','camel']};
console.log(relationships);

//calculating length of object relationships
var count=0;
for(var i in relationships){
	count++;
console.log("object length="+count);}

//•	Create a variable called matches and assign it 
//to an empty array.
var matches=[];

//Add the matches array to the relationships object
Object.defineProperty(relationships,'matches',{value:matches});

//relationships = { friends: ['duck', 'camel'], matches: []}
console.log(relationships);

//•	Using the relationships object, adding two
// usernames 'wolf & 'lion' to matches
relationships.matches.push('wolf','lion');

// matches is populated with lucky animals 'wolf' and 'lion'
//relationships = { friends: ['duck', 'camel'], matches: ['wolf','lion']};
console.log(relationships);

for(j=0;j<animals.length;j++){
	animals[j].push(relationships);
}

console.log(animals);