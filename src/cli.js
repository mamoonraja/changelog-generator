#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');
const changelog = require('./changelog');


const options = program
  .version(pkg.version, '-v, --version')
  .option('-t, --to [tag]', 'to')
  .option('-f, --from [tag]', 'from')
  .option('-t, --type [preset]', 'type of preset [angular]')
  .option('-o, --outfile [file]', 'output file')
  .parse(process.argv);

changelog(options);
