const {writeFileSync,readFileSync} = require('fs');

console.log('start');
const first = readFileSync('./content/inner/file.txt','utf-8');
const second = readFileSync('./content/inner/second.txt','utf-8');

writeFileSync('./content/inner/result-synch.txt',`Here is the result: ${first}, ${second}`);
console.log('Done with this task.')
console.log('Starting the next one.');