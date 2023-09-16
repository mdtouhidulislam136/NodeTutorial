// Globals - No window

// _dirname - path to the current directory
// _filename - file name
// require - function to use modules (CommonJs)
// module - info about current module (file)
// process - info about env where the program is executed

// all things above globally available

console.log(__filename);
console.log(__dirname);
console.log(require);
console.log(module);
console.log(process);

setInterval(() => {
  console.log("Hello World");
}, 1000);
