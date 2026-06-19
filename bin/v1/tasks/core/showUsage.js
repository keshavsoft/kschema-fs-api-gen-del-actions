/*
KSchema CLI – Entry Flow

1. Read user input from terminal (parseInput)
2. If no command → show usage (first-time user safety)
3. If help flags → show usage (quick guidance)
4. Resolve command dynamically (no hardcoding logic)
5. If command not found → inform + guide back to usage
6. Execute command with parsed input

Goal:
- Zero confusion for user
- Single source of truth (showUsage)
- Easy to extend (just add commands, no core changes)
*/

export default function showUsage(version) {
    const g = "\x1b[32m";
    const y = "\x1b[33m";
    const c = "\x1b[36m";
    const gray = "\x1b[90m";
    const r = "\x1b[0m";

    console.log(`
${c}🚀 KSchema Api Generator v${version}${r}

${y}Usage:${r}
  ${g}npx @keshavsoft/kschema-api-gen${r} <command> [options]

${y}Commands:${r}
  ${g}StartEndPoint${r}     Initialize a new folder and files
  ${g}CreateApi${r}         Creates new end point and hooks to app.js
  ${g}InsertApi${r}         Creates new InsertApi end point and hooks to app.js

${y}Examples:${r}
  ${gray}npx @keshavsoft/kschema-api-gen StartEndPoint${r}
  ${gray}npx @keshavsoft/kschema-api-gen CreateApi Api/V1/journals/ShowAll${r}
  ${gray}npx @keshavsoft/kschema-api-gen InsertApi Api/V1/journals/Insert${r}

${y}Tip:${r}
  ${gray}npm i -g @keshavsoft/kschema-api-gen${r}
`);
}