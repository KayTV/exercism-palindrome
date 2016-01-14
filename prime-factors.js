//define the function primeNumbers
function primeFactors (num) {
  //define the variables input which is equal to the function num and factors as an empty array
    var input = num;
    var factors = [];
    //create a for loop in which it starts at 2 and increases according to the input variable
    for (var i = 2; i <= input; i++) {
      //a while loop defined. while the input var has a remainder of 0 and 1, go through the loop
        while(input % i === 0 && input !== 1) {
          //if both arguments are true, push the number in the empty array and input is now equal to
          //input divided by var i
            factors.push(i);
            input = input/i;
        }
    }
    //after loop is done, return the empty array now full of prime numbers
    return factors;
}

module.exports = {
    for : primeFactors
}
