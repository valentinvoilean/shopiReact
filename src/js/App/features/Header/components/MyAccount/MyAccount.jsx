import React from 'react';
import {MatchMedia} from 'react-match-media';

import {MyAccountMobile, MyAccountDesktop} from './';

import {mediaQueries} from 'common/constants/mediaQueries';

export default function MyAccount() {
    return (
        <div>
            <MatchMedia mediaQuery={mediaQueries.mobile}>
                <MyAccountMobile />
            </MatchMedia>

            <MatchMedia mediaQuery={mediaQueries.tablet}>
                <MyAccountDesktop />
            </MatchMedia>

            <MatchMedia mediaQuery={mediaQueries.desktop}>
                <MyAccountDesktop />
            </MatchMedia>
        </div>
    );
}
