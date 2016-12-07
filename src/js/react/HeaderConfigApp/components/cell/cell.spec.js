import React from 'react';
import {shallow} from 'enzyme';

import Cell from './cell';

jest.mock('sortablejs');
jest.mock('HeaderConfigApp/components');
jest.mock('HeaderConfigApp/utils');

const components = require('HeaderConfigApp/components');
const utils = require('HeaderConfigApp/utils');

components.CloseButton = jest.fn(() => null);
components.validateState = jest.fn(() => null);

describe('Cell', () => {

    let wrapper, props;

    beforeAll(() => {
        props = {
            globalState: {
                getIn: () => ({
                    toJS: () => []
                })
            },
            name: 'test',
            actions: {},
            mediaQuery: 'mobile'
        };
    });

    beforeEach(() => {
        wrapper = shallow(<Cell {...props} />);
    });

    it('should render', () => {
        expect(wrapper.find('ul')).toBePresent();
    });
});
