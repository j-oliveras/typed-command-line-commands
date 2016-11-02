// Type definitions for is-builtin-module v1.0.4
// Project: https://github.com/75lb/command-line-commands
// Definitions by: Jordi Oliveras Rovira <https://github.com/j-oliveras>
// Typescript 2 or higher is required.

declare namespace commandLineCommands {
  export type CommandsOptions = string | Array<string | null>;

  export interface CommandsResult {
    command: string;
    argv: Array<string>;
  }
}

/**
 * Parses the argv value supplied (or process.argv by default), extracting and
 * returning the command and remainder of argv. The command will be the first
 * value in the argv array unless it is an option (e.g. --help).
 *
 * @throws INVALID_COMMAND if user supplied a command not specified in commands.
 *
 * @param commands One or more command strings, one of which the user must supply.
 * Include null to represent "no command" (effectively making a command optional).
 * @param argv An arguments array, defaults to the global process.argv if not supplied.
 * @return an object with the parsed command and its arguments.
 */
declare function commandLineCommands(commands: commandLineCommands.CommandsOptions, argv?: Array<string>): commandLineCommands.CommandsResult;

export = commandLineCommands;
