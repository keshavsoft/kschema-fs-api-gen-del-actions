import path from "path";
import { showAll } from "../../../index.js";

showAll({
    toPath: process.cwd(),
    showLog: true,
    inGenerateRest: true
});