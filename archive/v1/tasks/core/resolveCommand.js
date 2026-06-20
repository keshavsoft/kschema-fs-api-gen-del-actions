import StartEndPoint from "../commands/startEndPoint.js";
import AddSubRoute from "../commands/addSubRoute.js";
import AddTableName from "../tasks/tables/addTableName.js";
// import ShowAll from "../commands/showAll.js";
import Insert from "../tasks/actions/insert.js";
import ShowAll from "../tasks/actions/showAll.js";

import CreateApi from "../Orchestration/CreateApi/createApi.js";
import InsertApi from "../Orchestration/InsertApi/insertApi.js";

// resolveCommand.js
const map = {
    StartEndPoint,
    AddSubRoute,
    AddTableName,
    ShowAll,
    CreateApi,
    InsertApi,
    Insert
};

export default function resolveCommand(cmd) {
    return map[cmd] || null;
};