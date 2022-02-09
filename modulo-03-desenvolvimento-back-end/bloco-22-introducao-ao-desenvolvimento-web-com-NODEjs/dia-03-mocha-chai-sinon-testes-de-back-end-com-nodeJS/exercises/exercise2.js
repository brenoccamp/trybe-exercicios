// Exercise 2 - Implementation of the function tested previously in the exercise 1.
function typeOfTheNumber(number) {
  if (number > 0) return 'Positive';
  if (number === 0) return 'Neutral';
  if (number < 0) return 'Negative';
  // Exercise 3 - Add a handling to accept only number in the function typeOfTheNumber.
  if (typeof number !== 'number') return 'The value must be a number!';
}

module.exports = typeOfTheNumber;