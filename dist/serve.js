#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shell = require('shelljs');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const express = require("express");
const helmet = require('helmet');
const log4js = require('log4js');
const argv = yargs(hideBin(process.argv)).argv;
const logger = log4js.getLogger("serve");
if (argv.loglevel) {
    logger.level = argv.loglevel;
}
else {
    logger.level = "info";
}
const app = express();
const port = argv.port || 80;
logger.debug("Initialized Express server");
const path = argv._[0] || process.cwd();
logger.debug('Serving ' + path);
logger.info('Starting HTTP server on port ' + port);
app.use((req, res, next) => {
    logger.debug(req.method + ' ' + req.url);
    next();
});
app.use(express.static(path));
if (argv.helmet) {
    app.use(helmet());
    logger.info('Helmet enabled');
}
app.listen(port, () => {
    logger.info(`Server started`);
});
