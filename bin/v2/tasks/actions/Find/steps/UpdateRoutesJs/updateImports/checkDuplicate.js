const checkUseDuplicate = ({ inContent, inFuncName }) => {
    const localContent = inContent;
    const toCheckLine = `import { ${inFuncName} } from`;

    return localContent.includes(toCheckLine);
};

export default checkUseDuplicate;