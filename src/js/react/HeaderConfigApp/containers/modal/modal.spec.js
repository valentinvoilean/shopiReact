import React from 'react';
import {shallow} from 'enzyme';

import {Modal} from './modal';

jest.mock('react-tabs');

const Tabs = require('react-tabs').Tabs;

describe('Modal', () => {
    it('renders without any problem', () => {
        const props = {
            globalState: {get: jest.fn(()=> 'text')},
            actions: {}
        };
        const wrapper = shallow(<Modal {...props} />);

        expect(wrapper.find(Tabs).length === 1).toBeTruthy();
    });
});
