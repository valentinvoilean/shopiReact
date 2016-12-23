import React from 'react';
import {mount} from 'enzyme';

import Row from './Row';

jest.mock('HeaderConfig/components');

const components = require('HeaderConfig/components');
components.Cell = jest.fn(() => null);

describe('Row', () => {

    it('should render 3 cells if is mobile Top position', () => {
        const props = {
            globalState: {},
            pos: 0,
            actions: {},
            mediaQuery: 'mobile'
        };
        const wrapper = mount(<Row {...props} />);

        expect(wrapper.find(components.Cell).length === 3).toBeTruthy();
    });

    it('should render only 1 cell if is on mobile Center position', () => {
        const props = {
            globalState: {},
            pos: 1,
            actions: {},
            mediaQuery: 'mobile'
        };
        const wrapper = mount(<Row {...props} />);

        expect(wrapper.find(components.Cell).length === 1).toBeTruthy();
    });

    it('should render only 1 cell if is on mobile Bottom position', () => {
        const props = {
            globalState: {},
            pos: 2,
            actions: {},
            mediaQuery: 'mobile'
        };
        const wrapper = mount(<Row {...props} />);

        expect(wrapper.find(components.Cell).length === 1).toBeTruthy();
    });

    it('should render 3 cells if is not mobile', () => {
        let props = {
            globalState: {},
            pos: 0,
            actions: {},
            mediaQuery: 'tablet'
        };
        let wrapper = mount(<Row {...props} />);
        expect(wrapper.find(components.Cell).length === 3).toBeTruthy();

        props.pos = 1;
        wrapper = mount(<Row {...props} />);
        expect(wrapper.find(components.Cell).length === 3).toBeTruthy();

        props.pos = 2;
        wrapper = mount(<Row {...props} />);
        expect(wrapper.find(components.Cell).length === 3).toBeTruthy();
    });
});
