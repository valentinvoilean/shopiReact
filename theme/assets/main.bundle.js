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
	                    _headerTop2.default,
	                    { className: 'test' },
	                    'This is the text that must be shown'
	                ),
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
	
	    function _class() {
	        _classCallCheck(this, _class);
	
	        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	    }
	
	    _createClass(_class, [{
	        key: "render",
	        value: function render() {
	            var classNames = "container " + this.props.className;
	
	            return _react2.default.createElement(
	                "div",
	                { className: "headerTop" },
	                _react2.default.createElement(
	                    "div",
	                    { className: classNames },
	                    this.props.children
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVhZGVyL2hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlYWRlci9oZWFkZXItdG9wLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVhZGVyL2hlYWRlci1tYWluLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVhZGVyL2hlYWRlci1ib3R0b20uanN4Iiwid2VicGFjazovLy8uL3NyYy9qcy9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zvb3Rlci9mb290ZXIuanN4Il0sIm5hbWVzIjpbInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJIZWFkZXIiLCJwcm9wcyIsInN0YXRlIiwibmFtZVdpdGhRdWFsaWZpZXIiLCJjb25zb2xlIiwid2FybiIsIkNvbXBvbmVudCIsImNsYXNzTmFtZXMiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImEiLCJiIiwicHJpb3JpdHkiLCJzb3J0IiwiX3NvcnRCeVByaW9yaXR5IiwiRm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFFQSxvQkFBU0EsTUFBVCxDQUFnQixtREFBaEIsRUFBMkJDLFNBQVNDLG9CQUFULENBQThCLFFBQTlCLEVBQXdDLENBQXhDLENBQTNCO0FBQ0Esb0JBQVNGLE1BQVQsQ0FBZ0IsbURBQWhCLEVBQTJCQyxTQUFTQyxvQkFBVCxDQUE4QixRQUE5QixFQUF3QyxDQUF4QyxDQUEzQixFOzs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFB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OztHQVB1QixnQkFBTVQsUyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi9mb290ZXInO1xuXG5SZWFjdERPTS5yZW5kZXIoPEhlYWRlci8+LCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZGVyJylbMF0pO1xuUmVhY3RET00ucmVuZGVyKDxGb290ZXIvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvb3RlcicpWzBdKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL21haW4uanN4XG4gKiovIiwiZXhwb3J0ICogZnJvbSAnLi9oZWFkZXIuanN4JztcbmV4cG9ydCAqIGZyb20gJy4vaGVhZGVyLWJvdHRvbS5qc3gnO1xuZXhwb3J0ICogZnJvbSAnLi9oZWFkZXItdG9wLmpzeCc7XG5leHBvcnQgKiBmcm9tICcuL2hlYWRlci1tYWluLmpzeCc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9oZWFkZXIvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgSGVhZGVyVG9wIGZyb20gJy4vaGVhZGVyLXRvcC5qc3gnO1xuaW1wb3J0IEhlYWRlck1haW4gZnJvbSAnLi9oZWFkZXItbWFpbi5qc3gnO1xuaW1wb3J0IEhlYWRlckJvdHRvbSBmcm9tICcuL2hlYWRlci1ib3R0b20uanN4JztcblxuZXhwb3J0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBuYW1lV2l0aFF1YWxpZmllcjogJ01yLiAnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignbW91bnRlZCcpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPEhlYWRlclRvcCBjbGFzc05hbWU9J3Rlc3QnPlRoaXMgaXMgdGhlIHRleHQgdGhhdCBtdXN0IGJlIHNob3duPC9IZWFkZXJUb3A+XG4gICAgICAgICAgICAgICAgPEhlYWRlck1haW4+e3RoaXMuc3RhdGUubmFtZVdpdGhRdWFsaWZpZXJ9PC9IZWFkZXJNYWluPlxuICAgICAgICAgICAgICAgIDxIZWFkZXJCb3R0b20+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXJUb3AgcHJpb3JpdHk9XCIyXCIgPlRoaXMgaXMgdGhlIHRleHQgdGhhdCBtdXN0IGJlIHNob3duPC9IZWFkZXJUb3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcHJpb3JpdHk9XCIxXCIgY2xhc3NOYW1lPVwidGVzdFwiPnNkc2RhZHM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0hlYWRlckJvdHRvbT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2hlYWRlci9oZWFkZXIuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGNsYXNzTmFtZXMgPSBgY29udGFpbmVyICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJUb3BcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvaGVhZGVyL2hlYWRlci10b3AuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyTWFpblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvaGVhZGVyL2hlYWRlci1tYWluLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIF9zb3J0QnlQcmlvcml0eShhLCBiKSB7XG4gICAgICAgIGlmIChhLnByb3BzLnByaW9yaXR5IDwgYi5wcm9wcy5wcmlvcml0eSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhLnByb3BzLnByaW9yaXR5ID4gYi5wcm9wcy5wcmlvcml0eSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zb2xlLndhcm4odGhpcy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcblxuICAgICAgICBjaGlsZHJlbi5zb3J0KHRoaXMuX3NvcnRCeVByaW9yaXR5KTtcblxuICAgICAgICBjb25zb2xlLndhcm4oY2hpbGRyZW4pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlckJvdHRvbVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wSW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPkluZm88L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9oZWFkZXIvaGVhZGVyLWJvdHRvbS5qc3hcbiAqKi8iLCJleHBvcnQgKiBmcm9tICcuL2Zvb3Rlci5qc3gnO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvZm9vdGVyL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBJIGFtIHRoZSBmb290ZXIhIVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvZm9vdGVyL2Zvb3Rlci5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9