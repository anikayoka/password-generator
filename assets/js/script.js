
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!#$%&()*+-./<=>?@^~";

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// add password length criteria
function generatePassword() {
  var passwordLength = parseInt(prompt("How many characters would you like your password to contain?"));
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength);

    // add confirmation of character criteria
    var acceptSpecial = confirm("Click OK to confirm including special characters");
    var acceptLowercase = confirm("Click OK to confirm including lowercase characters");
    var acceptUppercase = confirm("Click OK to confirm including uppercase characters");
    var acceptNumeric = confirm("Click OK to confirm including numeric characters");
    
    if (!acceptSpecial && !acceptLowercase && !acceptUppercase && !acceptNumeric) {
      return ("Password must contain at least one selection to generate a strong password");
    }

    // add valid character acceptance
    var validCharacters = []
    if (acceptSpecial) {
      validCharacters += special;
    }
    if (acceptLowercase) {
      validCharacters += lowercase;
    }
    if (acceptUppercase) {
      validCharacters += uppercase;
    }
    if (acceptNumeric) {
      validCharacters += numeric;
    }

    // add password loop to randomly select
    var password = ""
    for (let i = 0; i < passwordLength; i++) {
      var index = Math.floor(Math.random() * validCharacters.length);
      password += validCharacters[index];
    }
    console.log(password);
    return password;

  } else {
    return "Invalid length, password must be at least 8 but no more than 128 characters in length."
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
