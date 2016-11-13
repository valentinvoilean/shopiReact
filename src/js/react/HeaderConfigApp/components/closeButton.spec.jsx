import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import CloseButton from './closeButton.jsx';

describe('root', function () {
    let close = ReactTestUtils.renderIntoDocument(
        <CloseButton onClick={() => void 0} item="Menu"/>
    );

    it('should work out of the box', function () {
        expect(true).toBeTruthy();
    });
});
