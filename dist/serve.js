#! /usr/bin/env node
"use strict";
const shell = require('shelljs');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
shell.echo(argv.level);
