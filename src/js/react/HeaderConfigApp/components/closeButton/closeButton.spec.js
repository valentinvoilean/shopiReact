import React from 'react';
import jasmineEnzyme from 'jasmine-enzyme';
import {shallow} from 'enzyme';

import CloseButton from './closeButton';

describe('root', () => {

    beforeEach(() => {
        jasmineEnzyme();
    });

    it('renders without problems', () => {
        expect(shallow(<CloseButton onClick={() => void 0} item="Menu"/>).find('span')).toBePresent();
    });

    it('simulates click events', () => {
        const onClick = jasmine.createSpy('onButtonClick');

        const wrapper = shallow(
            <CloseButton onClick={onClick} item="Menu"/>
        );

        wrapper.find('span').simulate('click');
        expect(onClick).toHaveBeenCalled();
    });
});
