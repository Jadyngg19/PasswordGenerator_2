// Assignment code here
// Define arrays of characters to use in password generation
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "0123456789";
var symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-="; 

// Get references to the #generate element and the #password element
var generateBtn = document.querySelector("#generate"); 
var passwordText = document.querySelector("#password");

generateBtn.addEventListener("click", function() {
  // Initialize variables
  var password = "";
  var charSet = "";
  var includeLowercase = prompt("Do you wish to include lowercase letters?");
  var includeUppercase = prompt("Do you wish to include uppercase letters?");
  var includeNumbers = prompt("Do you wish to include numbers?");
  var includeSymbols = prompt("Do you wish to include symbols?");

  // Build character set based on user input
  if (includeLowercase.toLowerCase() !== "no") {
    charSet += lowercaseChars;
  }
  if (includeUppercase.toLowerCase() !== "no") {
    charSet += uppercaseChars;
  }
  if (includeNumbers.toLowerCase() !== "no") {
    charSet += numberChars;
  }
  if (includeSymbols.toLowerCase() !== "no") {
    charSet += symbolChars;
  }

  // Validate that at least one character set was included
  if (charSet === "") {
    alert("You must include at least one character set (lowercase letters, uppercase letters, numbers, or symbols).");
    return; // Input is invalid, so return nothing
  }

  // Prompt user for password length and validate input
  var passwordLength = prompt("Enter the desired length of your password (must be between 8 and 128 characters):");
  if (passwordLength === null) {
    return; // User clicked "Cancel", so return nothing
  }
  passwordLength = parseInt(passwordLength);
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return; // Input is invalid, so return nothing
  }

  // Generate password by randomly selecting characters from character set
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet.charAt(randomIndex);
  }

  passwordText.value = password; 
});
