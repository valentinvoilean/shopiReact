webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(31);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _header = __webpack_require__(164);
	
	var _footer = __webpack_require__(325);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_reactDom2.default.render(_react2.default.createElement(_header.Header, null), document.getElementsByTagName('header')[0]);
	_reactDom2.default.render(_react2.default.createElement(_footer.Footer, null), document.getElementsByTagName('footer')[0]);

/***/ },

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _header = __webpack_require__(165);
	
	Object.keys(_header).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _header[key];
	    }
	  });
	});
	
	var _headerBottom = __webpack_require__(322);
	
	Object.keys(_headerBottom).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _headerBottom[key];
	    }
	  });
	});
	
	var _headerTop = __webpack_require__(323);
	
	Object.keys(_headerTop).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _headerTop[key];
	    }
	  });
	});
	
	var _headerMain = __webpack_require__(324);
	
	Object.keys(_headerMain).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _headerMain[key];
	    }
	  });
	});

/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Header = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ = __webpack_require__(164);
	
	var _myAccount = __webpack_require__(166);
	
	var _reactMatchMedia = __webpack_require__(168);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Header = exports.Header = function (_React$Component) {
	    _inherits(Header, _React$Component);
	
	    function Header(props) {
	        _classCallCheck(this, Header);
	
	        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
	
	        _this.state = {
	            nameWithQualifier: 'Mr. '
	        };
	
	        _this.data = {
	            MyAccount: {
	                mobile: { position: 'top_left', order: 1 },
	                tablet: { position: 'top_left', order: 1 },
	                desktop: { position: 'top_right', order: 1 }
	            },
	            WishList: {
	                mobile: { position: 'top_left', order: 2 },
	                tablet: { position: 'top_left', order: 2 },
	                desktop: { position: 'top_left', order: 2 }
	            }
	        };
	        return _this;
	    }
	
	    _createClass(Header, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            console.warn('mounted');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'header' },
	                _react2.default.createElement(
	                    _reactMatchMedia.MatchMedia,
	                    { mediaQuery: '(min-width: 500px)' },
	                    'More than 500px'
	                ),
	                _react2.default.createElement(
	                    _.HeaderTop,
	                    { data: this.data },
	                    _react2.default.createElement(
	                        _myAccount.MyAccount,
	                        { key: '1' },
	                        'Hi,'
	                    )
	                ),
	                _react2.default.createElement(
	                    _.HeaderMain,
	                    null,
	                    this.state.nameWithQualifier
	                ),
	                _react2.default.createElement(_.HeaderBottom, null)
	            );
	        }
	    }]);
	
	    return Header;
	}(_react2.default.Component);

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _myAccount = __webpack_require__(167);
	
	Object.keys(_myAccount).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _myAccount[key];
	    }
	  });
	});

/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
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
	
	var MyAccount = exports.MyAccount = function (_React$Component) {
	    _inherits(MyAccount, _React$Component);
	
	    function MyAccount() {
	        _classCallCheck(this, MyAccount);
	
	        return _possibleConstructorReturn(this, (MyAccount.__proto__ || Object.getPrototypeOf(MyAccount)).apply(this, arguments));
	    }
	
	    _createClass(MyAccount, [{
	        key: "returnIconBasedOnCustomer",
	        value: function returnIconBasedOnCustomer() {
	            var userLoggedIn = false;
	
	            if (userLoggedIn) {
	                return _react2.default.createElement(
	                    "div",
	                    { className: "myAccount__visibleSide" },
	                    _react2.default.createElement(
	                        "a",
	                        { href: "/account", className: "myAccount__img" },
	                        _react2.default.createElement(
	                            "div",
	                            { className: "myAccount__gravatar" },
	                            _react2.default.createElement("img", { src: "//gravatar.com/avatar/{{ customer.email | md5 }}?s=40&d=blank" })
	                        ),
	                        _react2.default.createElement(
	                            "svg",
	                            { className: "myAccount__icon" },
	                            _react2.default.createElement("use", { xlinkHref: "#user-2" })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "a",
	                        { className: "myAccount__link is-active", href: "/account" },
	                        "Hi, customer.first_name!"
	                    )
	                );
	            } else {
	                return _react2.default.createElement(
	                    "div",
	                    { className: "myAccount__visibleSide" },
	                    "My Account",
	                    _react2.default.createElement(
	                        "a",
	                        { href: "/account/register", className: "myAccount__img" },
	                        _react2.default.createElement(
	                            "svg",
	                            { className: "myAccount__icon" },
	                            _react2.default.createElement("use", { xlinkHref: "#user-1" })
	                        )
	                    )
	                );
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { className: "myAccount" },
	                _react2.default.createElement("div", { className: "myAccount__hiddenSide hidden-xs is-outside-viewport" }),
	                this.returnIconBasedOnCustomer()
	            );
	        }
	    }]);
	
	    return MyAccount;
	}(_react2.default.Component);

/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.HeaderBottom = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HeaderBottom = exports.HeaderBottom = function (_React$Component) {
	    _inherits(HeaderBottom, _React$Component);
	
	    function HeaderBottom() {
	        _classCallCheck(this, HeaderBottom);
	
	        return _possibleConstructorReturn(this, (HeaderBottom.__proto__ || Object.getPrototypeOf(HeaderBottom)).apply(this, arguments));
	    }
	
	    _createClass(HeaderBottom, [{
	        key: "_sortByPriority",
	        value: function _sortByPriority(a, b) {
	            if (a.props.priority < b.props.priority) {
	                return -1;
	            }
	            if (a.props.priority > b.props.priority) {
	                return 1;
	            }
	            return 0;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var children = this.props.children;
	
	            //children.sort(this._sortByPriority);
	
	            return _react2.default.createElement(
	                "div",
	                { className: "headerBottom" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "topInfo" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "container" },
	                        "Info"
	                    )
	                ),
	                children
	            );
	        }
	    }]);
	
	    return HeaderBottom;
	}(_react2.default.Component);

/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.HeaderTop = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HeaderTop = exports.HeaderTop = function (_React$Component) {
	    _inherits(HeaderTop, _React$Component);
	
	    function HeaderTop(props) {
	        _classCallCheck(this, HeaderTop);
	
	        var _this = _possibleConstructorReturn(this, (HeaderTop.__proto__ || Object.getPrototypeOf(HeaderTop)).call(this, props));
	
	        _this.leftSideComponents = [];
	        _this.centerComponents = [];
	        _this.rightSideComponents = [];
	        return _this;
	    }
	
	    _createClass(HeaderTop, [{
	        key: '_checkSide',
	        value: function _checkSide(child) {
	            var data = this.props.data;
	            var childName = child.type.name;
	            var mediaQuery = 'desktop';
	
	            switch (data[childName][mediaQuery].position) {
	                case 'top_left':
	                    this.leftSideComponents.push(child);
	                    break;
	                case 'top_center':
	                    this.centerComponents.push(child);
	                    break;
	                default:
	                    this.rightSideComponents.push(child);
	            }
	        }
	    }, {
	        key: '_sortCompoents',
	        value: function _sortCompoents() {
	            var children = this.props.children;
	
	            if (children.length) {
	                children.map(this._checkSide);
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
	                { className: 'headerTop' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'container noClear' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'headerTop__items' },
	                        this.leftSideComponents
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'headerTop__items' },
	                        this.centerComponents
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'headerTop__items' },
	                        this.rightSideComponents
	                    )
	                )
	            );
	        }
	    }]);
	
	    return HeaderTop;
	}(_react2.default.Component);

/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.HeaderMain = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HeaderMain = exports.HeaderMain = function (_React$Component) {
	    _inherits(HeaderMain, _React$Component);
	
	    function HeaderMain() {
	        _classCallCheck(this, HeaderMain);
	
	        return _possibleConstructorReturn(this, (HeaderMain.__proto__ || Object.getPrototypeOf(HeaderMain)).apply(this, arguments));
	    }
	
	    _createClass(HeaderMain, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { className: "headerMain" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "container" },
	                    this.props.children
	                )
	            );
	        }
	    }]);
	
	    return HeaderMain;
	}(_react2.default.Component);

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _footer = __webpack_require__(326);
	
	Object.keys(_footer).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _footer[key];
	    }
	  });
	});

/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Footer = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Footer = exports.Footer = function (_React$Component) {
	    _inherits(Footer, _React$Component);
	
	    function Footer() {
	        _classCallCheck(this, Footer);
	
	        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
	    }
	
	    _createClass(Footer, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                'I am the footer!!'
	            );
	        }
	    }]);
	
	    return Footer;
	}(_react2.default.Component);

/***/ }

});
//# sourceMappingURL=main.bundle.js.map