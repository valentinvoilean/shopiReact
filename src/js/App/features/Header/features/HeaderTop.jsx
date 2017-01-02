import React, {Component, PropTypes} from 'react';
import {MatchMedia} from 'react-match-media';

import * as HeaderComponents from '../components';

export default class HeaderTop extends Component {
    static propTypes = {
        globalState: PropTypes.object.isRequired
    };

    shouldComponentUpdate() {
        return true;
    }

    _returnComponents(data) {
        return data.toJS().map((key, index) => {
            if (HeaderComponents[key]) {
                return React.createElement(HeaderComponents[key], {key: index});
            } else if (key.indexOf('CustomLink') !== -1) {
                return React.createElement(HeaderComponents.CustomLink, {key: index});
            }
            else {
                return null;
            }
        });
    }

    render() {
        const {globalState} = this.props;

        return (
            <div className="headerTop">
                <div className="container">
                    <MatchMedia mediaQuery={'(max-width: 767px)'}>
                        <div className="headerTop__items">
                            {this._returnComponents(globalState.getIn(['data', 'mobile', 'TopLeft']))}
                        </div>
                        <div className="headerTop__items">
                            {this._returnComponents(globalState.getIn(['data', 'mobile', 'TopCenter']))}
                        </div>
                        <div className="headerTop__items">
                            {this._returnComponents(globalState.getIn(['data', 'mobile', 'TopRight']))}
                        </div>
                    </MatchMedia>
                    <MatchMedia mediaQuery={'(min-width: 768px) and (max-width: 1023px)'}>
                        <div className="headerTop__items">
                            {this._returnComponents(globalState.getIn(['data', 'tablet', 'TopLeft']))}
                        </div>
                        <div className="headerTop__items">
                            {this._returnComponents(globalState.getIn(['data', 'tablet', 'TopCenter']))}
                        </div>
                        <div className="headerTop__items">
                            {this._returnComponents(globalState.getIn(['data', 'tablet', 'TopRight']))}
                        </div>
                    </MatchMedia>
                    <MatchMedia mediaQuery={'(min-width: 1024px)'}>
                        <div className="headerTop__items">
                            {this._returnComponents(globalState.getIn(['data', 'desktop', 'TopLeft']))}
                        </div>
                        <div className="headerTop__items">
                            {this._returnComponents(globalState.getIn(['data', 'desktop', 'TopCenter']))}
                        </div>
                        <div className="headerTop__items">
                            {this._returnComponents(globalState.getIn(['data', 'desktop', 'TopRight']))}
                        </div>
                    </MatchMedia>
                </div>
            </div>
        );
    }
}


