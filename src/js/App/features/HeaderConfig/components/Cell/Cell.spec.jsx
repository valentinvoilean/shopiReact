import React from 'react';
import {mount, shallow} from 'enzyme';

jest.unmock('HeaderConfig/components/Cell');
import Cell from './Cell';

jest.mock('sortablejs');
jest.mock('common/utils/header');

const utils = require('common/utils/header');
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
            actions: {
                remove: jest.fn(),
                save: jest.fn()
            },
            mediaQuery: 'mobile'
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
        expect(props.actions.remove).toHaveBeenCalled();
    });

    it('should destroy the sortable when componentWillUnmount method called', () => {
        wrapper = mount(<Cell {...props} />);
        wrapper.instance().sortable = {
            destroy: jest.fn()
        };

        wrapper.instance().componentWillUnmount();
        expect(wrapper.instance().sortable.destroy).toHaveBeenCalled();
    });

    it('should call the componentWillUnmoint method called', () => {
        wrapper = mount(<Cell {...props} />);
        Cell.prototype.componentWillUnmount = jest.fn();
        wrapper.unmount();
        expect(Cell.prototype.componentWillUnmount).toHaveBeenCalled();
    });

    it('should call the save action method on sort', () => {
        wrapper = mount(<Cell {...props} />);
        wrapper.instance().handleSort({
            to: {dataset: {id: ''}, children:[{dataset: {id: ''}}]},
            from: {dataset: {id: ''}}
        });
        expect(props.actions.save).toHaveBeenCalled();
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
