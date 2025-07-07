// 1. Read a string from the user
let input = prompt("Enter a string:");

// 2. Find the length of the string
console.log("Length of the string:", input.length);

// 3. Extract the word “JavaScript” using substring() or slice()
let extracted = input.substring(input.indexOf("JavaScript"), input.indexOf("JavaScript") + "JavaScript".length);
console.log("Extracted word:", extracted);

// 4. Replace one word with another word
let replaced = input.replace("JavaScript", "TypeScript");
console.log("After replacing:", replaced);

// 5. Function to check if a string is a palindrome
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  let cleanStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let reversed = cleanStr.split('').reverse().join('');
  return cleanStr === reversed;
}

// 6. Check if the input is a palindrome
console.log("Is the original input a palindrome?", isPalindrome(input));
