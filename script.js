var lowercaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialChars = ['?', ')', '(', '}', '{', '$', '#', '@', '%', ':', '^', '!', '~', '+', '*'];
// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  
  var passwordLength = parseInt(prompt("what is your password length?"));

  if(Number.isNaN(passwordLength)) {
      alert("Password length has to be a number!");
      return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
      alert("Invalid password length, please try again");
      return;
  }

  var includeNumbers = confirm("Do you want numbers in your passwor?");
  var includeLowercase = confirm("Do you want lowercase letters in your passwor?");
  var includeUppercase = confirm("Do you want uppercase letters in your passwor?");
  var includeSpecialsChars = confirm("Do you want special characters in your passwor?");

  if (includeNumbers === false && includeLowercase === false && includeUppercase === false && includeSpecialsChars === false) {
      alert("Please select at least one character type");
      return;
  }

  var fullCharArray = [];
  var minCharArray = [];

  if (includeNumbers) {
      fullCharArray = fullCharArray.concat(numChars);
      minCharArray.push(numChars[Math.floor(Math.random() * numChars.length)]);
  }

  if (includeLowercase) {
      fullCharArray = fullCharArray.concat(lowercaseChars);
      minCharArray.push(lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)]);
  }

  if (includeUppercase) {
      fullCharArray = fullCharArray.concat(uppercaseChars);
      minCharArray.push(uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)]);
  }

  if (includeSpecialsChars) {
      fullCharArray = fullCharArray.concat(specialChars);
      minCharArray.push(specialChars[Math.floor(Math.random() * specialChars.length)]);
  }

  var shuffled = fullCharArray.sort(function(){return .5 - Math.random()});
  var finalPassword = shuffled.slice(0, passwordLength);

  for (var i = 0; i < minCharArray.length; i++) {
      finalPassword[i] = minCharArray[i];
  }
  
  
  // need to create and give password then give it a return prompt
    var password = finalPassword.join('');
    return password;
   
}

// need a function to write password, create passwrd to generate password 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// //GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password

// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
