import fs from "fs";

const readFile = (inAppJsPath) => {
    const localPath = inAppJsPath;
    return fs.readFileSync(localPath, "utf-8");
};

export default readFile;