function vowelsAndConsonants(s) {
    let input = "javascriptloops";
let vowels = "AEIOUaeiou";
let allstrings = "";

for (let i = 0; i < input.length; i++) {
  let char = input[i];
  if (vowels.includes(char)) {
    console.log(char);
  } else if (char.match(/[a-z]/i)) {
    allstrings += char;
  }
}

for (let i = 0; i < allstrings.length; i++) {
  console.log(allstrings[i]);
}
    
}