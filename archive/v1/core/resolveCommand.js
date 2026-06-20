import actions from "../config/actions.json" with { type: "json" };

export default async function resolveCommand(cmd) {
    const matched = actions.find(x => x.cmd === cmd);

    if (!matched) return null;

    const module = await import(`../tasks/actions/${matched.file}.js`);

    return module.default;
};