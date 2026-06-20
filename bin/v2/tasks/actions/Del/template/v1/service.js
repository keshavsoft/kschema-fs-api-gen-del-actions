import getData from "./getData.js";

const startFunc = async ({ inPk, inTablePath }) => {
    const dataAsArray = await getData({ inTablePath });

    const findRow = dataAsArray.find(element => {
        return element.pk === inPk;
    });

    return await findRow;
};

export { startFunc };
