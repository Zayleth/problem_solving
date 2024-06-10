/* FIZZ BUZZ
What is the Fizz Buzz game? Fizz Buzz is a classic game used to teach kids about multiples and division.

HOW TO PLAY:

Players sit in a circle.
One player starts counting from 1.
Instead of saying the number, players have to say:
"Fizz" if the number is divisible by 3.
"Buzz" if the number is divisible by 5.
"FizzBuzz" if the number is divisible by BOTH 3 and 5 (which means it's a multiple of 15).
The first player who makes a mistake (saying the wrong number or not saying "Fizz" or "Buzz" when needed) is out.
The game continues until only one player remains, who is the winner.

PSEUDOCODE:

When a user inputs a number
Loop from 1 to the entered number
If the current number is divisible by 3 and 5 then print "FizzBuzz"
If the current number is divisible by 3 then print "Fizz"
If the current number is divisible by 5 then print "Buzz"
Otherwise print the current number

*/

let answer = parseInt(prompt("Enter a number to start playing: "));

for (let i = 1; i <= answer; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    
    } else if (i % 3 === 0) {
        console.log("Fizz");
    
    } else if (i % 5 === 0) {
        console.log("Buzz");
    
    } else {
        console.log(i);
    }
}

