import React from 'react';
import {shallow} from 'enzyme';

jest.unmock('HeaderConfig/components');
import HeaderConfigCloseButton from './HeaderConfigCloseButton';

describe('Close button', () => {

    let _, states;

    beforeAll(() => {
        jest.mock('lodash');
        jest.mock('AppConstants/states');

        _ = require('lodash');
        states = require('AppConstants/states');

        states.validStates = {
            get: jest.fn(() => ({Hidden: []}))
        };

        _.includes = jest.fn(() => false);
    });

    it('doesn\'t appear if is inside the Hidden cell', () => {
        expect(shallow(
            <HeaderConfigCloseButton onClick={() => void 0}
                             item="Menu"
                             mediaQuery="mobile"
                             cellName="Hidden"
            />
        ).find('button')).not.toBePresent();
    });

    it('doesn\'t appear if the item is always required', () => {
        expect(shallow(
            <HeaderConfigCloseButton onClick={() => void 0}
                             item="MenuIcon"
                             mediaQuery="mobile"
                             cellName="TopLeft"
            />
        ).find('button')).not.toBePresent();
    });

    it('renders without any problem if the item is not required and is not in the active Hidden cell,' +
        ' but it is available in the validState hidden list', () => {
        _.includes.mockReturnValue(true);
        expect(shallow(
            <HeaderConfigCloseButton onClick={() => void 0}
                             item="MyAccount"
                             mediaQuery="mobile"
                             cellName="TopRight"
            />
        ).find('button')).toBePresent();
    });

    it('simulates click events', () => {
        _.includes.mockReturnValue(true);
        const onClick = jasmine.createSpy('onButtonClick');

        const wrapper = shallow(
            <HeaderConfigCloseButton onClick={onClick}
                             item="MyAccount"
                             mediaQuery="mobile"
                             cellName="TopRight"
            />
        );

        wrapper.find('button').simulate('click');
        expect(onClick).toHaveBeenCalled();
    });
});
