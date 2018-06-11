//1.) create an array of Words, a right array, a wrong array
var rightArray = [];
var wrongArray = [];
var underScore = [];
var Words = ["jump", "apple", "airplane", "chicago", "green"];
var randomWords = Math.floor(Math.random() * Words.length);
var chosenWord = Words[randomWords];
console.log(chosenWord);


//2.) chose word randomly Hint => use Math.floor, and Math.random and store that in a variable. Then equate that variable with  an array thatstores words in that you created in 1, put all of that in to a function so that it can be called when u need to generate a random word (say at the begining of the game


let docUnderScore = document.getElementsByClassName('underscore');
let docRightGuess = document.getElementsByClassName('rightguess');
let docWrongGuess = document.getElementsByClassName('wrongguess');



//};

//3.) create underscores based on length of word,   Hint => create an empty array that will store underscores based on the chosen word and then use a for loop to go through the 
//    chosen word array that was declaed in 2 and .push '_' into the underscore array based on how many letters are in the chosen word. Then 'return' that array.Wrap that in 
//function.

 //for(var i = 0; i < newWord.length; i++){underscore.push("_");}
 



 let generateUnderscore = () => { //I dont really understand this sythax :generateUnderscore = () => Is the () mean that until the function is run this is undefined?
	 for(let i = 0; i < chosenWord.length; i++){
		 underScore.push("_");
		 docUnderScore[0].innerHTML = underScore.join(' ');//so i understand that docUnderScore the variable is joined to the DOM class underscore
	 }
	 return underScore;	 
 }
 
 //Use DOM manipulation to add the underscores to the HTML document
 
 //This will be inserted in to the function above
 




//4.) get user guess    Hint =>use addEventListener keypress, use (event) as the second argument passed in to the addEventListener function. 
//   Then create a variable insie that function that = event.keycode Then convert what was eneterd in to a string and store that in another variable

//document.addEventListener("keypress", event(){ this is the way I had it,



document.addEventListener('keypress', (event) => {
	let keyword = String.fromCharCode(event.keyCode);
	
	if (chosenWord.indexOf(keyword) > -1){
			rightArray.push(keyword);
			//replace underscore with right letter
			underScore[chosenWord.indexOf(keyword)]=keyword;
            docUnderScore[0].innerHTML = underScore.join(' ');
            docRightGuess[0].innerHTML = rightArray;
    }
			if(underScore.join(' ') == chosenWord){
				alert('You Win!');
	}else{
			wrongArray.push(keyword);
			docWrongGuess[0].innerHTML = wrongArray;
	}
});


[0].innerHTML = generateUnderscore().join(' ');






//5.) check if guess is right, if right push to right array, if wrong push to wrong array    Hint => use indexOf (It tells you if the string you are looking for exists in an array and if it does it will give you a number greater than -1)
//   put that  in an if statement to check if >-1. If the letter exists than .push that letter in to the right array. If that letter does not exist 
//.push that letter in to the wrong array. This should all be within the function above.
	
		
//6.) replace underscore with right letter Hint => var underScore = []; is an empty array, if inside of the [] you pass in an argument that is dynamic and changes based on teh
//key pressed and set the underScore array equal to keyword it should work.

//7.) if wrong push to wrong array





<!-------------------------------------------------End Function-------------------------------------------------------------------------------->








































