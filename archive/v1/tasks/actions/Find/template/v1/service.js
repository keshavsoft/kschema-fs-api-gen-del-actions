import getData from "./getData.js";

const startFunc = async ({ inTablePath }) => {
    const dataAsArray = await getData({ inTablePath });

    return await dataAsArray;
};

export { startFunc };
