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
	                desktop: { position: 'top_center', order: 1 }
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
	                this.props.children
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
	            var _this2 = this;
	
	            var children = this.props.children;
	
	            if (children.length) {
	                children.map(function (child) {
	                    _this2._checkSide(child);
	                });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVhZGVyL2hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL215LWFjY291bnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL215LWFjY291bnQvbXktYWNjb3VudC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlYWRlci9oZWFkZXItYm90dG9tLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVhZGVyL2hlYWRlci10b3AuanN4Iiwid2VicGFjazovLy8uL3NyYy9qcy9oZWFkZXIvaGVhZGVyLW1haW4uanN4Iiwid2VicGFjazovLy8uL3NyYy9qcy9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zvb3Rlci9mb290ZXIuanN4Il0sIm5hbWVzIjpbInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJIZWFkZXIiLCJwcm9wcyIsInN0YXRlIiwibmFtZVdpdGhRdWFsaWZpZXIiLCJkYXRhIiwiTXlBY2NvdW50IiwibW9iaWxlIiwicG9zaXRpb24iLCJvcmRlciIsInRhYmxldCIsImRlc2t0b3AiLCJXaXNoTGlzdCIsImNvbnNvbGUiLCJ3YXJuIiwiQ29tcG9uZW50IiwidXNlckxvZ2dlZEluIiwicmV0dXJuSWNvbkJhc2VkT25DdXN0b21lciIsIkhlYWRlckJvdHRvbSIsImEiLCJiIiwicHJpb3JpdHkiLCJjaGlsZHJlbiIsIkhlYWRlclRvcCIsImxlZnRTaWRlQ29tcG9uZW50cyIsImNlbnRlckNvbXBvbmVudHMiLCJyaWdodFNpZGVDb21wb25lbnRzIiwiY2hpbGQiLCJjaGlsZE5hbWUiLCJ0eXBlIiwibmFtZSIsIm1lZGlhUXVlcnkiLCJwdXNoIiwibGVuZ3RoIiwibWFwIiwiX2NoZWNrU2lkZSIsIl9zb3J0Q29tcG9lbnRz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QUFLQztBQUF4QztBQUhKO0FBREosY0FESjtBQVNIOzs7O0dBcEQwQixnQkFBTVgsUzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZyQzs7Ozs7Ozs7Ozs7O0tBRWFzQixVLFdBQUFBLFU7Ozs7Ozs7Ozs7O2tDQUNBO0FBQ0wsb0JBQ0k7QUFBQTtBQUFBLG1CQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSx1QkFBSyxXQUFVLFdBQWY7QUFBNEIsMEJBQUtuQyxLQUFMLENBQVdvQjtBQUF2QztBQURKLGNBREo7QUFLSDs7OztHQVAyQixnQkFBTVAsUzs7Ozs7Ozs7Ozs7Ozs7O0FDRnRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztLQUVhdUIsTSxXQUFBQSxNOzs7Ozs7Ozs7OztrQ0FDQTtBQUNMLG9CQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQUtIOzs7O0dBUHVCLGdCQUFNdkIsUyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi9mb290ZXInO1xuXG5SZWFjdERPTS5yZW5kZXIoPEhlYWRlci8+LCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZGVyJylbMF0pO1xuUmVhY3RET00ucmVuZGVyKDxGb290ZXIvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvb3RlcicpWzBdKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL21haW4uanN4XG4gKiovIiwiZXhwb3J0ICogZnJvbSAnLi9oZWFkZXIuanN4JztcbmV4cG9ydCAqIGZyb20gJy4vaGVhZGVyLWJvdHRvbS5qc3gnO1xuZXhwb3J0ICogZnJvbSAnLi9oZWFkZXItdG9wLmpzeCc7XG5leHBvcnQgKiBmcm9tICcuL2hlYWRlci1tYWluLmpzeCc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9oZWFkZXIvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge0hlYWRlclRvcCwgSGVhZGVyQm90dG9tLCBIZWFkZXJNYWlufSBmcm9tICcuLyc7XG5pbXBvcnQge015QWNjb3VudH0gZnJvbSAnLi4vbXktYWNjb3VudCc7XG5cbmV4cG9ydCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbmFtZVdpdGhRdWFsaWZpZXI6ICdNci4gJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgICAgICAgIE15QWNjb3VudDoge1xuICAgICAgICAgICAgICAgIG1vYmlsZToge3Bvc2l0aW9uOiAndG9wX2xlZnQnLCBvcmRlcjogMX0sXG4gICAgICAgICAgICAgICAgdGFibGV0OiB7cG9zaXRpb246ICd0b3BfbGVmdCcsIG9yZGVyOiAxfSxcbiAgICAgICAgICAgICAgICBkZXNrdG9wOiB7cG9zaXRpb246ICd0b3BfY2VudGVyJywgb3JkZXI6IDF9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgV2lzaExpc3Q6IHtcbiAgICAgICAgICAgICAgICBtb2JpbGU6IHtwb3NpdGlvbjogJ3RvcF9sZWZ0Jywgb3JkZXI6IDJ9LFxuICAgICAgICAgICAgICAgIHRhYmxldDoge3Bvc2l0aW9uOiAndG9wX2xlZnQnLCBvcmRlcjogMn0sXG4gICAgICAgICAgICAgICAgZGVza3RvcDoge3Bvc2l0aW9uOiAndG9wX2xlZnQnLCBvcmRlcjogMn1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdtb3VudGVkJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyVG9wIGRhdGE9e3RoaXMuZGF0YX0+XG4gICAgICAgICAgICAgICAgICAgIDxNeUFjY291bnQga2V5PVwiMVwiPkhpLDwvTXlBY2NvdW50PlxuICAgICAgICAgICAgICAgIDwvSGVhZGVyVG9wPlxuICAgICAgICAgICAgICAgIDxIZWFkZXJNYWluPnt0aGlzLnN0YXRlLm5hbWVXaXRoUXVhbGlmaWVyfTwvSGVhZGVyTWFpbj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyQm90dG9tPjwvSGVhZGVyQm90dG9tPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvaGVhZGVyL2hlYWRlci5qc3hcbiAqKi8iLCJleHBvcnQgKiBmcm9tICcuL215LWFjY291bnQuanN4JztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL215LWFjY291bnQvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY2xhc3MgTXlBY2NvdW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHJldHVybkljb25CYXNlZE9uQ3VzdG9tZXIoKSB7XG4gICAgICAgIGNvbnN0IHVzZXJMb2dnZWRJbiA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh1c2VyTG9nZ2VkSW4pIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteUFjY291bnRfX3Zpc2libGVTaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvYWNjb3VudFwiIGNsYXNzTmFtZT1cIm15QWNjb3VudF9faW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15QWNjb3VudF9fZ3JhdmF0YXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi8vZ3JhdmF0YXIuY29tL2F2YXRhci97eyBjdXN0b21lci5lbWFpbCB8IG1kNSB9fT9zPTQwJmQ9YmxhbmtcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwibXlBY2NvdW50X19pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGlua0hyZWY9XCIjdXNlci0yXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm15QWNjb3VudF9fbGluayBpcy1hY3RpdmVcIiBocmVmPVwiL2FjY291bnRcIj5IaSwgY3VzdG9tZXIuZmlyc3RfbmFtZSE8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15QWNjb3VudF9fdmlzaWJsZVNpZGVcIj5NeSBBY2NvdW50XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvYWNjb3VudC9yZWdpc3RlclwiIGNsYXNzTmFtZT1cIm15QWNjb3VudF9faW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cIm15QWNjb3VudF9faWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPVwiI3VzZXItMVwiPjwvdXNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15QWNjb3VudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlBY2NvdW50X19oaWRkZW5TaWRlIGhpZGRlbi14cyBpcy1vdXRzaWRlLXZpZXdwb3J0XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3RoaXMucmV0dXJuSWNvbkJhc2VkT25DdXN0b21lcigpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvbXktYWNjb3VudC9teS1hY2NvdW50LmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjbGFzcyBIZWFkZXJCb3R0b20gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgX3NvcnRCeVByaW9yaXR5KGEsIGIpIHtcbiAgICAgICAgaWYgKGEucHJvcHMucHJpb3JpdHkgPCBiLnByb3BzLnByaW9yaXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEucHJvcHMucHJpb3JpdHkgPiBiLnByb3BzLnByaW9yaXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG5cbiAgICAgICAgLy9jaGlsZHJlbi5zb3J0KHRoaXMuX3NvcnRCeVByaW9yaXR5KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJCb3R0b21cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcEluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5JbmZvPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvaGVhZGVyL2hlYWRlci1ib3R0b20uanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNsYXNzIEhlYWRlclRvcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5sZWZ0U2lkZUNvbXBvbmVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5jZW50ZXJDb21wb25lbnRzID0gW107XG4gICAgICAgIHRoaXMucmlnaHRTaWRlQ29tcG9uZW50cyA9IFtdO1xuICAgIH1cblxuICAgIF9jaGVja1NpZGUoY2hpbGQpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICAgICAgY29uc3QgY2hpbGROYW1lID0gY2hpbGQudHlwZS5uYW1lO1xuICAgICAgICBjb25zdCBtZWRpYVF1ZXJ5ID0gJ2Rlc2t0b3AnO1xuXG4gICAgICAgIHN3aXRjaCAoZGF0YVtjaGlsZE5hbWVdW21lZGlhUXVlcnldLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICBjYXNlICd0b3BfbGVmdCc6XG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0U2lkZUNvbXBvbmVudHMucHVzaChjaGlsZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0b3BfY2VudGVyJzpcbiAgICAgICAgICAgICAgICB0aGlzLmNlbnRlckNvbXBvbmVudHMucHVzaChjaGlsZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0IDpcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0U2lkZUNvbXBvbmVudHMucHVzaChjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfc29ydENvbXBvZW50cygpIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXG4gICAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrU2lkZShjaGlsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrU2lkZShjaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuX3NvcnRDb21wb2VudHMoKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJUb3BcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBub0NsZWFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyVG9wX19pdGVtc1wiPnt0aGlzLmxlZnRTaWRlQ29tcG9uZW50c308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJUb3BfX2l0ZW1zXCI+e3RoaXMuY2VudGVyQ29tcG9uZW50c308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJUb3BfX2l0ZW1zXCI+e3RoaXMucmlnaHRTaWRlQ29tcG9uZW50c308L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9oZWFkZXIvaGVhZGVyLXRvcC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY2xhc3MgSGVhZGVyTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJNYWluXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9oZWFkZXIvaGVhZGVyLW1haW4uanN4XG4gKiovIiwiZXhwb3J0ICogZnJvbSAnLi9mb290ZXIuanN4JztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2Zvb3Rlci9pbmRleC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgSSBhbSB0aGUgZm9vdGVyISFcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2Zvb3Rlci9mb290ZXIuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==