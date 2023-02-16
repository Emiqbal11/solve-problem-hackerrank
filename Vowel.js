function vowelsAndConsonants(s) {
    let vowels = 'aeiouAEIOU';
    let allstring = '';
  
    // Print each vowel in s on a new line
    for (let i = 0; i < s.length; i++) {
      if (vowels.includes(s[i])) {
        console.log(s[i]);
      } else if (s[i].match(/[a-zA-Z]/)) {
        allstring += s[i];
      }
    }
  
    // Print each consonant in s on a new line
    for (let i = 0; i < allstring.length; i++) {
      console.log(allstring[i]);
    }
    
}