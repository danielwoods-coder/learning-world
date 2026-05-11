const textInput = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");

const rmNon = /[a-zA-Z0-9]/ig;


const isPalindrome = (str) => {
  let arr = str.match(rmNon);
  let str1 = arr.join("").toLowerCase();
  let str2 = [...arr].reverse().join("").toLowerCase()
  return str1 === str2;

};


checkBtn.addEventListener("click", () => {
  if (textInput.value === "") {
     return alert("Please input a value")
  }

  result.textContent = isPalindrome(textInput.value) ? textInput.value + " is a palindrome" : textInput.value + " is not a palindrome";
});

