import React from 'react';
import jasmineEnzyme from 'jasmine-enzyme';
import {shallow} from 'enzyme';

import CloseButtonView from './closeButton.view';

describe('Close button', () => {

    beforeEach(() => {
        jasmineEnzyme();
    });

    it('doesn\'t appear if is inside the Hidden cell', () => {
        expect(shallow(
            <CloseButtonView onClick={() => void 0}
                             item="Menu"
                             mediaQuery="mobile"
                             cellName="Hidden"
            />
        ).find('button')).not.toBePresent();
    });

    it('doesn\'t appear if the item is always required', () => {
        expect(shallow(
            <CloseButtonView onClick={() => void 0}
                             item="MenuIcon"
                             mediaQuery="mobile"
                             cellName="TopLeft"
            />
        ).find('button')).not.toBePresent();
    });

    it('renders without any problem if the item is not required and is not in the hidden list', () => {
        expect(shallow(
            <CloseButtonView onClick={() => void 0}
                             item="MyAccount"
                             mediaQuery="mobile"
                             cellName="TopRight"
            />
        ).find('button')).toBePresent();
    });

    it('simulates click events', () => {
        const onClick = jasmine.createSpy('onButtonClick');

        const wrapper = shallow(
            <CloseButtonView onClick={onClick}
                             item="MyAccount"
                             mediaQuery="mobile"
                             cellName="TopRight"
            />
        );

        wrapper.find('button').simulate('click');
        expect(onClick).toHaveBeenCalled();
    });
});