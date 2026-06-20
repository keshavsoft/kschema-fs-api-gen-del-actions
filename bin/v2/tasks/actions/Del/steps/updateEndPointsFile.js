import fs from 'fs';

function updateEndPointsFile({ filePath, inTableName }) {
    try {
        let content = readFile(filePath);

        content = content.replace("<TABLE_NAME>", inTableName);

        writeFile(filePath, content);
    } catch (e) {
        handleError(e);
    };
};

// read
function readFile(filePath) {
    return fs.readFileSync(filePath, "utf-8");
};

// write
function writeFile(filePath, content) {
    fs.writeFileSync(filePath, content);
};

// error handler
function handleError(e) {
    console.error("ROUTE USE ERROR:", e.message);
};

export { updateEndPointsFile };