import updateImports from "./UpdateRoutesJs/updateImports/index.js";
import updateAppUse from "./UpdateRoutesJs/updateUse/index.js";

export default ({ appJsPath, endpoint }) => {
    updateImports({ appJsPath, endpoint });
    updateAppUse({ appJsPath, endpoint });
};