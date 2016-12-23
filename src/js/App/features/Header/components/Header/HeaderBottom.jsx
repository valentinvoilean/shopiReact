import React from 'react';
import { MatchMedia } from 'react-match-media';

const HeaderBottom = ({data}) => {
    return (
        <div className="headerBottom">
            <div className="container">
                <MatchMedia mediaQuery={'(max-width: 767px)'}>
                    <div className="headerBottom__items">
                        {data.BottomLeft ? data.BottomLeft.mobile : ''}
                    </div>
                    <div className="headerBottom__items">
                        {data.BottomCenter ? data.BottomCenter.mobile : ''}
                    </div>
                    <div className="headerBottom__items">
                        {data.BottomRight ? data.BottomRight.mobile : ''}
                    </div>
                </MatchMedia>
                <MatchMedia mediaQuery={'(min-width: 768px) and (max-width: 1023px)'}>
                    <div className="headerBottom__items">
                        {data.BottomLeft ? data.BottomLeft.tablet : ''}
                    </div>
                    <div className="headerBottom__items">
                        {data.BottomCenter ? data.BottomCenter.tablet : ''}
                    </div>
                    <div className="headerBottom__items">
                        {data.BottomRight ? data.BottomRight.tablet : ''}
                    </div>
                </MatchMedia>
                <MatchMedia mediaQuery={'(min-width: 1024px)'}>
                    <div className="headerBottom__items">
                        {data.BottomLeft ? data.BottomLeft.desktop : ''}
                    </div>
                    <div className="headerBottom__items">
                        {data.BottomCenter ? data.BottomCenter.desktop : ''}
                    </div>
                    <div className="headerBottom__items">
                        {data.BottomRight ? data.BottomRight.desktop : ''}
                    </div>
                </MatchMedia>
            </div>
        </div>
    );
};

HeaderBottom.propTypes = {
    data: React.PropTypes.object.isRequired
};

export default HeaderBottom;
