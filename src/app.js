let pronoun = ["the", "our", "your", "their", "his", "her", "those", "my"];
let adj = [
  "huge",
  "big",
  "massive",
  "great",
  "mackoff",
  "grand",
  "small",
  "ridiculous"
];
let noun = [
  "jogger",
  "racoon",
  "coder",
  "geek",
  "programmer",
  "boffin",
  "nerd",
  "cat"
];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let f = 0; f < noun.length; f++) {
      console.log(`${pronoun[i]}${adj[j]}${noun[f]}.com`);
    }
  }
}
