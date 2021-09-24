// need to add a javascript variable with lower,uppercase etc shown in the acceptance criteria "hint array string"
// google how to display special variable which can hold more than one value at a time
var lowercaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialChars = ['?', ')', '(', '}', '{', '$', '#', '@', '%', ':', '^', '!', '~', '+', '*'];
// Assignment Code
//search how to generate a button and will need a syntax for your document
var generateBtn = document.querySelector("#generate");
//   what always holds a value and how would you use it for the above code, what should it display
function generatePassword() {

   //line 89 in directions
  var passwordLength = parseInt(prompt("what is your password length?"));
//google what function determines where is a value and a message returns has to be a number rember  password has to be a number
  if(Number.isNaN(passwordLength)) {
      alert("Password length has to be a number!");
      return;
  }
//line 90 is it boole or logical valuean what if its wrong? 
  if (passwordLength < 8 || passwordLength > 128) {
      alert("Invalid password length, please try again");
      return;
  }

// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters adding varialbe and follow istrucions
  var includeNumbers = confirm("Do you want numbers in your passwor?");
  var includeLowercase = confirm("Do you want lowercase letters in your passwor?");
  var includeUppercase = confirm("Do you want uppercase letters in your passwor?");
  var includeSpecialsChars = confirm("Do you want special characters in your passwor?");

  if (includeNumbers === false && includeLowercase === false && includeUppercase === false && includeSpecialsChars === false) {
      alert("Please select at least one character type");
      return;
  }
//create a variable search how to convert string with character array, how do you display an array without a value?
  var fullCharArray = [];
  var minCharArray = [];
//search how to generate random numbers etc that you want to display using your above variable
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
//create variable inlude above array with a function that picks random number and charachers using arithmatic google mozilla w3school
  var shuffled = fullCharArray.sort(function(){return .5 - Math.random()});
  var finalPassword = shuffled.slice(0, passwordLength);
//create a statement creating variables with charcter lentgh how would you achive this, how to create javascript loops with min and max length read directions
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
//password text needs a value of what to beable to generate and move forward
  passwordText.value = password;
}
// how do you listen to something which is its parent and what should happen after will it do something what should it do if yo
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

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
