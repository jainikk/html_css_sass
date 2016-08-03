var animals=['dog','camel','cat','duck','lion','tiger','wolf'];
var friends=[];
friends.push(animals[0]);
friends.push(animals[1]);
console.log(friends);

var relationships={};
Object.defineProperty(relationships,'friends',{value:friends});
console.log(relationships);

var count=0;
for(var i in relationships)
	count++;
console.log("object length="+count);

var matches=[];
Object.defineProperty(relationships,'matches',{value:matches});
console.log(relationships);

