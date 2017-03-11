import React from 'react';
import {shallow} from 'enzyme';
import configureStore from 'config/store/configureStore';

const store = configureStore();

import HeaderConfig from './HeaderConfig';

describe('Modal', () => {
    it('renders without any problem', () => {
        const props = {
            globalState: {get: jest.fn(()=> false)},
            actions: {}
        };
        const wrapper = shallow((<HeaderConfig {...props} />), {context: {store}}).dive();

        expect(wrapper.find('Tabs')).toHaveLength(1);
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
        const wrapper = shallow((<HeaderConfig {...props} />), {context: {store}}).dive();

        wrapper.setProps(nextProps);

        expect(nextProps.globalState.get).toHaveBeenCalled();

    });
});
