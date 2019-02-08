const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

// reader.question("What is your name? ", function (answer) {
//   console.log(`Hello ${answer}!`);

//   reader.close();
// });

// window.setTimeout(function() {
//   alert('HAMMERTIME');
// }, 5000);

// hammerTime = function(time) {
//   window.setTimeout(function() {
//     alert(`${time} is HAMMERTIME!`);
//   }, time);
// };
