import React, {Component, PropTypes} from 'react';
import {MatchMedia} from 'react-match-media';

import * as HeaderComponents from '../components';

export default class HeaderMain extends Component {
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
            <div className="headerMain">
                <div className="container">
                    <MatchMedia mediaQuery={'(max-width: 767px)'}>
                        <div className="headerMain__items">
                            {this._returnComponents(globalState.getIn(['data', 'mobile', 'Main']))}
                        </div>
                    </MatchMedia>
                    <MatchMedia mediaQuery={'(min-width: 768px) and (max-width: 1023px)'}>
                        <div className="headerMain__items">
                            {this._returnComponents(globalState.getIn(['data', 'tablet', 'MainLeft']))}
                        </div>
                        <div className="headerMain__items">
                            {this._returnComponents(globalState.getIn(['data', 'tablet', 'MainCenter']))}
                        </div>
                        <div className="headerMain__items">
                            {this._returnComponents(globalState.getIn(['data', 'tablet', 'MainRight']))}
                        </div>
                    </MatchMedia>
                    <MatchMedia mediaQuery={'(min-width: 1024px)'}>
                        <div className="headerMain__items">
                            {this._returnComponents(globalState.getIn(['data', 'desktop', 'MainLeft']))}
                        </div>
                        <div className="headerMain__items">
                            {this._returnComponents(globalState.getIn(['data', 'desktop', 'MainCenter']))}
                        </div>
                        <div className="headerMain__items">
                            {this._returnComponents(globalState.getIn(['data', 'desktop', 'MainRight']))}
                        </div>
                    </MatchMedia>
                </div>
            </div>
        );
    }
}


