// Display the initial message to the user
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Handle the input from the user
process.stdin.on('data', (data) => {
  // Display the user's name
  process.stdout.write(`Your name is: ${data.toString().trim()}\n`);
  // Display the closing message
  process.stdout.write('This important software is now closing\n');
  // Exit the process
  process.exit();
});
