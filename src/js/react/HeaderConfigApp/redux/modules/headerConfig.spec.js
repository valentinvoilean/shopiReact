import {save, remove} from './headerConfig';

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
