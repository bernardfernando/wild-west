function survive(request, response) {
  // dosome thing
  const scenarios = [
    "You made it to the saloon. Congrats",
    "You dided of disentery",
    "A sanake gotcha!",
    "Your horse made .....you didn 't",
    "You found gold",
    "You found oil",
    "You didn't even attemp to cross the Oregon trail",
  ];

  const randomNum = Math.floor(Math.random() * scenarios.length);
  const outcome = scenarios[randomNum];
  response.json(outcome);
}
module.exports = survive;
