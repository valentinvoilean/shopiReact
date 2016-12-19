import React from 'react';
import {shallow} from 'enzyme';

jest.unmock('HeaderConfig');
jest.unmock('AppConstants/states');
import Codebox from './code';

describe('Codebox', () => {
    let wrapper;
    jest.mock('react-copy-to-clipboard');

    beforeEach(() => {
        wrapper = shallow(<Codebox text="test"/>);
    });

    it('should render', () => {
        expect(wrapper.find('code')).toBePresent();
    });

    it('should have text inside', () => {
        expect(wrapper.find('code').text()).toBe('test');
    });

    it('should update the content of the component when the value prop is changed', () => {
        wrapper.setProps({text: 'other text'});
        expect(wrapper.find('code').text()).toBe('other text');
    });

    it('should have the button state set to false at the beginning', () => {
        expect(wrapper.state().copied).toBe(false);
    });

    it('should update the button class on click', () => {
        wrapper.instance()._handleCopy();
        expect(wrapper.state().copied).toBe(true);
    });

    afterEach(() => {
        wrapper.unmount();
    });
});
