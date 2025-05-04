// receive the word from the request
// getElementById

// Create a simple web application
// Use http to create the server and fs to read your html file.
// palindrome

// HTML element with the id="checkBtn"
document.getElementById('checkBtn').addEventListener('click', function() {
  const word = document.getElementById('wordInput').value.toLowerCase().replace(/[^a-z0-9]/gi, '');
  const reversed = word.split('').reverse().join('');
  const result = document.getElementById('result');


  // check to see if input is empty, if the word is the same backwards, 
  if (word === '') {
    result.textContent = 'Please enter a word.';
  } else if (word === reversed) {
    result.textContent = 'Yes, its a palindrome!';
  } else {
    result.textContent = 'No, that is not a palindrome.';
  }
});