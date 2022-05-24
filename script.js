function palindrome_checker() {
  var inputText = document.getElementById("userInput").value;
  var regEx = /[W\_]/g;
  var lowercaseString = inputText.toLowerCase().replace(regEx, "");
  console.log(lowercaseString);
  var reverseLowerCase = lowercaseString.split("").reverse().join("");
  console.log(reverseLowerCase);

  if (lowercaseString == reverseLowerCase) {
    document.getElementById("resultText").innerHTML = reverseLowerCase;
    document.getElementById("palindrome").innerHTML = "Text is a Palindrome:";
    document.getElementById("wrapper").style.backgroundColor = "#28a744";
  } else {
    document.getElementById("resultText").innerHTML = reverseLowerCase;
    document.getElementById("palindrome").innerHTML =
      "Text is not a Palindrome:";
    document.getElementById("wrapper").style.backgroundColor = "#dc3644";
  }
}
