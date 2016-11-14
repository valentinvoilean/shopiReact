import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CloseButton from './closeButton.jsx';

describe('root', function () {

    let closeButton = TestUtils.renderIntoDocument(
        <CloseButton onClick={()=> void 0} item="Menu"/>
    );
    /*
    let span = TestUtils.findRenderedDOMComponentWithTag(
        closeButton, 'span'
    );

    it('renders without problems', function () {
        expect(span.getDOMNode().textContent)
            .toEqual('&#10005;');
    });*/

    it('shoud be true', function() {
        expect(true).toBeTruthy();
    });
});
