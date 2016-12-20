import React from 'react';
import {shallow} from 'enzyme';

import {HeaderConfigPureModal} from './HeaderConfigModal';

jest.mock('react-tabs');
jest.mock('HeaderConfig');

const components = require('HeaderConfig');
components.HeaderConfigCell = jest.fn(() => null);
components.HeaderConfigCodeBox = jest.fn(() => null);
components.HeaderConfigRow = jest.fn(() => null);

const ReactTabs = require('react-tabs');
ReactTabs.Tab = jest.fn(() => null);
ReactTabs.Tabs = jest.fn(() => null);
ReactTabs.TabList = jest.fn(() => null);
ReactTabs.TabPanel = jest.fn(() => null);

describe('Modal', () => {
    it('renders without any problem', () => {
        const props = {
            globalState: {get: jest.fn(()=> false)},
            actions: {}
        };
        const wrapper = shallow(<HeaderConfigPureModal {...props} />);

        expect(wrapper.find(ReactTabs.Tabs).length === 1).toBeTruthy();
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
        const wrapper = shallow(<HeaderConfigPureModal {...props} />);

        wrapper.setProps(nextProps);

        expect(nextProps.globalState.get).toHaveBeenCalled();

    });
});
