import fs from "fs";

export default function resolveFolderName({ name, inDefaultFolderName = "InsertGenPk" }) {
    const defaultFolderName = inDefaultFolderName;

    // case 1: force new → timestamp
    if (name === null) {
        name = defaultFolderName;
    };

    // case 2: user provided → strict
    if (fs.existsSync(name)) {
        return {
            KTF: false,
            KReason: `Folder already exists : ${name}`
        };
    };

    return name;
};