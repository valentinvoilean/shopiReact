import React from 'react';
import {shallow} from 'enzyme';

import Row from './Row';

describe('Row', () => {

    it('should render 3 cells if is mobile Top position', () => {
        const props = {
            globalState: {},
            pos: 0,
            actions: {},
            mediaQuery: 'mobile'
        };
        const wrapper = shallow(<Row {...props} />);

        expect(wrapper.find('Cell')).toHaveLength(3);
    });

    it('should render only 1 cell if is on mobile Center position', () => {
        const props = {
            globalState: {},
            pos: 1,
            actions: {},
            mediaQuery: 'mobile'
        };
        const wrapper = shallow(<Row {...props} />);

        expect(wrapper.find('Cell')).toHaveLength(1);
    });

    it('should render only 1 cell if is on mobile Bottom position', () => {
        const props = {
            globalState: {},
            pos: 2,
            actions: {},
            mediaQuery: 'mobile'
        };
        const wrapper = shallow(<Row {...props} />);

        expect(wrapper.find('Cell')).toHaveLength(1);
    });

    it('should render 3 cells if is not mobile', () => {
        let props = {
            globalState: {},
            pos: 0,
            actions: {},
            mediaQuery: 'tablet'
        };
        let wrapper = shallow(<Row {...props} />);
        expect(wrapper.find('Cell')).toHaveLength(3);

        props.pos = 1;
        wrapper = shallow(<Row {...props} />);
        expect(wrapper.find('Cell')).toHaveLength(3);

        props.pos = 2;
        wrapper = shallow(<Row {...props} />);
        expect(wrapper.find('Cell')).toHaveLength(3);
    });
});
