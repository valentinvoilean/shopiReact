import React from 'react';
import {MatchMedia} from 'react-match-media';

import MyAccountMobile from './MyAccountMobile';
import MyAccountTablet from './MyAccountTablet';
import MyAccountDesktop from './MyAccountDesktop';

import {mediaQueries} from 'common/constants/mediaQueries';

export default function MyAccount() {
    return (
        <div>
            <MatchMedia mediaQuery={mediaQueries.mobile}>
                <MyAccountMobile />
            </MatchMedia>

            <MatchMedia mediaQuery={mediaQueries.tablet}>
                <MyAccountTablet />
            </MatchMedia>

            <MatchMedia mediaQuery={mediaQueries.desktop}>
                <MyAccountDesktop />
            </MatchMedia>
        </div>
    );
}
