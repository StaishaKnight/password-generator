// Assignment code here
var numberArray =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialArray = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowercaseArray = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var uppercaseArray = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];
// function to generate a random numeric value

//function for chosen array//

//fucntion to get user input//
function promptuser () {
  var passwordlength= prompt ("how long would you like your password to be?")  

  var confirmnumber= confirm ("would you like to use numbers in your password")
  var confirmuppercase= confirm ("would you like to use uppercase letters in your password")
  var confirmlowercase= confirm (" would you like to use lowercase letters in your password")



  var userchoices={
    choicelength: passwordlength,
    choicenumber: confirmnumber,
    choiceuppercase: confirmuppercase,
    choicelowercase: confirmlowercase,

  }
  console.log (userchoices)
  return userchoices
}

//Generate password function to tie user input and random function//


  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = promptuser();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
