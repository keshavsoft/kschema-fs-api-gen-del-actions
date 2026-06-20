import parseInput from "./core/parseInput.js";
import resolveCommand from "./core/resolveCommand.js";
import showUsage from './core/showUsage.js';
import pkg from '../../package.json' with { type: 'json' };

const version = pkg.version;

const run = async () => {
  const input = parseInput();

  if (!input.cmd) return showUsage(version);

  if (input.cmd === "--help" || input.cmd === "-h" || input.cmd === "help") return showUsage(version);

  const command = await resolveCommand(input.cmd);

  if (!command) return (console.log(`Unknown command: ${input.cmd}\n`), showUsage(version));

  await command(input);
};

export default run;