import path from "path";
import { deleteAction } from "../../../index.js";

deleteAction({
    toPath: process.cwd(),
    showLog: true,
    inGenerateRest: true
});