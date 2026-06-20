import fs from "fs";

const writeFile = (inAppJsPath, inContent) => {
    const localPath = inAppJsPath;
    const localContent = inContent;

    fs.writeFileSync(localPath, localContent);
};

export default writeFile;