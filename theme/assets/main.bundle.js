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
	
	var _footer = __webpack_require__(169);
	
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
	
	var _headerTop = __webpack_require__(166);
	
	Object.keys(_headerTop).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _headerTop[key];
	    }
	  });
	});
	
	var _headerMain = __webpack_require__(167);
	
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
	
	var _headerTop = __webpack_require__(166);
	
	var _headerTop2 = _interopRequireDefault(_headerTop);
	
	var _headerMain = __webpack_require__(167);
	
	var _headerMain2 = _interopRequireDefault(_headerMain);
	
	var _headerBottom = __webpack_require__(168);
	
	var _headerBottom2 = _interopRequireDefault(_headerBottom);
	
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
	            myAccount: {
	                mobile: { position: 'top-left', order: 1 },
	                tablet: { position: 'top-left', order: 1 },
	                desktop: { position: 'top-left', order: 1 }
	            },
	            wishList: {
	                mobile: { position: 'top-left', order: 2 },
	                tablet: { position: 'top-left', order: 2 },
	                desktop: { position: 'top-left', order: 2 }
	            }
	        };
	
	        _this.data2 = {
	            mobile: {
	                myAccount: { position: 'top-left', order: 1 },
	                wishlist: { position: 'top-left', order: 2 }
	            },
	            tablet: {
	                myAccount: { position: 'top-left', order: 1 },
	                wishlist: { position: 'top-left', order: 2 }
	            },
	            desktop: {
	                myAccount: { position: 'top-left', order: 1 },
	                wishlist: { position: 'top-left', order: 2 }
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
	                _react2.default.createElement(_headerTop2.default, { data: this.data }),
	                _react2.default.createElement(
	                    _headerMain2.default,
	                    null,
	                    this.state.nameWithQualifier
	                ),
	                _react2.default.createElement(
	                    _headerBottom2.default,
	                    null,
	                    _react2.default.createElement(
	                        _headerTop2.default,
	                        { priority: '2' },
	                        'This is the text that must be shown'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { priority: '1', className: 'test' },
	                        'sdsdads'
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Header;
	}(_react2.default.Component);

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _class = function (_React$Component) {
	    _inherits(_class, _React$Component);
	
	    function _class(props) {
	        _classCallCheck(this, _class);
	
	        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));
	
	        _this.leftSideComponents = [];
	        _this.centerComponents = [];
	        _this.rightSideComponents = [];
	        return _this;
	    }
	
	    _createClass(_class, [{
	        key: "_sortCompoents",
	        value: function _sortCompoents() {
	            console.log(this.props.data);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            this._sortCompoents();
	
	            return _react2.default.createElement(
	                "div",
	                { className: "headerTop" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "container noClear" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "headerTop__items" },
	                        leftSideComponents
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "headerTop__items" },
	                        centerComponents
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "headerTop__items" },
	                        rightSideComponents
	                    )
	                )
	            );
	        }
	    }]);
	
	    return _class;
	}(_react2.default.Component);
	
	exports.default = _class;

/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _class = function (_React$Component) {
	    _inherits(_class, _React$Component);
	
	    function _class() {
	        _classCallCheck(this, _class);
	
	        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	    }
	
	    _createClass(_class, [{
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
	
	    return _class;
	}(_react2.default.Component);
	
	exports.default = _class;

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _class = function (_React$Component) {
	    _inherits(_class, _React$Component);
	
	    function _class() {
	        _classCallCheck(this, _class);
	
	        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	    }
	
	    _createClass(_class, [{
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
	            console.warn(this.props.children);
	
	            var children = this.props.children;
	
	            children.sort(this._sortByPriority);
	
	            console.warn(children);
	
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
	
	    return _class;
	}(_react2.default.Component);
	
	exports.default = _class;

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _footer = __webpack_require__(170);
	
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

/***/ 170:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVhZGVyL2hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlYWRlci9oZWFkZXItdG9wLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVhZGVyL2hlYWRlci1tYWluLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVhZGVyL2hlYWRlci1ib3R0b20uanN4Iiwid2VicGFjazovLy8uL3NyYy9qcy9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zvb3Rlci9mb290ZXIuanN4Il0sIm5hbWVzIjpbInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJIZWFkZXIiLCJwcm9wcyIsInN0YXRlIiwibmFtZVdpdGhRdWFsaWZpZXIiLCJkYXRhIiwibXlBY2NvdW50IiwibW9iaWxlIiwicG9zaXRpb24iLCJvcmRlciIsInRhYmxldCIsImRlc2t0b3AiLCJ3aXNoTGlzdCIsImRhdGEyIiwid2lzaGxpc3QiLCJjb25zb2xlIiwid2FybiIsIkNvbXBvbmVudCIsImxlZnRTaWRlQ29tcG9uZW50cyIsImNlbnRlckNvbXBvbmVudHMiLCJyaWdodFNpZGVDb21wb25lbnRzIiwibG9nIiwiX3NvcnRDb21wb2VudHMiLCJjaGlsZHJlbiIsImEiLCJiIiwicHJpb3JpdHkiLCJzb3J0IiwiX3NvcnRCeVByaW9yaXR5IiwiRm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFFQSxvQkFBU0EsTUFBVCxDQUFnQixtREFBaEIsRUFBMkJDLFNBQVNDLG9CQUFULENBQThCLFFBQTlCLEVBQXdDLENBQXhDLENBQTNCO0FBQ0Esb0JBQVNGLE1BQVQsQ0FBZ0IsbURBQWhCLEVBQTJCQyxTQUFTQyxv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O0FBQUE7QUFBQSx1QkFBSyxXQUFVLFNBQWY7QUFDSTtBQUFBO0FBQUEsMkJBQUssV0FBVSxXQUFmO0FBQUE7QUFBQTtBQURKLGtCQURKO0FBSUssc0JBQUtyQixLQUFMLENBQVdxQjtBQUpoQixjQURKO0FBUUg7Ozs7R0E3QndCLGdCQUFNTixTOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7S0FFYVksTSxXQUFBQSxNOzs7Ozs7Ozs7OztrQ0FDQTtBQUNMLG9CQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQUtIOzs7O0dBUHVCLGdCQUFNWixTIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuL2Zvb3Rlcic7XG5cblJlYWN0RE9NLnJlbmRlcig8SGVhZGVyLz4sIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkZXInKVswXSk7XG5SZWFjdERPTS5yZW5kZXIoPEZvb3Rlci8+LCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9vdGVyJylbMF0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvbWFpbi5qc3hcbiAqKi8iLCJleHBvcnQgKiBmcm9tICcuL2hlYWRlci5qc3gnO1xuZXhwb3J0ICogZnJvbSAnLi9oZWFkZXItYm90dG9tLmpzeCc7XG5leHBvcnQgKiBmcm9tICcuL2hlYWRlci10b3AuanN4JztcbmV4cG9ydCAqIGZyb20gJy4vaGVhZGVyLW1haW4uanN4JztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2hlYWRlci9pbmRleC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBIZWFkZXJUb3AgZnJvbSAnLi9oZWFkZXItdG9wLmpzeCc7XG5pbXBvcnQgSGVhZGVyTWFpbiBmcm9tICcuL2hlYWRlci1tYWluLmpzeCc7XG5pbXBvcnQgSGVhZGVyQm90dG9tIGZyb20gJy4vaGVhZGVyLWJvdHRvbS5qc3gnO1xuXG5leHBvcnQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG5hbWVXaXRoUXVhbGlmaWVyOiAnTXIuICdcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmRhdGEgPSB7XG4gICAgICAgICAgICBteUFjY291bnQ6IHtcbiAgICAgICAgICAgICAgICBtb2JpbGU6IHtwb3NpdGlvbjogJ3RvcC1sZWZ0Jywgb3JkZXI6IDF9LFxuICAgICAgICAgICAgICAgIHRhYmxldDoge3Bvc2l0aW9uOiAndG9wLWxlZnQnLCBvcmRlcjogMX0sXG4gICAgICAgICAgICAgICAgZGVza3RvcDoge3Bvc2l0aW9uOiAndG9wLWxlZnQnLCBvcmRlcjogMX1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3aXNoTGlzdDoge1xuICAgICAgICAgICAgICAgIG1vYmlsZToge3Bvc2l0aW9uOiAndG9wLWxlZnQnLCBvcmRlcjogMn0sXG4gICAgICAgICAgICAgICAgdGFibGV0OiB7cG9zaXRpb246ICd0b3AtbGVmdCcsIG9yZGVyOiAyfSxcbiAgICAgICAgICAgICAgICBkZXNrdG9wOiB7cG9zaXRpb246ICd0b3AtbGVmdCcsIG9yZGVyOiAyfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZGF0YTIgPSB7XG4gICAgICAgICAgICBtb2JpbGU6IHtcbiAgICAgICAgICAgICAgICBteUFjY291bnQ6IHtwb3NpdGlvbjogJ3RvcC1sZWZ0Jywgb3JkZXI6IDF9LFxuICAgICAgICAgICAgICAgIHdpc2hsaXN0OiB7cG9zaXRpb246ICd0b3AtbGVmdCcsIG9yZGVyOiAyfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhYmxldDoge1xuICAgICAgICAgICAgICAgIG15QWNjb3VudDoge3Bvc2l0aW9uOiAndG9wLWxlZnQnLCBvcmRlcjogMX0sXG4gICAgICAgICAgICAgICAgd2lzaGxpc3Q6IHtwb3NpdGlvbjogJ3RvcC1sZWZ0Jywgb3JkZXI6IDJ9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVza3RvcDoge1xuICAgICAgICAgICAgICAgIG15QWNjb3VudDoge3Bvc2l0aW9uOiAndG9wLWxlZnQnLCBvcmRlcjogMX0sXG4gICAgICAgICAgICAgICAgd2lzaGxpc3Q6IHtwb3NpdGlvbjogJ3RvcC1sZWZ0Jywgb3JkZXI6IDJ9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignbW91bnRlZCcpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPEhlYWRlclRvcCBkYXRhPXt0aGlzLmRhdGF9PjwvSGVhZGVyVG9wPlxuICAgICAgICAgICAgICAgIDxIZWFkZXJNYWluPnt0aGlzLnN0YXRlLm5hbWVXaXRoUXVhbGlmaWVyfTwvSGVhZGVyTWFpbj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyQm90dG9tPlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyVG9wIHByaW9yaXR5PVwiMlwiPlRoaXMgaXMgdGhlIHRleHQgdGhhdCBtdXN0IGJlIHNob3duPC9IZWFkZXJUb3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcHJpb3JpdHk9XCIxXCIgY2xhc3NOYW1lPVwidGVzdFwiPnNkc2RhZHM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0hlYWRlckJvdHRvbT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2hlYWRlci9oZWFkZXIuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMubGVmdFNpZGVDb21wb25lbnRzID0gW107XG4gICAgICAgIHRoaXMuY2VudGVyQ29tcG9uZW50cyA9IFtdO1xuICAgICAgICB0aGlzLnJpZ2h0U2lkZUNvbXBvbmVudHMgPSBbXTtcbiAgICB9XG5cbiAgICBfc29ydENvbXBvZW50cygpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5kYXRhKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuX3NvcnRDb21wb2VudHMoKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJUb3BcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBub0NsZWFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyVG9wX19pdGVtc1wiPntsZWZ0U2lkZUNvbXBvbmVudHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyVG9wX19pdGVtc1wiPntjZW50ZXJDb21wb25lbnRzfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclRvcF9faXRlbXNcIj57cmlnaHRTaWRlQ29tcG9uZW50c308L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9oZWFkZXIvaGVhZGVyLXRvcC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJNYWluXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9oZWFkZXIvaGVhZGVyLW1haW4uanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgX3NvcnRCeVByaW9yaXR5KGEsIGIpIHtcbiAgICAgICAgaWYgKGEucHJvcHMucHJpb3JpdHkgPCBiLnByb3BzLnByaW9yaXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEucHJvcHMucHJpb3JpdHkgPiBiLnByb3BzLnByaW9yaXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnNvbGUud2Fybih0aGlzLnByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXG4gICAgICAgIGNoaWxkcmVuLnNvcnQodGhpcy5fc29ydEJ5UHJpb3JpdHkpO1xuXG4gICAgICAgIGNvbnNvbGUud2FybihjaGlsZHJlbik7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyQm90dG9tXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BJbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+SW5mbzwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2hlYWRlci9oZWFkZXItYm90dG9tLmpzeFxuICoqLyIsImV4cG9ydCAqIGZyb20gJy4vZm9vdGVyLmpzeCc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9mb290ZXIvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIEkgYW0gdGhlIGZvb3RlciEhXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9mb290ZXIvZm9vdGVyLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=