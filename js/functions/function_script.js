var sample_object={
	username:''
};


//Write a function, AnimalTestUser, that 
//has one string parameter, username. 
//It returns an object with a username property.
function AnimalTestUser(username,hobbies,number){
	console.log(arguments.length); 


//In your AnimalTestUser function, create a check 
//that sees how many arguments are passed.
//If there is more than one argument, create a property, 
//otherArgs that is an array of the remaining arguments. 
	if(arguments.length>1){
		Object.defineProperty(sample_object,'otherArgs',{value:[hobbies,number]});

	}
	sample_object.username=username;
	return sample_object;

}
console.log(sample_object); //sample_object {username: ""};
var testSheep = AnimalTestUser('CottonBall');
console.log(testSheep);//{ username: 'CottonBall' }

//In your AnimalTestUser function, create a check 
//that sees how many arguments are passed.
//If there is more than one argument, create a property, 
//otherArgs that is an array of the remaining arguments. 
var testSheep = AnimalTestUser('CottonBall', {'loves dancing': true}, [1,2,3] );

////{ username: 'CottonBall', 
//otherArgs: [ {'loves dancing': true}, [1,2,3] ] }
console.log(testSheep);

//The animal object should have at least 5 properties: 
//username,species, noises, tagline, and friends. The values
 //should all be strings except noises and friends, which 
 //are arrays
var animal={
	username:'',
	species:'',
	tagline:'',
	noises:[],
	friends:[]
};

//Write a constructor function, AnimalCreator 
//that returns a single animal object. The constructor
// function has 4 parameters: username, species, tagline, 
//and noises. 
function AnimalCreator(username,species,tagline,noises){
	animal.username=username;
	animal.species=species;
	animal.tagline=tagline;
	animal.noises=noises;
	return animal;
}

var sheep = new AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
//      // { username: 'Cloud', 
      //  species: 'sheep', 
      //  tagline: 'You can count on me!', 
      //  noises: ['baahhh', 'arrgg', 'chewchewchew'], 
      //  friends: []
      // }

console.log(sheep);

// addFriend function returning whole object is below
//addFriend that takes an animal object (like the one 
//returned from the AnimalCreator function) and adds 
//another animal object as a friend.

/*function addFriend(animal_object1,animal_object2){
	var animal1=AnimalCreator(animal_object1.username,animal_object1.species,animal_object1.tagline,animal_object1.noises);
	animal1.friends.push(animal_object2);
}*/

var cow={
	username: 'Moo', 
	species: 'cow',
	tagline:'im cow',
	noises:['Moo','low','bawl'],
	friends:[]
	};
/*	addFriend(sheep, cow);
        // { username: 'Cloud', 
        //  species: 'sheep', 
        //  tagline: 'You can count on me!', 
        //  noises: ['baahhh', 'arrgg', 'chewchewchew'], 
        //  friends: [{username: 'Moo', species: 'cow'...}]
        // }

  console.log(sheep);
 */
  var llama={
	  username: 'Zeny',
	  species: 'llama',
	  tagline:'im llama',
	  noises:['humming'],
	  friends:[]
	  };
 /*    addFriend(sheep, llama);
 // { username: 'Cloud', 
        //  species: 'sheep', 
       //  tagline: 'You can count on me!', 
        //  noises: ['baahhh', 'arrgg', 'chewchewchew'], 
        //  friends: [{username: 'Moo', species: 'cow'...}
        , {username: 'Zeny', species: 'llama'...}]
        // }


  console.log(sheep);
  */


  //7.	Change your addFriend function to only add the 
  //username of the friend, not the whole object.
  function addFriend(animal_object1,animal_object2){
	//var animal1=AnimalCreator(animal_object1.username,animal_object1.species,animal_object1.tagline,animal_object1.noises);
//	animal1.friends.push(animal_object2.username); 
	animal_object1.friends.push(animal_object2.username);
    }

	addFriend(sheep, cow);
	        // { username: 'Cloud', 
        //  species: 'sheep', 
        //  tagline: 'You can count on me!', 
        //  noises: ['baahhh', 'arrgg', 'chewchewchew'], 
        //  friends: ['Moo']
        // }

  console.log(sheep);
  
  addFriend(sheep, llama);
  // { username: 'Cloud', 
        //  species: 'sheep', 
        //  tagline: 'You can count on me!', 
        //  noises: ['baahhh', 'arrgg', 'chewchewchew'], 
        //  friends: ['Moo', 'Zeny']
        // }

  console.log(sheep);

//8.	Create a myFarm collection of at least 3 animal objects. 
var myFarm=[];

//Give them some friends using addFriend, too!
addFriend(llama,cow);
addFriend(cow,llama);

myFarm.push(sheep);
myFarm.push(llama);
myFarm.push(cow);


console.log(myFarm);
//myFarm[{username: 'Cloud'...},
//{username: 'Zeny'...},{username: 'CottonBall'...}]


//9.	Create a function, addMatchesArray, that takes 
//a farm (array of animal objects) and adds a new property
// to each animal object called matches that is an empty
// array. 
function addMatchesArray(myFarm){
	for(i=0;i<myFarm.length;i++)
	Object.defineProperty(myFarm[i],'matches',{value:[]});
}

addMatchesArray(myFarm);


//myFarm[0] { username: 'Cloud', 
	        //  species: 'sheep', 
	        //  tagline: 'You can count on me!', 
	        //  noises: ['baahhh', 'arrgg', 'chewchewchew'], 
	        //  friends: ['Moo', 'Zeny'],
	        //  matches: []
        // }

console.log(myFarm[0]);

//myFarm[1] { username: 'Zeny', 
	        //  species: 'llama', 
	        //  tagline: 'Im llama', 
	        //  noises: ['humming'], 
	        //  friends: ['Moo'],
	        //  matches: []
        // }

console.log(myFarm[1]);

//myFarm[2] { username: 'Moo', 
	        //  species: 'cow', 
	        //  tagline: 'Im cow', 
	        //  noises: ['moo', 'low', 'bawl'], 
	        //  friends: ['Zeny'],
	        //  matches: []
        // }

console.log(myFarm[2]);


//17.	Create a function, giveMatches, that takes a farm  
//collection (aka an array of animal objects) that already has a 
//matches property. It selects a name from the friends 
//array and adds it to the matches array. always last element
// has been added
function giveMatches(myFarm){
	for(i=0;i<myFarm.length;i++)
		myFarm[i].matches.push(myFarm[i].friends[myFarm[i].friends.length-1]);
	}
	
giveMatches(myFarm); 
console.log(myFarm[0]); 
// { username: 'Cloud', 
        //  species: 'sheep', 
	        //  tagline: 'You can count on me!', 
	        //  noises: ['baahhh', 'arrgg', 'chewchewchew'], 
	        //  friends: ['Moo', 'Zeny'],
	        //  matches: ['Zeny']
        // }
