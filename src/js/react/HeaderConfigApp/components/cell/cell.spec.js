import React from 'react';
import {mount} from 'enzyme';

import Cell from './cell';

jest.mock('sortablejs');
jest.mock('HeaderConfigApp/components');
jest.mock('HeaderConfigApp/utils');

const components = require('HeaderConfigApp/components');
const utils = require('HeaderConfigApp/utils');
const Sortable = require('sortablejs');

components.CloseButton = jest.fn(() => null);
components.validateState = jest.fn(() => null);
Sortable.create = jest.fn(() => ({el: {dataset: {id: 'test'}}}));

describe('Cell', () => {

    let wrapper, props;

    beforeAll(() => {
        props = {
            globalState: {
                getIn: () => ({
                    toJS: () => ['Logo', 'Menu']
                })
            },
            name: 'test',
            actions: {
                remove: jest.fn()
            },
            mediaQuery: 'mobile'
        };
    });

    beforeEach(() => {
        wrapper = mount(<Cell {...props} />);
    });

    it('should call the componentDidMount method', () => {
       expect(Sortable.create).toHaveBeenCalled();
    });

    it('should render', () => {
        expect(wrapper.find('ul')).toBePresent();
        expect(wrapper.find('li').length === 2).toBeTruthy();
    });

    it('should call the remove action', () => {
        wrapper.instance()._handleCloseButton();
        expect(props.actions.remove).toHaveBeenCalled();
    })
});
