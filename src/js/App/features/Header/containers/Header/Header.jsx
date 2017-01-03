import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {MatchMedia} from 'react-match-media';
import uuid from 'uuid';

import * as HeaderComponents from 'features/Header/components';

const propTypes = {
    globalState: PropTypes.object.isRequired
};

const defaultProps = {
    globalState: {}
};

export function PureHeader({globalState}) {

    const returnComponents = (data) => {
        return data.toJS().map((key) => {
            if (HeaderComponents[key]) {
                return React.createElement(HeaderComponents[key], {key: uuid.v4()});
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
                            {returnComponents(globalState.getIn(['data', 'mobile', 'TopLeft']))}
                        </div>
                        <div className="headerTop__items">
                            {returnComponents(globalState.getIn(['data', 'mobile', 'TopCenter']))}
                        </div>
                        <div className="headerTop__items">
                            {returnComponents(globalState.getIn(['data', 'mobile', 'TopRight']))}
                        </div>
                    </MatchMedia>
                    <MatchMedia mediaQuery={'(min-width: 768px) and (max-width: 1023px)'}>
                        <div className="headerTop__items">
                            {returnComponents(globalState.getIn(['data', 'tablet', 'TopLeft']))}
                        </div>
                        <div className="headerTop__items">
                            {returnComponents(globalState.getIn(['data', 'tablet', 'TopCenter']))}
                        </div>
                        <div className="headerTop__items">
                            {returnComponents(globalState.getIn(['data', 'tablet', 'TopRight']))}
                        </div>
                    </MatchMedia>
                    <MatchMedia mediaQuery={'(min-width: 1024px)'}>
                        <div className="headerTop__items">
                            {returnComponents(globalState.getIn(['data', 'desktop', 'TopLeft']))}
                        </div>
                        <div className="headerTop__items">
                            {returnComponents(globalState.getIn(['data', 'desktop', 'TopCenter']))}
                        </div>
                        <div className="headerTop__items">
                            {returnComponents(globalState.getIn(['data', 'desktop', 'TopRight']))}
                        </div>
                    </MatchMedia>
                </div>
            </div>

            <div className="headerMain">
                <div className="container">
                    <MatchMedia mediaQuery={'(max-width: 767px)'}>
                        <div className="headerMain__items">
                            {returnComponents(globalState.getIn(['data', 'mobile', 'Main']))}
                        </div>
                    </MatchMedia>
                    <MatchMedia mediaQuery={'(min-width: 768px) and (max-width: 1023px)'}>
                        <div className="headerMain__items">
                            {returnComponents(globalState.getIn(['data', 'tablet', 'MainLeft']))}
                        </div>
                        <div className="headerMain__items">
                            {returnComponents(globalState.getIn(['data', 'tablet', 'MainCenter']))}
                        </div>
                        <div className="headerMain__items">
                            {returnComponents(globalState.getIn(['data', 'tablet', 'MainRight']))}
                        </div>
                    </MatchMedia>
                    <MatchMedia mediaQuery={'(min-width: 1024px)'}>
                        <div className="headerMain__items">
                            {returnComponents(globalState.getIn(['data', 'desktop', 'MainLeft']))}
                        </div>
                        <div className="headerMain__items">
                            {returnComponents(globalState.getIn(['data', 'desktop', 'MainCenter']))}
                        </div>
                        <div className="headerMain__items">
                            {returnComponents(globalState.getIn(['data', 'desktop', 'MainRight']))}
                        </div>
                    </MatchMedia>
                </div>
            </div>

            <div className="headerBottom">
                <div className="container">
                    <MatchMedia mediaQuery={'(max-width: 767px)'}>
                        <div className="headerBottom__items">
                            {returnComponents(globalState.getIn(['data', 'mobile', 'Bottom']))}
                        </div>
                    </MatchMedia>
                    <MatchMedia mediaQuery={'(min-width: 768px) and (max-width: 1023px)'}>
                        <div className="headerBottom__items">
                            {returnComponents(globalState.getIn(['data', 'tablet', 'BottomLeft']))}
                        </div>
                        <div className="headerBottom__items">
                            {returnComponents(globalState.getIn(['data', 'tablet', 'BottomCenter']))}
                        </div>
                        <div className="headerBottom__items">
                            {returnComponents(globalState.getIn(['data', 'tablet', 'BottomRight']))}
                        </div>
                    </MatchMedia>
                    <MatchMedia mediaQuery={'(min-width: 1024px)'}>
                        <div className="headerBottom__items">
                            {returnComponents(globalState.getIn(['data', 'desktop', 'BottomLeft']))}
                        </div>
                        <div className="headerBottom__items">
                            {returnComponents(globalState.getIn(['data', 'desktop', 'BottomCenter']))}
                        </div>
                        <div className="headerBottom__items">
                            {returnComponents(globalState.getIn(['data', 'desktop', 'BottomRight']))}
                        </div>
                    </MatchMedia>
                </div>
            </div>
        </div>
    );
}

PureHeader.propTypes = propTypes;
PureHeader.defaultProps = defaultProps;

export default connect(
    state => ({globalState: state.headerConfig})
)(PureHeader);
