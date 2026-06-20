const findUseInsertIndex = (inContent) => {
    const localContent = inContent;

    const matches = [...localContent.matchAll(/const\s+router\s*=\s*express\.Router\(\)/g)];
    const match = matches.at(0);

    return match ? match.index + match[0].length : localContent.length;
};

export default findUseInsertIndex;