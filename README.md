# Random Password Generator 
## Features
This program allows users to choose 4 different types of characters to be in their password. They have the option of utilizing numbers, special characters, lower case letters, and upper case letters. The user also chooses the length. With this information, the Random Password Generator creates a password following the guidelines of the user input. 
## Code Example

function generatePassword(){
  var final = "";
for (i=0; i<characters; i++){
  var random= Math.floor(Math.random() * emptyArray.length);
  final += emptyArray[random]
  }
return final;
}

## Authors
Isha Khosla