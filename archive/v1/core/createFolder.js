import fs from "fs";

export const createFolder = ({ source, destination, checkBeforeCreate = false, isAnnounce = true }) => {
    if (checkBeforeCreate) {
        return createFolderWithCheck({ source, destination, isAnnounce });
    } else {
        return createOnly({ source, destination });
    };
};

const createOnly = ({ source, destination }) => {
    fs.mkdirSync(destination, { recursive: true });

    fs.cpSync(source, destination, { recursive: true });

    return {
        KTF: true
    };
};

const createFolderWithCheck = ({ source, destination, isAnnounce }) => {
    if (fs.existsSync(destination)) {
        if (isAnnounce) console.log("Folder already exists :", destination);

        return {
            KTF: false,
            KReason: "Folder already exists"
        };
    };

    if (isAnnounce) console.log("Folder created :", destination);

    return createOnly({ source, destination });
};