export const updateHeaderComponentPosition = (initialState, newData) => {
    const componentName = Object.keys(newData)[0];
    const componentProperties = newData[componentName];

    if (componentName && componentProperties) {
        let newSettings = {};

        newSettings[componentName] = {
            ...initialState[componentName],
            ...componentProperties
        };

        return {...initialState, ...newSettings};
    }

    else {
        console.warn('Component\'s name or its properties are not defined.');
        return initialState;
    }
};
