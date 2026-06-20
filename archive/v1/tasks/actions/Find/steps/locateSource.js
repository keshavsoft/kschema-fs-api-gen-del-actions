import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const locateSource = () => {
    const templatePath = path.join(__dirname, "..", "template");

    const versions = fs.readdirSync(templatePath);

    const maxVersion = Math.max(
        ...versions.map(v => Number(v.replace("v", "")))
    );

    return path.join(templatePath, `v${maxVersion}`);
};