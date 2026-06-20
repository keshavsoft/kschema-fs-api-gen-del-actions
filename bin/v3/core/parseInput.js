export default function parseInput() {
    const [cmd, showLog] = process.argv.slice(2);

    return {
        cmd: cmd || null,
        toPath: process.cwd(),
        showLog: showLog || false
    };
};