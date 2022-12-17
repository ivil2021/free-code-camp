function randomRange(myMin, myMax) {
  // Only change code below this line
  let number = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

  if(number => myMin && number <= myMax){
    return number;
  }
  // Only change code above this line
}