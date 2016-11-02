/// <reference path="../out/index.d.ts" />

import test = require('blue-tape');

import commandLineCommands = require('command-line-commands');

// Based on official synopsis samples: https://github.com/75lb/command-line-commands#synopsis

const validCommands: commandLineCommands.CommandsOptions = [ null, 'clean', 'update', 'install' ];

test('Optional command', t => {
  const argv = [];
  const result = commandLineCommands(validCommands, argv);
  t.true(result.command === null);
  t.deepEqual(result.argv, []);
}).
end();

test('No commands', t => {
  const argv = [ '--verbose' ];
  const result = commandLineCommands(validCommands, argv);
  t.true(result.command === null);
  t.deepEqual(result.argv, [ '--verbose' ]);
}).
end();

test('No commands', t => {
  const argv = [ 'install', '--save', 'something' ];
  const result = commandLineCommands(validCommands, argv);
  t.true(result.command === 'install');
  t.deepEqual(result.argv, [ '--save', 'something' ]);
}).
end();

// Test throw exception

test('No commands', t => {
  const commands = [ 'something' ];
  const argv = [ 'install', '--save', 'something' ];
  t.throws(() => commandLineCommands(commands, argv));
}).
end();
