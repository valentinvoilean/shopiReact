export const distributeItemsByMQ = (headerConfig, filter) => {
    const currentMQsettings = headerConfig[filter];
    let items = {};

    for (let component in currentMQsettings) {
        if (currentMQsettings.hasOwnProperty(component)) {
            const position = currentMQsettings[component].position;
            const order = currentMQsettings[component].order;
            items[position] = items[position] || [];
            items[position][order] = component;
        }
    }

    return items;
};
