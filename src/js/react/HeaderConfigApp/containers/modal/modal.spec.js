import React from 'react';
import {shallow} from 'enzyme';

import {PureModal} from './modal';

jest.mock('react-tabs');

const Tabs = require('react-tabs').Tabs;

describe('Modal', () => {
    it('renders without any problem', () => {
        const props = {
            globalState: {get: jest.fn(()=> false)},
            actions: {}
        };
        const wrapper = shallow(<PureModal {...props} />);

        expect(wrapper.find(Tabs).length === 1).toBeTruthy();
    });

    it('should check if the component should update', () => {
        const props = {
            globalState: {get: jest.fn(()=> false)},
            actions: {}
        };
        const nextProps = {
            globalState: {get: jest.fn(()=> true)},
            actions: {}
        };
        const wrapper = shallow(<PureModal {...props} />);

        wrapper.setProps(nextProps);

        expect(nextProps.globalState.get).toHaveBeenCalled();

    });
});
