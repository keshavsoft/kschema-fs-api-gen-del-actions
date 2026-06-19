import readFile from "../common/readFile.js";
import buildImport from "./buildImport.js";
import checkDuplicate from "./checkDuplicate.js";
import findInsertIndex from "./findInsertIndex.js";
import writeFile from "../common/writeFile.js";

const updateImports = ({ appJsPath, endpoint, showLog, inFuncName }) => {
    const summary = {
        import: { added: false, line: null },
    };

    const content = readFile(appJsPath);

    const importLine = buildImport({
        inEndpoint: endpoint,
        inFuncName
    });

    const fromCheckDuplicate = checkDuplicate({ inContent: content, inFuncName });

    if (fromCheckDuplicate) {
        summary.import.skipped = true;

        if (showLog) console.log(summary);

        return summary;
    };

    const index = findInsertIndex(content);

    const before = content.slice(0, index);
    const lineNumber = before.split("\n").length + 1;

    const updated =
        before + "\n" + importLine + content.slice(index);

    writeFile(appJsPath, updated);

    summary.import.added = true;
    summary.import.line = lineNumber;

    if (showLog) console.log(summary);

    return summary;
};

export default updateImports;