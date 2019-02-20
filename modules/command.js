const readline = require('readline');

const command = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

module.exports = command;