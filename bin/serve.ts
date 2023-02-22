#! /usr/bin/env node
const shell = require('shelljs');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv


shell.echo(argv.level);