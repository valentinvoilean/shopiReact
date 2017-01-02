import React, {Component, PropTypes} from 'react';
import {MatchMedia} from 'react-match-media';

import * as HeaderComponents from '../components';

export default class HeaderBottom extends Component {
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
            <div className="headerBottom">
                <div className="container">
                    <MatchMedia mediaQuery={'(max-width: 767px)'}>
                        <div className="headerBottom__items">
                            {this._returnComponents(globalState.getIn(['data', 'mobile', 'Bottom']))}
                        </div>
                    </MatchMedia>
                    <MatchMedia mediaQuery={'(min-width: 768px) and (max-width: 1023px)'}>
                        <div className="headerBottom__items">
                            {this._returnComponents(globalState.getIn(['data', 'tablet', 'BottomLeft']))}
                        </div>
                        <div className="headerBottom__items">
                            {this._returnComponents(globalState.getIn(['data', 'tablet', 'BottomCenter']))}
                        </div>
                        <div className="headerBottom__items">
                            {this._returnComponents(globalState.getIn(['data', 'tablet', 'BottomRight']))}
                        </div>
                    </MatchMedia>
                    <MatchMedia mediaQuery={'(min-width: 1024px)'}>
                        <div className="headerBottom__items">
                            {this._returnComponents(globalState.getIn(['data', 'desktop', 'BottomLeft']))}
                        </div>
                        <div className="headerBottom__items">
                            {this._returnComponents(globalState.getIn(['data', 'desktop', 'BottomCenter']))}
                        </div>
                        <div className="headerBottom__items">
                            {this._returnComponents(globalState.getIn(['data', 'desktop', 'BottomRight']))}
                        </div>
                    </MatchMedia>
                </div>
            </div>
        );
    }
}
