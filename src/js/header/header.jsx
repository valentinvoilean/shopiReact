import React from 'react';

import HeaderTop from './header-top.jsx';
import HeaderMain from './header-main.jsx';
import HeaderBottom from './header-bottom.jsx';

export class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nameWithQualifier: 'Mr. '
        };
    }

    componentDidMount() {
        console.warn('mounted');
    }

    render() {
        return (
            <div className="header">
                <HeaderTop className='test'>This is the text that must be shown</HeaderTop>
                <HeaderMain>{this.state.nameWithQualifier}</HeaderMain>
                <HeaderBottom>
                    <HeaderTop priority="2" >This is the text that must be shown</HeaderTop>
                    <div priority="1" className="test">sdsdads</div>
                </HeaderBottom>
            </div>
        );
    }
}
