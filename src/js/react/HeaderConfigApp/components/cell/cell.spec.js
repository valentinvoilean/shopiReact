import React from 'react';
import {shallow} from 'enzyme';
import {Map} from 'immutable';

import Cell from './cell';

describe('Cell', () => {

    let wrapper;
    const props = {
        globalState: Map({}),
        name: 'test',
        actions: {},
        mediaQuery: 'mobile'
    };

    beforeEach(() => {
        wrapper = shallow(<Cell {...props} />);
    });

    it('should render', () => {
        expect(wrapper.find('ul')).toBePresent();
    });
});
