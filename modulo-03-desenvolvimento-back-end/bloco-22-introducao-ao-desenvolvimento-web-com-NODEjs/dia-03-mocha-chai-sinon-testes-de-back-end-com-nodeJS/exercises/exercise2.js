function typeOfTheNumber(number) {
  if (number > 0) return 'Positive';
  if (number === 0) return 'Neutral';
  if (number < 0) return 'Negative';
}

module.exports = typeOfTheNumber;