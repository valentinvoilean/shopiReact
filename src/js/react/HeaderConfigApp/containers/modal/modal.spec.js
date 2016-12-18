import React from 'react';
import {shallow} from 'enzyme';

import {PureModal} from './modal';

jest.mock('react-tabs');
jest.mock('HeaderConfigApp/components');

const components = require('HeaderConfigApp/components');
components.Cell = jest.fn(() => null);
components.CodeBox = jest.fn(() => null);
components.Row = jest.fn(() => null);

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
        const wrapper = shallow(<PureModal {...props} />);

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
        const wrapper = shallow(<PureModal {...props} />);

        wrapper.setProps(nextProps);

        expect(nextProps.globalState.get).toHaveBeenCalled();

    });
});
