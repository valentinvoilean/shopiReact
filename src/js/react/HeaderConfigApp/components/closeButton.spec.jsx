import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import CloseButton from './closeButton.jsx';

describe('root', function () {

    let spy = jasmine.createSpy('test');
    let closeButton = TestUtils.renderIntoDocument(
        <div><CloseButton onClick={spy} item="Menu"/></div>
    );

    it('renders without problems', function() {
        expect(ReactDOM.findDOMNode(closeButton).querySelector('span').textContent).toBe('✕');
    });

    it('it should call the spy method on click', function() {
        const statelessComponent = TestUtils.findDOMNode(closeButton).children[0];

        TestUtils.Simulate.click(statelessComponent);
        expect(spy).toHaveBeenCalled();
    });
});
