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
