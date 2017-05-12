import React from 'react';
import ReactDOM from 'react-dom';

import {mount, shallow} from 'enzyme';

import Cell from './Cell';

jest.mock('sortablejs');
jest.mock('shared/utils/header');

const utils = require('shared/utils/header');
const Sortable = require('sortablejs');

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
            mediaQuery: 'mobile',
            data: {
              mobile: {
                test: ['a','b']
              }
            },
          remove: jest.fn(),
          save: jest.fn()

        };
    });

    it('should call the componentDidMount method', () => {
        wrapper = mount(<Cell {...props} />);
        expect(Sortable.create).toHaveBeenCalled();
    });

    it('should render', () => {
        wrapper = shallow(<Cell {...props} />);
        expect(wrapper.find('ul')).toBePresent();
        expect(wrapper.find('CloseButton')).toHaveLength(2);
    });

    it('should call the remove action', () => {
        wrapper = mount(<Cell {...props} />);
        wrapper.find('CloseButton').nodes[0].props.onClick();
        expect(props.remove).toHaveBeenCalled();
    });

    it('should destroy the sortable when componentWillUnmount method called', () => {
        wrapper = mount(<Cell {...props} />);
        wrapper.instance().sortable = {
            destroy: jest.fn()
        };

        wrapper.instance().componentWillUnmount();
        expect(wrapper.instance().sortable.destroy).toHaveBeenCalled();
    });

    it('should call the save action method on sort', () => {
        wrapper = mount(<Cell {...props} />);
        wrapper.instance().handleSort({
            to: {dataset: {id: ''}, children:[{dataset: {id: ''}}]},
            from: {dataset: {id: ''}}
        });
        expect(props.save).toHaveBeenCalled();
    });

    describe('_validateItem method', () => {
        it('should return false if the validateState returns any error', () => {
            wrapper.instance().tooltipRef = {dataset: {message: null}};
            wrapper.instance().validateItem();
            expect(wrapper.instance().tooltipRef.dataset.message).not.toBeNull();
        });

        it('should return true if the validateState doesn\'t return any error', () => {

            expect(wrapper.instance().validateItem({
                el: {dataset:{id:'test'}}
            },null, {
                dataset:{id:'test'}
            })).toBeTruthy();

        })
    });
});
