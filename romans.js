
// We did some stuff for you! Don't worry too much about it.
document.onreadystatechange = function() {
  var form = document.querySelector('.input-form')
  form.addEventListener('submit',printConvertedValue,false)
}

// play in the console
var printConvertedValue = function(event) {
  event.preventDefault()
  var number = this.number.value
  var outputDiv = document.querySelector('.output')
  outputDiv.innerText = numeralConverter(number)
}




// numeralConverter takes a string that looks like a number as an input, e.g. '111'.
// numeralConverter should output a string of characters corresponds to a Roman Numeral, e.g. 'XXVI'
var numeralConverter = function(numString) {
  // your code goes here!
}