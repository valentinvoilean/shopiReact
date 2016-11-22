webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(411);


/***/ },

/***/ 411:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(33);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _header = __webpack_require__(412);
	
	var _footer = __webpack_require__(575);
	
	var _MyAccount = __webpack_require__(577);
	
	var _Wishlist = __webpack_require__(578);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_reactDom2.default.render(_react2.default.createElement(
	    _header.Header,
	    null,
	    _react2.default.createElement(_MyAccount.MyAccount, null),
	    _react2.default.createElement(_Wishlist.Wishlist, null)
	), document.getElementsByTagName('header')[0]);
	
	_reactDom2.default.render(_react2.default.createElement(_footer.Footer, null), document.getElementsByTagName('footer')[0]);

/***/ },

/***/ 412:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HeaderMain = exports.HeaderTop = exports.HeaderBottom = exports.Header = undefined;
	
	var _header = __webpack_require__(413);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _headerBottom = __webpack_require__(414);
	
	var _headerBottom2 = _interopRequireDefault(_headerBottom);
	
	var _headerTop = __webpack_require__(573);
	
	var _headerTop2 = _interopRequireDefault(_headerTop);
	
	var _headerMain = __webpack_require__(574);
	
	var _headerMain2 = _interopRequireDefault(_headerMain);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Header = _header2.default;
	exports.HeaderBottom = _headerBottom2.default;
	exports.HeaderTop = _headerTop2.default;
	exports.HeaderMain = _headerMain2.default;

/***/ },

/***/ 413:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ = __webpack_require__(412);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Header = function (_Component) {
	    _inherits(Header, _Component);
	
	    function Header(props) {
	        _classCallCheck(this, Header);
	
	        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
	
	        _this.data = {
	            MyAccount: {
	                mobile: { position: 'TopLeft', order: 1 },
	                tablet: { position: 'MainCenter', order: 0 },
	                desktop: { position: 'BottomRight', order: 0 }
	            },
	            Wishlist: {
	                mobile: { position: 'TopLeft', order: 0 },
	                tablet: { position: 'TopLeft', order: 0 },
	                desktop: { position: 'TopRight', order: 1 }
	            }
	        };
	        return _this;
	    }
	
	    _createClass(Header, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            //console.warn('mounted');
	        }
	    }, {
	        key: '_checkSide',
	        value: function _checkSide(child) {
	            var _this2 = this;
	
	            var data = this.data;
	            var childName = child.props.name;
	            var mediaQueries = ['mobile', 'tablet', 'desktop'];
	
	            mediaQueries.map(function (mq) {
	                var childPosition = data[childName][mq].position;
	                var childOrder = data[childName][mq].order;
	
	                _this2.HeaderData = _this2.HeaderData || {};
	                _this2.HeaderData[childPosition] = _this2.HeaderData[childPosition] || {};
	                _this2.HeaderData[childPosition][mq] = _this2.HeaderData[childPosition][mq] || [];
	                _this2.HeaderData[childPosition][mq][childOrder] = child;
	            });
	        }
	    }, {
	        key: '_sortCompoents',
	        value: function _sortCompoents() {
	            var children = this.props.children;
	
	            if (Array.isArray(children)) {
	                children.map(this._checkSide.bind(this));
	            } else {
	                this._checkSide(children);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            this._sortCompoents();
	            return _react2.default.createElement(
	                'div',
	                { className: 'header' },
	                _react2.default.createElement(_.HeaderTop, { data: this.HeaderData }),
	                _react2.default.createElement(_.HeaderMain, { data: this.HeaderData }),
	                _react2.default.createElement(_.HeaderBottom, { data: this.HeaderData })
	            );
	        }
	    }]);
	
	    return Header;
	}(_react.Component);
	
	Header.propTypes = {
	    children: _react2.default.PropTypes.array.isRequired
	};
	exports.default = Header;

/***/ },

/***/ 414:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMatchMedia = __webpack_require__(415);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var HeaderBottom = function HeaderBottom(_ref) {
	    var data = _ref.data;
	
	
	    return _react2.default.createElement(
	        'div',
	        { className: 'headerBottom' },
	        _react2.default.createElement(
	            'div',
	            { className: 'container' },
	            _react2.default.createElement(
	                _reactMatchMedia.MatchMedia,
	                { mediaQuery: '(max-width: 767px)' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'headerBottom__items' },
	                    data.BottomLeft ? data.BottomLeft.mobile : ''
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'headerBottom__items' },
	                    data.BottomCenter ? data.BottomCenter.mobile : ''
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'headerBottom__items' },
	                    data.BottomRight ? data.BottomRight.mobile : ''
	                )
	            ),
	            _react2.default.createElement(
	                _reactMatchMedia.MatchMedia,
	                { mediaQuery: '(min-width: 768px) and (max-width: 1023px)' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'headerBottom__items' },
	                    data.BottomLeft ? data.BottomLeft.tablet : ''
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'headerBottom__items' },
	                    data.BottomCenter ? data.BottomCenter.tablet : ''
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'headerBottom__items' },
	                    data.BottomRight ? data.BottomRight.tablet : ''
	                )
	            ),
	            _react2.default.createElement(
	                _reactMatchMedia.MatchMedia,
	                { mediaQuery: '(min-width: 1024px)' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'headerBottom__items' },
	                    data.BottomLeft ? data.BottomLeft.desktop : ''
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'headerBottom__items' },
	                    data.BottomCenter ? data.BottomCenter.desktop : ''
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'headerBottom__items' },
	                    data.BottomRight ? data.BottomRight.desktop : ''
	                )
	            )
	        )
	    );
	};
	
	HeaderBottom.propTypes = {
	    data: _react2.default.PropTypes.object.isRequired
	};
	
	exports.default = HeaderBottom;

/***/ },

/***/ 573:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMatchMedia = __webpack_require__(415);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HeaderTop = function (_Component) {
	    _inherits(HeaderTop, _Component);
	
	    function HeaderTop() {
	        _classCallCheck(this, HeaderTop);
	
	        return _possibleConstructorReturn(this, (HeaderTop.__proto__ || Object.getPrototypeOf(HeaderTop)).apply(this, arguments));
	    }
	
	    _createClass(HeaderTop, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate() {
	            return true;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            console.warn(this);
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'headerTop' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'container' },
	                    _react2.default.createElement(
	                        _reactMatchMedia.MatchMedia,
	                        { mediaQuery: '(max-width: 767px)' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'headerTop__items' },
	                            this.props.data.TopLeft ? this.props.data.TopLeft.mobile : ''
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'headerTop__items' },
	                            this.props.data.TopCenter ? this.props.data.TopCenter.mobile : ''
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'headerTop__items' },
	                            this.props.data.TopRight ? this.props.data.TopRight.mobile : ''
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _reactMatchMedia.MatchMedia,
	                        { mediaQuery: '(min-width: 768px) and (max-width: 1023px)' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'headerTop__items' },
	                            this.props.data.TopLeft ? this.props.data.TopLeft.tablet : ''
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'headerTop__items' },
	                            this.props.data.TopCenter ? this.props.data.TopCenter.tablet : ''
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'headerTop__items' },
	                            this.props.data.TopRight ? this.props.data.TopRight.tablet : ''
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _reactMatchMedia.MatchMedia,
	                        { mediaQuery: '(min-width: 1024px)' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'headerTop__items' },
	                            this.props.data.TopLeft ? this.props.data.TopLeft.desktop : ''
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'headerTop__items' },
	                            this.props.data.TopCenter ? this.props.data.TopCenter.desktop : ''
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'headerTop__items' },
	                            this.props.data.TopRight ? this.props.data.TopRight.desktop : ''
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return HeaderTop;
	}(_react.Component);
	
	HeaderTop.defaultProps = {
	    name: 'HeaderTop'
	};
	HeaderTop.propTypes = {
	    data: _react2.default.PropTypes.object.isRequired
	};
	exports.default = HeaderTop;

/***/ },

/***/ 574:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMatchMedia = __webpack_require__(415);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HeaderMain = function (_Component) {
	    _inherits(HeaderMain, _Component);
	
	    function HeaderMain() {
	        _classCallCheck(this, HeaderMain);
	
	        return _possibleConstructorReturn(this, (HeaderMain.__proto__ || Object.getPrototypeOf(HeaderMain)).apply(this, arguments));
	    }
	
	    _createClass(HeaderMain, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate() {
	            return true;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'headerMain' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'container' },
	                    _react2.default.createElement(
	                        _reactMatchMedia.MatchMedia,
	                        { mediaQuery: '(max-width: 767px)' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'headerMain__items' },
	                            this.props.data.MainLeft ? this.props.data.MainLeft.mobile : ''
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'headerMain__items' },
	                            this.props.data.MainCenter ? this.props.data.MainCenter.mobile : ''
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'headerMain__items' },
	                            this.props.data.MainRight ? this.props.data.MainRight.mobile : ''
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _reactMatchMedia.MatchMedia,
	                        { mediaQuery: '(min-width: 768px) and (max-width: 1023px)' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'headerMain__items' },
	                            this.props.data.MainLeft ? this.props.data.MainLeft.tablet : ''
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'headerMain__items' },
	                            this.props.data.MainCenter ? this.props.data.MainCenter.tablet : ''
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'headerMain__items' },
	                            this.props.data.MainRight ? this.props.data.MainRight.tablet : ''
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _reactMatchMedia.MatchMedia,
	                        { mediaQuery: '(min-width: 1024px)' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'headerMain__items' },
	                            this.props.data.MainLeft ? this.props.data.MainLeft.desktop : ''
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'headerMain__items' },
	                            this.props.data.MainCenter ? this.props.data.MainCenter.desktop : ''
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'headerMain__items' },
	                            this.props.data.MainRight ? this.props.data.MainRight.desktop : ''
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return HeaderMain;
	}(_react.Component);
	
	HeaderMain.defaultProps = {
	    name: 'HeaderMain'
	};
	HeaderMain.propTypes = {
	    data: _react2.default.PropTypes.object.isRequired
	};
	exports.default = HeaderMain;

/***/ },

/***/ 575:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Footer = undefined;
	
	var _footer = __webpack_require__(576);
	
	var _footer2 = _interopRequireDefault(_footer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Footer = _footer2.default;

/***/ },

/***/ 576:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = Footer;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Footer() {
	    return _react2.default.createElement(
	        'div',
	        null,
	        ' I am the footer!! '
	    );
	}
	
	Footer.displayName = 'Footer';

/***/ },

/***/ 577:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MyAccount = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MyAccount = exports.MyAccount = function (_Component) {
	    _inherits(MyAccount, _Component);
	
	    function MyAccount() {
	        _classCallCheck(this, MyAccount);
	
	        return _possibleConstructorReturn(this, (MyAccount.__proto__ || Object.getPrototypeOf(MyAccount)).apply(this, arguments));
	    }
	
	    _createClass(MyAccount, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate() {
	            return true;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'myAccount' },
	                ' My Account '
	            );
	        }
	    }]);
	
	    return MyAccount;
	}(_react.Component);
	
	MyAccount.defaultProps = {
	    name: 'MyAccount'
	};

/***/ },

/***/ 578:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Wishlist = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Wishlist = exports.Wishlist = function (_Component) {
	    _inherits(Wishlist, _Component);
	
	    function Wishlist() {
	        _classCallCheck(this, Wishlist);
	
	        return _possibleConstructorReturn(this, (Wishlist.__proto__ || Object.getPrototypeOf(Wishlist)).apply(this, arguments));
	    }
	
	    _createClass(Wishlist, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate() {
	            return true;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                ' Wishlist '
	            );
	        }
	    }]);
	
	    return Wishlist;
	}(_react.Component);
	
	Wishlist.defaultProps = {
	    name: 'Wishlist'
	};

/***/ }

});
//# sourceMappingURL=main.js.map