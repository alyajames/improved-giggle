let nouns = ["keyboard", "eggs florentine", "acrylic"];
let verbs = ["formulate", "mambo", "jiggle"];
let adjectives = ["with gusto", "harmoniously", "sneakily"];

let noun = nouns[Math.floor(Math.random() * nouns.length)];
let verb = verbs[Math.floor(Math.random() * verbs.length)];
let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

console.log(
  `My ${noun} dances ${adjective} when I ${verb} a jello in the bathroom:`
);