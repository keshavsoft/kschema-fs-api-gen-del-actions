export const announce = ({ inResolvedFolderName }) => {
    console.log(`[keshavsoft] Folder created: ${inResolvedFolderName}`);

    console.log("");
    console.log("Next:");
    console.log("");
    console.log(`cd ${inResolvedFolderName}`);
    console.log(`npx kschema-api-gen AddSubRoute`);
};