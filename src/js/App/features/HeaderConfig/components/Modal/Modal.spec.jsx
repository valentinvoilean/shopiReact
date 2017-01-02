import React from 'react';
import {shallow} from 'enzyme';

import {HeaderConfigPureModal} from './Modal';

describe('Modal', () => {
    it('renders without any problem', () => {
        const props = {
            globalState: {get: jest.fn(()=> false)},
            actions: {}
        };
        const wrapper = shallow(<HeaderConfigPureModal {...props} />);

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
        const wrapper = shallow(<HeaderConfigPureModal {...props} />);

        wrapper.setProps(nextProps);

        expect(nextProps.globalState.get).toHaveBeenCalled();

    });
});
