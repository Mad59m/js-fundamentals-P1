function exercise13() {
  // Exercise 13
  //
  // The Fibonacci sequence is a sequence of numbers where every value is the sum
  // of the previous 2 values.
  // It looks like this:
  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
  //
  // Why?
  // 13 + 21 = 34
  // 8 + 13 = 21
  // 5 + 8 = 13
  //
  // Every number in the sequence is the result of adding the two numbers to
  // the left. The sequence starts with "0, 1", and every number beyond that
  // can be calculated by adding the previous 2 numbers.
  //
  // Write a program which calculates the 50th number in the fibonacci sequence
  // (The numbers get big quickly!)
  //
  // Write code between the lines (below)
  // 
let first=0;
let second=1;
let number=0;

for(let i=3; i<=50; i++)
{
  number=first+second;
  first=second;
  second=number;
}
console.log(number);
//
var i;
var fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 50; i++) {
  // Next fibonacci number = previous + one before previous
fib[i] = fib[i - 2] + fib[i - 1];
console.log(fib[i]);
}
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-13

module.exports = exercise13;
