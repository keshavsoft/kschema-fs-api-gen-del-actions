import { startFunc as Service } from "./service.js";
import { ConflictError, StorageError } from "./errors.js";

const getFunc = async ({ req, res, inTablePath }) => {
    try {
        const requestPk = req.params.pk;

        const fromService = await Service({
            inPk: requestPk,
            inTablePath
        });

        res.type("application/json").send(fromService);
    } catch (err) {

        if (err instanceof ConflictError)
            return res.status(409).send(err.message);

        if (err instanceof StorageError)
            return res.status(500).send("Failed to persist data");

        console.error(err);
        res.status(500).send("Unexpected error");
    }
};

export default getFunc;