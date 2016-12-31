import {save, remove} from './duck';
import reducer from './duck';
import {defaultState} from 'common/constants/headerSettings';

describe('actions', () => {
    it('should call the save action', () => {
        const text = 'test';
        const payload = {
            type: 'SAVE_HEADER_SETTINGS',
            text: 'test',
        };
        expect(save(payload)).toEqual(payload);
    });

    it('should call the remove action', () => {
        const text = 'test';
        const payload = {
            type: 'REMOVE_HEADER_ITEM',
            text: 'test',
        };
        expect(remove(payload)).toEqual(payload);
    })
});

describe('reducer', () => {
    it('should return the default state', () => {
        expect(reducer(undefined, {})).toEqual(defaultState.get('HeaderConfig'));
        expect(reducer('throw error', {})).toEqual(defaultState.get('HeaderConfig'));
    });

    it('should save header settings', () => {
        const payload = {
            type: 'SAVE_HEADER_SETTINGS',
            to: 'TopLeft',
            children: ['MenuIcon', 'Logo'],
            mediaQuery: 'mobile',
            shouldComponentUpdate: false
        };

        expect(reducer(defaultState.get('HeaderConfig'), payload).toJS().data.mobile.TopLeft).toEqual(payload.children);
    });

    it('should remove header item', () => {
        const payload = {
            type: 'REMOVE_HEADER_ITEM',
            item: 'Menu',
            from: 'Main',
            mediaQuery: 'mobile'
        };

        expect(reducer(defaultState.get('HeaderConfig'), payload).toJS().data.mobile.TopLeft).toEqual(['MenuIcon']);
    });
});
