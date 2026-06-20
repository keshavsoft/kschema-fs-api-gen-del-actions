import readFile from "../common/readFile.js";
import writeFile from "../common/writeFile.js";

import buildUseLine from "./buildUseLine.js";
import checkDuplicate from "./checkDuplicate.js";
import findUseInsertIndex from "./findInsertIndex.js";

const appOrRouter = "router";

const updateAppUse = ({ appJsPath, endpoint, showLog, inFuncName }) => {
    const summary = {
        use: { added: false, skipped: false, line: null }
    };

    const content = readFile(appJsPath);

    const useLine = buildUseLine({
        inAppOrRouter: appOrRouter,
        inEndpoint: endpoint,
        inFuncName
    });

    const fromCheckDuplicate = checkDuplicate({
        inContent: content,
        inEndpoint: endpoint,
        inAppOrRouter: appOrRouter
    });
    console.log("fromCheckDuplicate : ", fromCheckDuplicate);

    if (fromCheckDuplicate) {
        summary.use.skipped = true;

        if (showLog) console.log(summary);

        return summary;
    };

    const index = findUseInsertIndex(content);

    const before = content.slice(0, index);
    const lineNumber = before.split("\n").length + 1;

    const updated =
        before + "\n" + useLine + content.slice(index);

    writeFile(appJsPath, updated);

    summary.use.added = true;
    summary.use.line = lineNumber;

    if (showLog) console.log(summary);

    return summary;
};

export default updateAppUse;