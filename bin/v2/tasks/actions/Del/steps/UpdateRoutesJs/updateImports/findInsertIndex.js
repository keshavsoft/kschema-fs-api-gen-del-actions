const findInsertIndex = (inContent) => {
    const localContent = inContent;

    const matches = [...localContent.matchAll(/^\s*import.*$/gm)];
    const last = matches.at(-1);

    return last ? last.index + last[0].length : 0;
};

export default findInsertIndex;