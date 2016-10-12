import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './header';
import { Footer } from './footer';

ReactDOM.render(<Header/>, document.getElementsByTagName('header')[0]);
ReactDOM.render(<Footer/>, document.getElementsByTagName('footer')[0]);
