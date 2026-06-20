export default function parseInput() {
    const [cmd, ...args] = process.argv.slice(2);

    return {
        cmd: cmd || null,
        args,
        template: cmd || null,
        folderName: args[0] || null,
        argsAsIs: args[0] || null,
        toPath: process.cwd()
    };
};