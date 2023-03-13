var characterLength = 8;
var choiceArray = [];

var specialArray = ['~','!','@','#','$','%','^','&','*','(',')','_','-','=','+','?','<','>','{','}'];
var lowerArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArray = ['1','2','3','4','5','6','7','8','9','0'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); 
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordTest.value = "";
  }
}

function generatePassword () {
  var password = "";
  for (var i = 0; i < characterLength; i++){
    var randomIndex = Math.floor(Math.random() * choiceArray.length)
    password = password + choiceArray[randomIndex];
    }
  return password;
}

function getPrompts(){
  choiceArray =[];
  characterLength = parseInt(prompt("How many characters do you want your password to be? 8-128 Characters"))

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be between 8 - 128 digits. Please try again.");
    return false;
}

if (confirm("would you like lowercase letters in your password?")) {
  choiceArray = choiceArray.concat(lowerArray);
}
if (confirm("would you like uppercase letters in your password?")) {
  choiceArray = choiceArray.concat(upperArray);
}
if (confirm("would you like special characters in your password?")) {
  choiceArray = choiceArray.concat(specialArray);
}
if (confirm("would you like numbers in your password?")) {
  choiceArray = choiceArray.concat(numberArray);
}
  return true;
}