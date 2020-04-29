//UTILS functions and helpers

//get random array item
exports.getRandomItem = (list) => {
  return list[Math.floor(Math.random() * list.length)];
}

//static colors list
//color JSON from https://jonasjacek.github.io/colors/
exports.COLORS = require('./colors.json');
