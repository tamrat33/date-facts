const moment = require('moment');
const chalk = require('chalk');

console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
console.log(chalk.blue(moment().format("dddd, MMMM Do YYYY, h:mm:ss a")));
