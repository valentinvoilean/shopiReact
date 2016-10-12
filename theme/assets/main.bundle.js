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
	
	var _footer = __webpack_require__(171);
	
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
	
	var _headerBottom = __webpack_require__(168);
	
	Object.keys(_headerBottom).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _headerBottom[key];
	    }
	  });
	});
	
	var _headerTop = __webpack_require__(169);
	
	Object.keys(_headerTop).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _headerTop[key];
	    }
	  });
	});
	
	var _headerMain = __webpack_require__(170);
	
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

/***/ 168:
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

/***/ 169:
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

/***/ 170:
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

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _footer = __webpack_require__(172);
	
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

/***/ 172:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVhZGVyL2hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL215LWFjY291bnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL215LWFjY291bnQvbXktYWNjb3VudC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlYWRlci9oZWFkZXItYm90dG9tLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVhZGVyL2hlYWRlci10b3AuanN4Iiwid2VicGFjazovLy8uL3NyYy9qcy9oZWFkZXIvaGVhZGVyLW1haW4uanN4Iiwid2VicGFjazovLy8uL3NyYy9qcy9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zvb3Rlci9mb290ZXIuanN4Il0sIm5hbWVzIjpbInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJIZWFkZXIiLCJwcm9wcyIsInN0YXRlIiwibmFtZVdpdGhRdWFsaWZpZXIiLCJkYXRhIiwiTXlBY2NvdW50IiwibW9iaWxlIiwicG9zaXRpb24iLCJvcmRlciIsInRhYmxldCIsImRlc2t0b3AiLCJXaXNoTGlzdCIsImNvbnNvbGUiLCJ3YXJuIiwiQ29tcG9uZW50IiwidXNlckxvZ2dlZEluIiwicmV0dXJuSWNvbkJhc2VkT25DdXN0b21lciIsIkhlYWRlckJvdHRvbSIsImEiLCJiIiwicHJpb3JpdHkiLCJjaGlsZHJlbiIsIkhlYWRlclRvcCIsImxlZnRTaWRlQ29tcG9uZW50cyIsImNlbnRlckNvbXBvbmVudHMiLCJyaWdodFNpZGVDb21wb25lbnRzIiwiY2hpbGQiLCJjaGlsZE5hbWUiLCJ0eXBlIiwibmFtZSIsIm1lZGlhUXVlcnkiLCJwdXNoIiwibGVuZ3RoIiwibWFwIiwiX2NoZWNrU2lkZSIsIl9zb3J0Q29tcG9lbnRz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Ozs7Ozs7Ozs7O0tBRWFzQixVLFdBQUFBLFU7Ozs7Ozs7Ozs7O2tDQUNBO0FBQ0wsb0JBQ0k7QUFBQTtBQUFBLG1CQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSx1QkFBSyxXQUFVLFdBQWY7QUFBNEIsMEJBQUtuQyxLQUFMLENBQVdvQjtBQUF2QztBQURKLGNBREo7QUFLSDs7OztHQVAyQixnQkFBTVAsUzs7Ozs7Ozs7Ozs7Ozs7O0FDRnRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztLQUVhdUIsTSxXQUFBQSxNOzs7Ozs7Ozs7OztrQ0FDQTtBQUNMLG9CQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQUtIOzs7O0dBUHVCLGdCQUFNdkIsUyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi9mb290ZXInO1xuXG5SZWFjdERPTS5yZW5kZXIoPEhlYWRlci8+LCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZGVyJylbMF0pO1xuUmVhY3RET00ucmVuZGVyKDxGb290ZXIvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvb3RlcicpWzBdKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL21haW4uanN4XG4gKiovIiwiZXhwb3J0ICogZnJvbSAnLi9oZWFkZXIuanN4JztcbmV4cG9ydCAqIGZyb20gJy4vaGVhZGVyLWJvdHRvbS5qc3gnO1xuZXhwb3J0ICogZnJvbSAnLi9oZWFkZXItdG9wLmpzeCc7XG5leHBvcnQgKiBmcm9tICcuL2hlYWRlci1tYWluLmpzeCc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9oZWFkZXIvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge0hlYWRlclRvcCwgSGVhZGVyQm90dG9tLCBIZWFkZXJNYWlufSBmcm9tICcuLyc7XG5pbXBvcnQge015QWNjb3VudH0gZnJvbSAnLi4vbXktYWNjb3VudCc7XG5cbmV4cG9ydCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbmFtZVdpdGhRdWFsaWZpZXI6ICdNci4gJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgICAgICAgIE15QWNjb3VudDoge1xuICAgICAgICAgICAgICAgIG1vYmlsZToge3Bvc2l0aW9uOiAndG9wX2xlZnQnLCBvcmRlcjogMX0sXG4gICAgICAgICAgICAgICAgdGFibGV0OiB7cG9zaXRpb246ICd0b3BfbGVmdCcsIG9yZGVyOiAxfSxcbiAgICAgICAgICAgICAgICBkZXNrdG9wOiB7cG9zaXRpb246ICd0b3BfcmlnaHQnLCBvcmRlcjogMX1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBXaXNoTGlzdDoge1xuICAgICAgICAgICAgICAgIG1vYmlsZToge3Bvc2l0aW9uOiAndG9wX2xlZnQnLCBvcmRlcjogMn0sXG4gICAgICAgICAgICAgICAgdGFibGV0OiB7cG9zaXRpb246ICd0b3BfbGVmdCcsIG9yZGVyOiAyfSxcbiAgICAgICAgICAgICAgICBkZXNrdG9wOiB7cG9zaXRpb246ICd0b3BfbGVmdCcsIG9yZGVyOiAyfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ21vdW50ZWQnKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxIZWFkZXJUb3AgZGF0YT17dGhpcy5kYXRhfT5cbiAgICAgICAgICAgICAgICAgICAgPE15QWNjb3VudCBrZXk9XCIxXCI+SGksPC9NeUFjY291bnQ+XG4gICAgICAgICAgICAgICAgPC9IZWFkZXJUb3A+XG4gICAgICAgICAgICAgICAgPEhlYWRlck1haW4+e3RoaXMuc3RhdGUubmFtZVdpdGhRdWFsaWZpZXJ9PC9IZWFkZXJNYWluPlxuICAgICAgICAgICAgICAgIDxIZWFkZXJCb3R0b20+PC9IZWFkZXJCb3R0b20+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9oZWFkZXIvaGVhZGVyLmpzeFxuICoqLyIsImV4cG9ydCAqIGZyb20gJy4vbXktYWNjb3VudC5qc3gnO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvbXktYWNjb3VudC9pbmRleC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjbGFzcyBNeUFjY291bnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmV0dXJuSWNvbkJhc2VkT25DdXN0b21lcigpIHtcbiAgICAgICAgY29uc3QgdXNlckxvZ2dlZEluID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHVzZXJMb2dnZWRJbikge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15QWNjb3VudF9fdmlzaWJsZVNpZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9hY2NvdW50XCIgY2xhc3NOYW1lPVwibXlBY2NvdW50X19pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlBY2NvdW50X19ncmF2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLy9ncmF2YXRhci5jb20vYXZhdGFyL3t7IGN1c3RvbWVyLmVtYWlsIHwgbWQ1IH19P3M9NDAmZD1ibGFua1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJteUFjY291bnRfX2ljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rSHJlZj1cIiN1c2VyLTJcIj48L3VzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXlBY2NvdW50X19saW5rIGlzLWFjdGl2ZVwiIGhyZWY9XCIvYWNjb3VudFwiPkhpLCBjdXN0b21lci5maXJzdF9uYW1lITwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlBY2NvdW50X192aXNpYmxlU2lkZVwiPk15IEFjY291bnRcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9hY2NvdW50L3JlZ2lzdGVyXCIgY2xhc3NOYW1lPVwibXlBY2NvdW50X19pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwibXlBY2NvdW50X19pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGlua0hyZWY9XCIjdXNlci0xXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlBY2NvdW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteUFjY291bnRfX2hpZGRlblNpZGUgaGlkZGVuLXhzIGlzLW91dHNpZGUtdmlld3BvcnRcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZXR1cm5JY29uQmFzZWRPbkN1c3RvbWVyKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9teS1hY2NvdW50L215LWFjY291bnQuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNsYXNzIEhlYWRlckJvdHRvbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBfc29ydEJ5UHJpb3JpdHkoYSwgYikge1xuICAgICAgICBpZiAoYS5wcm9wcy5wcmlvcml0eSA8IGIucHJvcHMucHJpb3JpdHkpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYS5wcm9wcy5wcmlvcml0eSA+IGIucHJvcHMucHJpb3JpdHkpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcblxuICAgICAgICAvL2NoaWxkcmVuLnNvcnQodGhpcy5fc29ydEJ5UHJpb3JpdHkpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlckJvdHRvbVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wSW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPkluZm88L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvaGVhZGVyL2hlYWRlci1ib3R0b20uanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNsYXNzIEhlYWRlclRvcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5sZWZ0U2lkZUNvbXBvbmVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5jZW50ZXJDb21wb25lbnRzID0gW107XG4gICAgICAgIHRoaXMucmlnaHRTaWRlQ29tcG9uZW50cyA9IFtdO1xuICAgIH1cblxuICAgIF9jaGVja1NpZGUoY2hpbGQpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICAgICAgY29uc3QgY2hpbGROYW1lID0gY2hpbGQudHlwZS5uYW1lO1xuICAgICAgICBjb25zdCBtZWRpYVF1ZXJ5ID0gJ2Rlc2t0b3AnO1xuXG4gICAgICAgIHN3aXRjaCAoZGF0YVtjaGlsZE5hbWVdW21lZGlhUXVlcnldLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICBjYXNlICd0b3BfbGVmdCc6XG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0U2lkZUNvbXBvbmVudHMucHVzaChjaGlsZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0b3BfY2VudGVyJzpcbiAgICAgICAgICAgICAgICB0aGlzLmNlbnRlckNvbXBvbmVudHMucHVzaChjaGlsZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0IDpcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0U2lkZUNvbXBvbmVudHMucHVzaChjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfc29ydENvbXBvZW50cygpIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXG4gICAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuLm1hcCh0aGlzLl9jaGVja1NpZGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tTaWRlKGNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5fc29ydENvbXBvZW50cygpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclRvcFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG5vQ2xlYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJUb3BfX2l0ZW1zXCI+e3RoaXMubGVmdFNpZGVDb21wb25lbnRzfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclRvcF9faXRlbXNcIj57dGhpcy5jZW50ZXJDb21wb25lbnRzfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclRvcF9faXRlbXNcIj57dGhpcy5yaWdodFNpZGVDb21wb25lbnRzfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2hlYWRlci9oZWFkZXItdG9wLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjbGFzcyBIZWFkZXJNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlck1haW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2hlYWRlci9oZWFkZXItbWFpbi5qc3hcbiAqKi8iLCJleHBvcnQgKiBmcm9tICcuL2Zvb3Rlci5qc3gnO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvZm9vdGVyL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBJIGFtIHRoZSBmb290ZXIhIVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvZm9vdGVyL2Zvb3Rlci5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9