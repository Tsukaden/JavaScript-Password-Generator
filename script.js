// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase=["ABCDEFHIJKLMNOPQRSTUVWXYZ"]
var lowerCase=["abcdefghijklmnopqrstuvwxyz"]
var specialCharacters=["!#$%&'\"()*+,-./:;<=>?@[\]^_`{|}~]"];

var numb = ["0123456789"];

function generatePassword() {
  var passChar = parseInt(prompt("How many charecters would you like in your password?"));
  var genPass = "";
  if (passChar < 8) {
    alert("You need to have 8 or more charecters in your password");
    return null;
  };

  if (passChar > 128) {
    alert("You need to have 128 or less charecters in your password");
    return null;
  };

  if (isNaN(passChar)) {
    alert("you need to input a number!!")
    return null;
  };

  var wantLow = confirm("Click the OK if you want lowercase in your password");

  var wantUpper = confirm("Click the OK if you want uppercase in your password");

  var wantNumb = confirm("Click the OK if you want numbers in your password");

  var wantSpecial = confirm("Click the OK if you want special charecters in your password");

  var userWant = [];

  if (wantLow) {
    userWant += lowerCase;
  }

  if (wantUpper) {
    userWant += upperCase;
  }

  if (wantNumb) {
    userWant += numb;
  }

  if (wantSpecial) {
    userWant += specialCharacters;
  }

  if (wantLow === false && wantNumb === false && wantSpecial === false && wantUpper == false) {
    alert("select OK for one of the selections")
    return null;
  };

  for (let i = 0; i < passChar; i++) {
    genPass += userWant.charAt(Math.floor(Math.random() * userWant.length));
  }

  console.log(genPass);
  console.log(userWant);
  return genPass;
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return passwordText.value;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
