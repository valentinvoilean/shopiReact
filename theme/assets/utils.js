webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(344);


/***/ },

/***/ 340:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"background":"config-box__background___KwzXl","base":"config-box__base___1FPLj","h1":"config-box__h1___NQo48"};

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(35);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _configBox = __webpack_require__(345);
	
	var _configBox2 = _interopRequireDefault(_configBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_reactDom2.default.render(_react2.default.createElement(_configBox2.default, null), document.getElementById('configContainer'));

/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _configBox = __webpack_require__(340);
	
	var _configBox2 = _interopRequireDefault(_configBox);
	
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
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _configBox2.default.background },
	                _react2.default.createElement(
	                    'div',
	                    { className: _configBox2.default.base },
	                    _react2.default.createElement(
	                        'h1',
	                        { className: _configBox2.default.h1 },
	                        'Header Configuration'
	                    )
	                )
	            );
	        }
	    }]);
	
	    return _class;
	}(_react2.default.Component);
	
	exports.default = _class;

/***/ }

});
//# sourceMappingURL=utils.js.map