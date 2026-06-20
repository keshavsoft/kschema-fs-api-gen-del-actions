const checkDuplicate = ({ inContent, inEndpoint, inAppOrRouter }) => {
    const localContent = inContent;
    const localEndpoint = inEndpoint;
    const stringToSearch = `${inAppOrRouter}.get('/${localEndpoint}'`;

    return localContent.includes(stringToSearch);
};

export default checkDuplicate;