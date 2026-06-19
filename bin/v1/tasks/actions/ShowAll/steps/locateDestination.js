import path from "path";

export const locateDestination = ({ inResolvedFolderName, toPath }) => {
    const localToPath = toPath;

    return path.join(localToPath, inResolvedFolderName);
};