const buildUseLine = ({ inAppOrRouter, inEndpoint, inFuncName }) => {
    return `${inAppOrRouter}.get('/${inEndpoint}', (req, res) => ${inFuncName}({ res, inTableName : tableName}));`;
};

export default buildUseLine;