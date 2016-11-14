import React from 'react';
import { shallow, mount, render } from 'enzyme';

import CloseButton from './closeButton.jsx';

describe('root', function () {

    it('renders without problems', function() {
        expect(render(<CloseButton />).find('span').length).toBe(1);
    });

   /* it('it should call the spy method on click', function() {
        const statelessComponent = TestUtils.findDOMNode(closeButton).children[0];

        TestUtils.Simulate.click(statelessComponent);
        expect(spy).toHaveBeenCalled();
    });*/
});
