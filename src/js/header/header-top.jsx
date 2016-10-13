import React from 'react';
import { MatchMedia } from 'react-match-media';

export class HeaderTop extends React.Component {
    static defaultProps = {
        name: 'HeaderTop'
    };

    render() {
        console.log(this);

        return (
            <div className="headerTop">
                <div className="container noClear">
                    <MatchMedia mediaQuery={'(max-width: 767px)'}>
                        <div className="headerTop__items">{this.props.data.leftSide.mobile}</div>
                        <div className="headerTop__items">{this.props.data.center.mobile}</div>
                        <div className="headerTop__items">{this.props.data.rightSide.mobile}</div>
                    </MatchMedia>
                    <MatchMedia mediaQuery={'(min-width: 768px) and (max-width: 1023px)'}>
                        <div className="headerTop__items">{this.props.data.leftSide.tablet}</div>
                        <div className="headerTop__items">{this.props.data.center.tablet}</div>
                        <div className="headerTop__items">{this.props.data.rightSide.tablet}</div>
                    </MatchMedia>
                    <MatchMedia mediaQuery={'(min-width: 1024px)'}>
                        <div className="headerTop__items">{this.props.data.leftSide.desktop}</div>
                        <div className="headerTop__items">{this.props.data.center.desktop}</div>
                        <div className="headerTop__items">{this.props.data.rightSide.desktop}</div>
                    </MatchMedia>
                </div>
            </div>
        );
    }
}


