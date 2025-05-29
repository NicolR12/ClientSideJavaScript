// script.js

const subjects = ["The dog ", "My grandma", "A robot", "The cat", "An alien","Teacher","the bear"];
const verbs = ["ate", "found", "see", "liked", "invented","teach","love"];
const objects = ["a bone", "my assignment", "the sun", "strawberry", "a spaceship","English","Honey"];

function getRandomWord(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function generateStory() {
  const subject = getRandomWord(subjects);
  const verb = getRandomWord(verbs);
  const object = getRandomWord(objects);

  const story = `${subject} ${verb} ${object}.`;
  document.getElementById("story").textContent = story;
}
