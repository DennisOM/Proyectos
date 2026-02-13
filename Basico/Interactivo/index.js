const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Cual es tu nombre?\n', (nombre) => {
  console.log(`Hola ${nombre} para cuando un smash?`);
  rl.close();
});