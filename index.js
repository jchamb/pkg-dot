#!/usr/bin/env node
const argv = require('yargs').argv;
const chalk = require('chalk');
const fs = require('fs');
const _get  = require('lodash.get');
const _set = require('lodash.set');

console.log(chalk.bold.green('Reading package.json...'))

let rawdata;

try {
rawdata = fs.readFileSync('./package.json');
} catch(err) {
  console.log(chalk.bold.red('No package.json found in this directory.'))
  process.exit()
}

let package = JSON.parse(rawdata);

if ( argv._[0] ) {
  if (argv._.length === 2) {
    console.log(chalk.bold.green(`Setting ${argv._[0]} to ${argv._[1]}`));
    _set(package, argv._[0], argv._[1]);

    fs.writeFileSync('./package.json', JSON.stringify(package, null, 2));
    console.log(chalk.bold.green('package.json updated.'));

  } else if (argv._.length === 1) {
    const val = _get(package, argv._[0], null);

    if ( val !== null ) {
      console.log(`${chalk.bold.green(argv._[0])}: ${val}`)
    } else {
      console.log(`${chalk.bold.red(argv._[0])} does not exist in package.`)
    }
  } 

} else {
  console.log(resolutions);
}