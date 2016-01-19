"use strict";
//getting all properties of chalk
const chalk = require('chalk');
//assigning the black backround to a sentence and a bold lettering to another
var black = chalk.bgBlack('This background is black.');
var bold = chalk.bold('This sentence is bold :)');
var white = chalk.bgWhite('This has a white background');
var blackOnWhite = chalk.bgWhite.black('Unlike the sentence above, you can read this words because the words are black and the background is white.');
var boldRedBlue = chalk.bgBlue.red.bold('this is an interesting one! America!!!');
console.log(black + " " + bold);
console.log(white);
console.log(blackOnWhite);
console.log(boldRedBlue);