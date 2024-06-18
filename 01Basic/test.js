console.log("Hello How Are You");
// write function for creating random Numbers
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;         
}
console.log(getRandomNumber(5,9)); // it will generate a number between