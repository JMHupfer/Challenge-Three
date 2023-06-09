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
  var truePrompts = getPrompts(); 
  var passText = document.querySelector("#password");

  if (truePrompts) {
    var newPassword = generatePassword();
    passText.value = newPassword;
  } else {
    passTest.value = "";
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
// parseInt() function converts the first argument to a string, parses the string, then returns an integer or NaN (parsing) = analyzing a string of symbols either in natural language
    //computer languages or data structures conforming to the rules of a formal grammar
  characterLength = parseInt(prompt("How many characters do you want your password to be? 8-128 Characters"))
// isNaN is a result of parseInt
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be between 8 - 128 digits. Please try again.");
    return false;
}

if (confirm("Do you want lowercase letters in your password?")) {
  choiceArray = choiceArray.concat(lowerArray);
}
if (confirm("Do you want uppercase letters in your password?")) {
  choiceArray = choiceArray.concat(upperArray);
}
if (confirm("Do you want special characters in your password?")) {
  choiceArray = choiceArray.concat(specialArray);
}
if (confirm("Do you want numbers in your password?")) {
  choiceArray = choiceArray.concat(numberArray);
}
  return true;
}