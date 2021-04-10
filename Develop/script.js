// Assignment Code

var generateBtn = document.querySelector("#generate");

function generatePassword() {
 


var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
var character = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];


var charNumber = prompt(
  "How many characters would you like in your password? 8-28"
);
var lowerCase = confirm(
  "Would you like lower case characters in your password?"
);
var upperCase = confirm(
  "Would you like upper case characters in your password?"
);
var charSpec = confirm("Would you like special characters in your password?");

var results = [];
var user = [];

if (charNumber){
results = results.concat(number);
}

if (lowerCase){
  results = results.concat(lowerCase);
}

if (upperCase){
  results = results.concat(upperCase);
}

if (charSpec) {
  results = results.concat(character);
}
console.log(results);

for (var i = 0; i < charNumber; i++) {
  user.push(results[Math.floor(Math.random() * results.length)]); 
}
return user.join("");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);