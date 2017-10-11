#!/usr/bin/env node
// require('shelljs/global');
// var argv = require('yargs')
//   .command("morning", "good morning", function (yargs) {
//     echo("Good Morning");
//   })
//   .command("evening", "good evening", function (yargs) {
//     echo("Good Evening");
//   })
//   .argv;

var argv = require('yargs')
  .option('n', {
    alias : 'name',
    demand: true,
    default: 'tom',
    describe: 'your name',
    type: 'string'
  })
  .argv;

console.log('hello ', argv.n);
//console.log('hello ', argv.n);