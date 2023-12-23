// NODE Version
node -v

//REPL
.help

// Eg:
>node
>.help
>global
>Object.keys(global)

//The global object has a lot of useful properties and methods, and it’s not common to add any to it. However, it is just an object, so we can! Add a property to the global object, eg. global.cat = 'meow!'.

global.cat = 'meow!'
console.log(global.cat)

//Node was designed with server-side web development in mind and has a lot of thoughtful functionality towards that end. At its most simple, however, it provides the ability to run JavaScript programs on our own computers instead of just in the browser’s console or embedded in HTML.

// ************** Running a Program with Node ***************//
let noun1 = 'cat';
let adjective = 'silly';
let noun2 = 'one';
let verb = 'watch tv';
let noun3 = 'bread';

console.log(`The world's first ${noun1} was a very ${adjective} ${noun2} who loved to ${verb} while eating ${noun3} for every meal.`);

// ********** To Get list of Builtin Modules *****************//
>node
>require('modules').builtinModules


// **********  Console Module *****************//
const petsArray = ['dog', 'cat', 'bird', 'monkey'];

// Add console methods below!
console.log(petsArray);
console.table(petsArray);
console.assert(petsArray.length>5);

// OUTPUT:
[ 'dog', 'cat', 'bird', 'monkey' ]
┌─────────┬──────────┐
│ (index) │  Values  │
├─────────┼──────────┤
│    0    │  'dog'   │
│    1    │  'cat'   │
│    2    │  'bird'  │
│    3    │ 'monkey' │
└─────────┴──────────┘
Assertion failed

// *************  Process Module ************** //
let initialMemory = process.memoryUsage().heapUsed;
let word = process.argv[2];

console.log(`Your word is ${word}`)

// Create a new array
let wordArray = [];

// Loop 1000 times, pushing into the array each time 
for (let i = 0; i < 1000; i++){
  wordArray.push(`${word} count: ${i}`)
}
console.log(`Starting memory usage: ${initialMemory}. \nCurrent memory usage: ${process.memoryUsage().heapUsed}. \nAfter using the loop to add elements to the array, the process is using ${process.memoryUsage().heapUsed - initialMemory} more bytes of memory.`)


// ************ OS Module ************** //
const os = require('os');
const server = {
type: os.type(),
architecture: os.arch(),
uptime: os.uptime()
};
console.log(server);

