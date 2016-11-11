import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Modal from './modal.jsx';

describe('root', function () {
    var Modal = ReactTestUtils.renderIntoDocument(
        <Modal/>
    );

    it('should work out of the box', function () {
        expect(true).toBeTruthy();
    });
});
