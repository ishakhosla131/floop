
//my Stuff  
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var letter = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
var upperCase = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]

//User inputs saved in variables
var characters = prompt("How many characters would you like your password to be? Enter value between 8 and 128")
if (characters > 128 || characters < 8) {
  alert("what you have entered is not between 8 and 128");
} else {
  var userNumber = confirm("Do you want numbers in your password?");
  var userSpecial = confirm("Do you want special characters?");
  var userLetter = confirm("Would you like letters?");
  var userUpper = confirm("And upper case letters?");
};
var emptyArray = []
//conditionals 
//if four are true 
if (userNumber === true && userSpecial === true && userLetter === true && userUpper === true) {
  emptyArray = number.concat(special, letter, upperCase)
} //if three are true 
else if (userNumber === true && userSpecial === true && userLetter === true) {
  emptyArray = number.concat(special, letter)
} else if (userNumber === true && userSpecial === true && userUpper === true) {
  emptyArray = number.concat(special, upperCase)
} else if (userNumber === true && userLetter === true && userUpper === true) {
  emptyArray = number.concat(upperCase, letter)
} else if (userSpecial === true && userLetter === true && userUpper === true) {
  emptyArray = special.concat(letter, upperCase)
} //if two are true 
else if (userNumber === true && userSpecial === true) {
  emptyArray = number.concat(special)
} else if (userNumber === true && userLetter === true) {
  emptyArray = number.concat(letter)
} else if (userNumber === true && userUpper === true) {
  emptyArray = number.concat(upperCase)
} else if (userSpecial === true && userLetter === true) {
  emptyArray = special.concat(letter)
}
else if (userSpecial === true && userUpper === true) {
  emptyArray = special.concat(upperCase)
}
else if (userLetter === true && userUpper === true) {
  emptyArray = letter.concat(upperCase)
}//if one is true 
else if (userNumber === true) {
  emptyArray = number
}
else if (userSpecial === true) {
  emptyArray = special
}
else if (userLetter === true) {
  emptyArray = letter
}
else if (userUpper === true) {
  emptyArray = upperCase
} //if nothing is picked
else {
  alert("I need something to work with")
}

//for loop creating password 
function generatePassword(){
  var final = "";
for (i=0; i<characters; i++){
  var random= Math.floor(Math.random() * emptyArray.length);
  final += emptyArray[random]
  }
return final;
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
