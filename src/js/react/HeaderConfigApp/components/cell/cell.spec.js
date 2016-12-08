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
utils.validateState = jest.fn(() => null);

Sortable.create = jest.fn(() => ({
    el: {dataset: {id: 'test'}},
    destroy: jest.fn()
}));

describe('Cell', () => {

    let wrapper, props;

    beforeAll(() => {
        props = {
            globalState: {
                getIn: () => ({
                    toJS: () => ['Logo', 'Menu']
                }),
                updateIn: jest.fn(() => null)
            },
            name: 'test',
            actions: {
                remove: jest.fn(),
                save: jest.fn()
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
    });

    it('should destroy the sortable when componentWillUnmount method called', () => {
        wrapper.instance().sortable = {
            destroy: jest.fn()
        };

        wrapper.instance().componentWillUnmount();
        expect(wrapper.instance().sortable.destroy).toHaveBeenCalled();
    });

    it('should call the componentWillUnmoint method called', () => {
        Cell.prototype.componentWillUnmount = jest.fn();
        wrapper.unmount();
        expect(Cell.prototype.componentWillUnmount).toHaveBeenCalled();
    });

    describe('_validateItem method', () => {
        it('should return false if the validateState returns any error', () => {
            wrapper.instance().tooltipRef = {dataset: {message: null}};
            wrapper.instance()._validateItem();
            expect(wrapper.instance().tooltipRef.dataset.message).not.toBeNull();
        });

        it('should return true if the validateState doesn\'t return any error', () => {

            expect(wrapper.instance()._validateItem({
                el: {dataset:{id:'test'}}
            },null, {
                dataset:{id:'test'}
            })).toBeTruthy();

        })
    });
});
