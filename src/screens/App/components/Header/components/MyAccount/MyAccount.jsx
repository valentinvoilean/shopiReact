import React from 'react';
import {MatchMedia} from 'react-match-media';

import {MyAccountMobile, MyAccountDesktop} from './components';

import {mediaQueries} from 'shared/constants/mediaQueries';

export default function MyAccount() {
    return (
        <div className="myAccount">
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
