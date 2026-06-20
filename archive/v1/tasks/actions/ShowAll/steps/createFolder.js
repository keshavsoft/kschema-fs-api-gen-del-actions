import fs from "fs";

export const createFolder = ({ source, destination }) => {
    fs.mkdirSync(destination, { recursive: true });

    fs.cpSync(source, destination, { recursive: true });
};