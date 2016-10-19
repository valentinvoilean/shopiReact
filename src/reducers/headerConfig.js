const headerConfig = (state = [], action) => {
    switch (action.type) {
        case 'saveHeaderSettings':
            return {
                data: {test:2}
            };
        case 'loadHeaderSettings':
            return {
              data: {test:1}
            };
        default:
            return state;
    }
};

export default headerConfig;
