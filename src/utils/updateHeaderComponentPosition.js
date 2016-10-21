export default function(initialState, newData) {
    const componentName = Object.keys(newData)[0];
    const componentProperties = newData[componentName];
    let newSettings = {};

    newSettings[componentName] = {
        ...initialState[componentName],
        ...componentProperties
    };

    return {...initialState, ...newSettings};
}
