function generateRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  
module.exports = generateRandomNumber;