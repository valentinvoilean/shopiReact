import validateState from './validateState';
import {fromJS} from 'immutable';

describe('Get initial state', () => {
    it('should throw an error if the mediaQuery doesn\'t exist', () => {
        const state = fromJS({
            data: {},
            shouldComponentUpdate: false
        });

        expect(function(){ validateState(state); } ).toThrow(new Error('The media query mobile does not exist in the settings provided.'));
    });

    it('should throw an error if the cell name does not exist in the current media query', () => {
        const headerSettings = '{"mobile":{"Hiddenn":["Breadcrumb","Search","MyAccount"]}}';

        const state = fromJS({
            data: JSON.parse(headerSettings),
            shouldComponentUpdate: false
        });

        expect(function(){ validateState(state); } ).toThrow(new Error("The cell Hiddenn doesn't exist."));
    });

    it('should throw an error if the number of items is higher then the max items allowed', () => {
        const headerSettings = '{"mobile":{"TopLeft":["MenuIcon", "Logo", "Cart"]}}';

        const state = fromJS({
            data: JSON.parse(headerSettings),
            shouldComponentUpdate: false
        });

        expect(function(){ validateState(state); } ).toThrow(new Error('The max number of items allowed in TopLeft is 2.'));
    });

    it('should throw an error if the item is not allowed in the current cell', () => {
        let headerSettings = '{"mobile":{"Hidden":["Logo"]}}';

        let state = fromJS({
            data: JSON.parse(headerSettings),
            shouldComponentUpdate: false
        });

        expect(function(){ validateState(state); } ).toThrow(new Error('Only  Wishlist, MyAccount, Currency, Language, Breadcrumb, WelcomeMessage, SocialIcons, Search, Menu are allowed in Hidden.'));

        headerSettings = '{"mobile":{"TopLeft":["Wishlist"]}}';
        state = fromJS({
            data: JSON.parse(headerSettings),
            shouldComponentUpdate: false
        });

        expect(function(){ validateState(state); } ).toThrow(new Error('Only  MenuIcon, Logo are allowed in TopLeft.'));
    });

    it('should throw an error if cannot validate complex item\'s requirements', () => {
        let headerSettings = '{"mobile":{"TopRight":["MenuIcon"]}}';

        let state = fromJS({
            data: JSON.parse(headerSettings),
            shouldComponentUpdate: false
        });

        expect(function(){ validateState(state); } ).toThrow(new Error('The item Logo is required inside the TopCenter cell.'));

        headerSettings = '{"mobile":{"TopLeft":["MenuIcon"]}}';

        state = fromJS({
            data: JSON.parse(headerSettings),
            shouldComponentUpdate: false
        });

        expect(function(){ validateState(state); } ).toThrow(new Error('The item Logo is required inside the TopCenter or TopLeft cell.'));
    });

    it('should not throw an error if can validate complex item\'s requirements', () => {
        const headerSettings = '{"mobile":{"TopLeft":["MenuIcon"], "TopCenter": ["Logo"]}}';

        const state = fromJS({
            data: JSON.parse(headerSettings),
            shouldComponentUpdate: false
        });

        expect(function(){ validateState(state); } ).not.toThrow(new Error('The item Logo is required inside the TopCenter or TopLeft cell.'));
    });
});
