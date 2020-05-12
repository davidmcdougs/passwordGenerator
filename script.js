// Assignment code here

let length = this.document.getElementById('passLength').value
let upperCase = true
let lowerCase = true
let specialChar = true
let numbers = true

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  if(!upperCase && !lowerCase && !specialChar && !numbers) return alert('you must check at least one of the boxes')
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  let params = getChecks()
  let password = ''
  for(i=0;i<length;i++) {
    password += getChar(params)
  }
  return password
}

function getChecks(){
  let params = []
  if(upperCase) params.push('upper')
  if(lowerCase) params.push('lower')
  if(specialChar) params.push('special')
  if(numbers) params.push('number')
  return params
}

function getChar(paramsArr){
  let charType = paramsArr[Math.floor(Math.random() * paramsArr.length)];
  if(charType == 'upper') return randomUpperCase()
  if(charType == 'lower') return randomLowerCase()
  if(charType == 'special') return randomSpecial()
  if(charType == 'number') return randomNumber()
}

function randomLowerCase(){
  var characters = 'abcdefghijklmnopqrstuvwzyz'
  return characters[Math.floor(Math.random() * characters.length)]
}

function randomUpperCase(){
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return characters[Math.floor(Math.random() * characters.length)]
}

function randomSpecial(){
  var characters = '!@#$%^&*()?!_-'
  return characters[Math.floor(Math.random() * characters.length)]
}

function randomNumber(){
  var characters = '0123456789'
  return characters[Math.floor(Math.random() * characters.length)]
}


function showLength(number){
  length = number
  document.getElementById('lengthVal').innerHTML = number
}

function updateParams(paramName, paramVal) {
  if(paramName == 'upperCase') upperCase = paramVal
  if(paramName == 'lowerCase') lowerCase = paramVal
  if(paramName == 'specialChar') specialChar = paramVal
  if(paramName == 'numbers') numbers = paramVal
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
