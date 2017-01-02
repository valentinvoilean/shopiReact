import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {MatchMedia} from 'react-match-media';

import * as HeaderComponents from './components';

export const PureHeader = ({globalState}) => {

    const _returnComponents = (data) => {
        return data.toJS().map((key, index) => {
            if (HeaderComponents[key]) {
                return React.createElement(HeaderComponents[key], {key: index});
            }

            return null;
        });
    };

    return (
        <div className="header">
            <div className="headerTop">
                <div className="container">
                    <MatchMedia mediaQuery={'(max-width: 767px)'}>
                        <div className="headerTop__items">
                            {_returnComponents(globalState.getIn(['data', 'mobile', 'TopLeft']))}
                        </div>
                        <div className="headerTop__items">
                            {_returnComponents(globalState.getIn(['data', 'mobile', 'TopCenter']))}
                        </div>
                        <div className="headerTop__items">
                            {_returnComponents(globalState.getIn(['data', 'mobile', 'TopRight']))}
                        </div>
                    </MatchMedia>
                    <MatchMedia mediaQuery={'(min-width: 768px) and (max-width: 1023px)'}>
                        <div className="headerTop__items">
                            {_returnComponents(globalState.getIn(['data', 'tablet', 'TopLeft']))}
                        </div>
                        <div className="headerTop__items">
                            {_returnComponents(globalState.getIn(['data', 'tablet', 'TopCenter']))}
                        </div>
                        <div className="headerTop__items">
                            {_returnComponents(globalState.getIn(['data', 'tablet', 'TopRight']))}
                        </div>
                    </MatchMedia>
                    <MatchMedia mediaQuery={'(min-width: 1024px)'}>
                        <div className="headerTop__items">
                            {_returnComponents(globalState.getIn(['data', 'desktop', 'TopLeft']))}
                        </div>
                        <div className="headerTop__items">
                            {_returnComponents(globalState.getIn(['data', 'desktop', 'TopCenter']))}
                        </div>
                        <div className="headerTop__items">
                            {_returnComponents(globalState.getIn(['data', 'desktop', 'TopRight']))}
                        </div>
                    </MatchMedia>
                </div>
            </div>

            <div className="headerMain">
                <div className="container">
                    <MatchMedia mediaQuery={'(max-width: 767px)'}>
                        <div className="headerMain__items">
                            {_returnComponents(globalState.getIn(['data', 'mobile', 'Main']))}
                        </div>
                    </MatchMedia>
                    <MatchMedia mediaQuery={'(min-width: 768px) and (max-width: 1023px)'}>
                        <div className="headerMain__items">
                            {_returnComponents(globalState.getIn(['data', 'tablet', 'MainLeft']))}
                        </div>
                        <div className="headerMain__items">
                            {_returnComponents(globalState.getIn(['data', 'tablet', 'MainCenter']))}
                        </div>
                        <div className="headerMain__items">
                            {_returnComponents(globalState.getIn(['data', 'tablet', 'MainRight']))}
                        </div>
                    </MatchMedia>
                    <MatchMedia mediaQuery={'(min-width: 1024px)'}>
                        <div className="headerMain__items">
                            {_returnComponents(globalState.getIn(['data', 'desktop', 'MainLeft']))}
                        </div>
                        <div className="headerMain__items">
                            {_returnComponents(globalState.getIn(['data', 'desktop', 'MainCenter']))}
                        </div>
                        <div className="headerMain__items">
                            {_returnComponents(globalState.getIn(['data', 'desktop', 'MainRight']))}
                        </div>
                    </MatchMedia>
                </div>
            </div>

            <div className="headerBottom">
                <div className="container">
                    <MatchMedia mediaQuery={'(max-width: 767px)'}>
                        <div className="headerBottom__items">
                            {_returnComponents(globalState.getIn(['data', 'mobile', 'Bottom']))}
                        </div>
                    </MatchMedia>
                    <MatchMedia mediaQuery={'(min-width: 768px) and (max-width: 1023px)'}>
                        <div className="headerBottom__items">
                            {_returnComponents(globalState.getIn(['data', 'tablet', 'BottomLeft']))}
                        </div>
                        <div className="headerBottom__items">
                            {_returnComponents(globalState.getIn(['data', 'tablet', 'BottomCenter']))}
                        </div>
                        <div className="headerBottom__items">
                            {_returnComponents(globalState.getIn(['data', 'tablet', 'BottomRight']))}
                        </div>
                    </MatchMedia>
                    <MatchMedia mediaQuery={'(min-width: 1024px)'}>
                        <div className="headerBottom__items">
                            {_returnComponents(globalState.getIn(['data', 'desktop', 'BottomLeft']))}
                        </div>
                        <div className="headerBottom__items">
                            {_returnComponents(globalState.getIn(['data', 'desktop', 'BottomCenter']))}
                        </div>
                        <div className="headerBottom__items">
                            {_returnComponents(globalState.getIn(['data', 'desktop', 'BottomRight']))}
                        </div>
                    </MatchMedia>
                </div>
            </div>
        </div>
    );
};

PureHeader.propTypes = {
    globalState: PropTypes.object.isRequired
};

export default connect(
    state => ({globalState: state.headerConfig})
)(PureHeader);
