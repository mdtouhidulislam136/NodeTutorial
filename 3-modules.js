// Module
// CommonJS, every file is modulw (by default)
// Modules - Encapsulated Code (only share minimum)

// sayHi("Bangladesh");
// sayHi(finland);
// sayHi(sweden);

const { symlink } = require("fs");
const names = require("./4-names");
const sayHi = require("./5-utils");
const items = require("./6-alternative-flavour");
require("./7-mind-granade");

console.log(items);

sayHi("Bangladesh");
sayHi(names.finland);
sayHi(names.sweden);
console.log(names);

const driving = require("./5-utils");
driving("accelarator");
