const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display the initial message to the user
console.log('Welcome to Holberton School, what is your name?');

// Handle the input from the user
rl.on('line', (input) => {
  // Display the user's name
  console.log(`Your name is: ${input}`);
});

// Handle the close event
rl.on('close', () => {
  // Display the closing message
  console.log('This important software is now closing');
});

// Handle the SIGINT event (Ctrl+C)
process.on('SIGINT', () => {
  rl.close();
});
