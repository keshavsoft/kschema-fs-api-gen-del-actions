/*
KSchema CLI – Execution Flow

1. Parse terminal input
2. Show usage if command/help missing
3. Resolve command dynamically
4. Load command dynamically
5. Execute action

Architecture Goals:
- JSON driven command system
- Zero hardcoded command maps
- Single source of truth
- Easy scalability
- Beginner friendly structure
*/
import actions from "../config/actions.json" with { type: "json" };

export default function showUsage(version) {
  const g = "\x1b[32m";
  const y = "\x1b[33m";
  const c = "\x1b[36m";
  const gray = "\x1b[90m";
  const r = "\x1b[0m";

  const commandsText = actions.map((item) => {
    return `  ${g}${item.exportFile}${r}     ${item.description}`;
  }).join("\n");

  const examplesText = actions.map((item) => {
    return `  ${gray}npx @keshavsoft/kschema-api-gen-actions ${item.exportFile}${r}`;
  }).join("\n");

  console.log(`
${c}🚀 KSchema Api Generator v${version}${r}

${y}Usage:${r}
  ${g}npx @keshavsoft/kschema-api-gen-actions${r} <command> [options]

${y}Commands:${r}
${commandsText}

${y}Examples:${r}
${examplesText}

${y}Tip:${r}
  ${gray}npm i -g @keshavsoft/kschema-api-gen-actions${r}
`);
}