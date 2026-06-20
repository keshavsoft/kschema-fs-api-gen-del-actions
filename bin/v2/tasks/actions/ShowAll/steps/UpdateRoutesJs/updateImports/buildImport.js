const buildImport = ({ inFuncName, inEndpoint }) => {
    const localEndpoint = inEndpoint;

    const safeName = localEndpoint.replace(/[^a-zA-Z0-9]/g, "_");

    return `import { ${inFuncName} } from "./${localEndpoint}/controller.js";`;
};

export default buildImport;