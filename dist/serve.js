#! /usr/bin/env node
"use strict";
const shell = require('shelljs');
const yargs = require('yargs');
// option of debug mode (--level debug)
// get all arguments thru yargs
const argv = yargs
    .option('level', {
    alias: 'l',
    description: 'Set the log level',
    type: 'string',
});
// get all arguments thru yargs
shell.echo(argv.level);
