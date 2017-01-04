webpackJsonp([0],{

/***/ 112:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ },

/***/ 128:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(58);

var _classnames = __webpack_require__(112);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

module.exports = _react2.default.createClass({
  displayName: 'Tab',

  propTypes: {
    className: _react.PropTypes.string,
    id: _react.PropTypes.string,
    focus: _react.PropTypes.bool,
    selected: _react.PropTypes.bool,
    disabled: _react.PropTypes.bool,
    activeTabClassName: _react.PropTypes.string,
    disabledTabClassName: _react.PropTypes.string,
    panelId: _react.PropTypes.string,
    children: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object, _react.PropTypes.string])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      focus: false,
      selected: false,
      id: null,
      panelId: null,
      activeTabClassName: 'ReactTabs__Tab--selected',
      disabledTabClassName: 'ReactTabs__Tab--disabled'
    };
  },
  componentDidMount: function componentDidMount() {
    this.checkFocus();
  },
  componentDidUpdate: function componentDidUpdate() {
    this.checkFocus();
  },
  checkFocus: function checkFocus() {
    if (this.props.selected && this.props.focus) {
      (0, _reactDom.findDOMNode)(this).focus();
    }
  },
  render: function render() {
    var _cx;

    var _props = this.props;
    var selected = _props.selected;
    var disabled = _props.disabled;
    var panelId = _props.panelId;
    var activeTabClassName = _props.activeTabClassName;
    var disabledTabClassName = _props.disabledTabClassName;
    var className = _props.className;
    var children = _props.children;
    var id = _props.id;

    var attributes = _objectWithoutProperties(_props, ['selected', 'disabled', 'panelId', 'activeTabClassName', 'disabledTabClassName', 'className', 'children', 'id']);

    delete attributes.focus;

    return _react2.default.createElement(
      'li',
      _extends({}, attributes, {
        className: (0, _classnames2.default)('ReactTabs__Tab', className, (_cx = {}, _defineProperty(_cx, activeTabClassName, selected), _defineProperty(_cx, disabledTabClassName, disabled), _cx)),
        role: 'tab',
        id: id,
        'aria-selected': selected ? 'true' : 'false',
        'aria-disabled': disabled ? 'true' : 'false',
        'aria-controls': panelId,
        tabIndex: selected ? '0' : null
      }),
      children
    );
  }
});

/***/ },

/***/ 131:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Cell__ = __webpack_require__(344);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Cell__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CodeBox__ = __webpack_require__(348);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__CodeBox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Row__ = __webpack_require__(350);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__Row__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CloseButton__ = __webpack_require__(346);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__CloseButton__["a"]; });





/***/ },

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_tabs__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_tabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uuid__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_common_constants_mediaQueries__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_App_features_HeaderConfig_components__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Modal_scss__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Modal_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Modal_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_App_store_modules_HeaderConfig__ = __webpack_require__(205);
/* unused harmony export HeaderConfigPureModal */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














var propTypes = {
    globalState: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired,
    actions: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired
};

var defaultProps = {
    globalState: {},
    actions: {}
};

var HeaderConfigPureModal = function (_Component) {
    _inherits(HeaderConfigPureModal, _Component);

    function HeaderConfigPureModal() {
        _classCallCheck(this, HeaderConfigPureModal);

        return _possibleConstructorReturn(this, (HeaderConfigPureModal.__proto__ || Object.getPrototypeOf(HeaderConfigPureModal)).apply(this, arguments));
    }

    _createClass(HeaderConfigPureModal, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            return nextProps.globalState.get('shouldComponentUpdate');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var globalState = this.props.globalState;


            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_7__Modal_scss___default.a.background },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'container ' + __WEBPACK_IMPORTED_MODULE_7__Modal_scss___default.a.base },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h1',
                        { className: __WEBPACK_IMPORTED_MODULE_7__Modal_scss___default.a.h1 },
                        'Header Configuration'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3_react_tabs__["Tabs"],
                        { className: __WEBPACK_IMPORTED_MODULE_7__Modal_scss___default.a.tabs },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_3_react_tabs__["TabList"],
                            null,
                            __WEBPACK_IMPORTED_MODULE_5_common_constants_mediaQueries__["a" /* mediaQueries */].map(function (mediaQuery) {
                                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_3_react_tabs__["Tab"],
                                    { key: __WEBPACK_IMPORTED_MODULE_4_uuid___default.a.v4() },
                                    mediaQuery
                                );
                            })
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_common_constants_mediaQueries__["a" /* mediaQueries */].map(function (mediaQuery) {
                            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_3_react_tabs__["TabPanel"],
                                { key: __WEBPACK_IMPORTED_MODULE_4_uuid___default.a.v4() },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'col-md-6' },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'h2',
                                        { className: __WEBPACK_IMPORTED_MODULE_7__Modal_scss___default.a.h2 },
                                        '1. Available components to drag & drop'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: __WEBPACK_IMPORTED_MODULE_7__Modal_scss___default.a.componentsContainer },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_App_features_HeaderConfig_components__["a" /* Cell */], { key: __WEBPACK_IMPORTED_MODULE_4_uuid___default.a.v4(),
                                            name: 'Hidden',
                                            globalState: globalState,
                                            mediaQuery: mediaQuery,
                                            actions: _this2.props.actions
                                        })
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'col-md-6' },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'h2',
                                        { className: __WEBPACK_IMPORTED_MODULE_7__Modal_scss___default.a.h2 },
                                        '3. Generated code to be copied'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_App_features_HeaderConfig_components__["b" /* CodeBox */], { text: JSON.stringify(globalState.get('data')) })
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: __WEBPACK_IMPORTED_MODULE_7__Modal_scss___default.a.container },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'h2',
                                        { className: __WEBPACK_IMPORTED_MODULE_7__Modal_scss___default.a.h2 },
                                        '2. Header - Drag & drop components in these boxes'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'p',
                                        null,
                                        ' Drag & drop the components into the next boxes. You can also sort them once they are inside the boxes.'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { 'data-mq': mediaQuery, className: __WEBPACK_IMPORTED_MODULE_7__Modal_scss___default.a.header },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_App_features_HeaderConfig_components__["c" /* Row */], _extends({}, _this2.props, { pos: 0, mediaQuery: mediaQuery })),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_App_features_HeaderConfig_components__["c" /* Row */], _extends({}, _this2.props, { pos: 1, mediaQuery: mediaQuery })),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_App_features_HeaderConfig_components__["c" /* Row */], _extends({}, _this2.props, { pos: 2, mediaQuery: mediaQuery }))
                                    )
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);

    return HeaderConfigPureModal;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

HeaderConfigPureModal.propTypes = propTypes;
HeaderConfigPureModal.defaultProps = defaultProps;

/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (state) {
    return { globalState: state.headerConfig };
}, function (dispatch) {
    return { actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_8_App_store_modules_HeaderConfig__, dispatch) };
})(HeaderConfigPureModal);

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(112);

var _classnames2 = _interopRequireDefault(_classnames);

var _Tab = __webpack_require__(128);

var _Tab2 = _interopRequireDefault(_Tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function renderChildren(props) {
  return _react2.default.Children.map(props.children, function (child) {
    // if child is not a tab we don't need to clone it
    // since we don't need to add custom props

    if (child.type !== _Tab2.default) {
      return child;
    }

    var clonedProps = {
      activeTabClassName: props.activeTabClassName,
      disabledTabClassName: props.disabledTabClassName
    };

    return _react2.default.cloneElement(child, clonedProps);
  });
}

module.exports = _react2.default.createClass({
  displayName: 'TabList',

  propTypes: {
    className: _react.PropTypes.string,
    activeTabClassName: _react.PropTypes.string,
    disabledTabClassName: _react.PropTypes.string,
    children: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.array])
  },

  render: function render() {
    var _props = this.props;
    var className = _props.className;
    var activeTabClassName = _props.activeTabClassName;
    var disabledTabClassName = _props.disabledTabClassName;
    var children = _props.children;

    var attributes = _objectWithoutProperties(_props, ['className', 'activeTabClassName', 'disabledTabClassName', 'children']);

    return _react2.default.createElement(
      'ul',
      _extends({}, attributes, {
        className: (0, _classnames2.default)('ReactTabs__TabList', className),
        role: 'tablist'
      }),
      renderChildren({ activeTabClassName: activeTabClassName, disabledTabClassName: disabledTabClassName, children: children })
    );
  }
});

/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modal__ = __webpack_require__(352);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Modal__["a"]; });


/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sortablejs__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sortablejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sortablejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Cell_scss__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Cell_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Cell_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_App_utils_header__ = __webpack_require__(206);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var propTypes = {
    globalState: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired,
    actions: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired,
    name: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    mediaQuery: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};

var defaultProps = {
    globalState: {},
    actions: {},
    name: '',
    mediaQuery: ''
};

var Cell = function (_Component) {
    _inherits(Cell, _Component);

    function Cell(props) {
        _classCallCheck(this, Cell);

        var _this = _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).call(this, props));

        _this.sortable = null;
        _this.sortableOptions = {
            group: { name: 'headerConfig', put: _this.validateItem.bind(_this) },
            animation: 150,
            ghostClass: __WEBPACK_IMPORTED_MODULE_4__Cell_scss___default.a.sortableGhost,
            validGroupClass: __WEBPACK_IMPORTED_MODULE_4__Cell_scss___default.a.cellValid,
            invalidGroupClass: __WEBPACK_IMPORTED_MODULE_4__Cell_scss___default.a.cellInvalid,
            onSort: _this.handleSort.bind(_this)
        };


        _this.handleCloseButton = _this.handleCloseButton.bind(_this);
        _this.handleCellRef = _this.handleCellRef.bind(_this);
        _this.handleTooltipRef = _this.handleTooltipRef.bind(_this);
        return _this;
    }

    _createClass(Cell, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.sortable = __WEBPACK_IMPORTED_MODULE_2_sortablejs___default.a.create(this.cellRef, _extends({}, this.sortableOptions));
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.sortable) {
                this.sortable.destroy();
            }
        } // sortable instance

    }, {
        key: 'validateItem',
        value: function validateItem(to, from, dragged) {
            var _props = this.props,
                globalState = _props.globalState,
                mediaQuery = _props.mediaQuery;


            try {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_App_utils_header__["b" /* validateState */])(globalState.updateIn(['data', mediaQuery, to.el.dataset.id], function (arr) {
                    return arr.push(dragged.dataset.id);
                }));
                return true;
            } catch (e) {
                this.updateValidationMessage(e);
                return false;
            }
        }
    }, {
        key: 'handleSort',
        value: function handleSort(_ref) {
            var to = _ref.to,
                from = _ref.from;

            this.props.actions.save({
                to: to.dataset.id,
                children: [].concat(_toConsumableArray(to.children)).map(function (item) {
                    return item.dataset.id;
                }),
                mediaQuery: this.props.mediaQuery,
                shouldComponentUpdate: to.dataset.id === from.dataset.id
            });
        }
    }, {
        key: 'handleCloseButton',
        value: function handleCloseButton(item) {
            this.props.actions.remove({ item: item, from: this.sortable.el.dataset.id, mediaQuery: this.props.mediaQuery });
        }
    }, {
        key: 'handleCellRef',
        value: function handleCellRef(cellRef) {
            this.cellRef = cellRef;
        }
    }, {
        key: 'handleTooltipRef',
        value: function handleTooltipRef(tooltipRef) {
            this.tooltipRef = tooltipRef;
        }
    }, {
        key: 'updateValidationMessage',
        value: function updateValidationMessage(message) {
            this.tooltipRef.dataset.message = message;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                globalState = _props2.globalState,
                name = _props2.name,
                mediaQuery = _props2.mediaQuery;

            var currentCell = globalState.getIn(['data', mediaQuery, name]);

            var itemsHTML = currentCell && currentCell.toJS().length ? currentCell.toJS().map(function (item) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { key: __WEBPACK_IMPORTED_MODULE_1_uuid___default.a.v4(), 'data-id': item },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        null,
                        item
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3____["d" /* CloseButton */], { cellName: name,
                        item: item,
                        onClick: _this2.handleCloseButton,
                        mediaQuery: mediaQuery
                    })
                );
            }) : '';

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_4__Cell_scss___default.a.cell },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'ul',
                    { ref: this.handleCellRef, 'data-id': name },
                    itemsHTML
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { ref: this.handleTooltipRef, className: __WEBPACK_IMPORTED_MODULE_4__Cell_scss___default.a.validationTooltip })
            );
        }
    }]);

    return Cell;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

/* harmony default export */ exports["a"] = Cell;

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Cell__ = __webpack_require__(343);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Cell__["a"]; });



/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CloseButton_scss__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CloseButton_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__CloseButton_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_App_constants_headerSettings__ = __webpack_require__(100);






var propTypes = {
    item: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    onClick: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
    mediaQuery: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    cellName: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};

var defaultProps = {
    item: '',
    onClick: function onClick() {},
    mediaQuery: '',
    cellName: ''
};

function CloseButton(_ref) {
    var onClick = _ref.onClick,
        item = _ref.item,
        mediaQuery = _ref.mediaQuery,
        cellName = _ref.cellName;

    var handleClick = function handleClick() {
        onClick(item);
    };

    if (cellName === 'Hidden') {
        return null;
    }

    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["includes"])(__WEBPACK_IMPORTED_MODULE_3_App_constants_headerSettings__["b" /* validStates */].get(mediaQuery).Hidden, item)) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: __WEBPACK_IMPORTED_MODULE_2__CloseButton_scss___default.a.closeButton, onClick: handleClick },
            '\u2715'
        );
    } else {
        return null;
    }
}

CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;

/* harmony default export */ exports["a"] = CloseButton;

/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CloseButton__ = __webpack_require__(345);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__CloseButton__["a"]; });



/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_copy_to_clipboard__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_copy_to_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_copy_to_clipboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CodeBox_scss__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CodeBox_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__CodeBox_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var propTypes = {
    text: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string.isRequired
};

var defaultProps = {
    text: ''
};

var CodeBox = function (_React$Component) {
    _inherits(CodeBox, _React$Component);

    function CodeBox(props) {
        _classCallCheck(this, CodeBox);

        var _this = _possibleConstructorReturn(this, (CodeBox.__proto__ || Object.getPrototypeOf(CodeBox)).call(this, props));

        _this.state = { copied: false };


        _this.handleCopy = _this.handleCopy.bind(_this);
        return _this;
    }

    _createClass(CodeBox, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            return true;
        }
    }, {
        key: 'handleCopy',
        value: function handleCopy() {
            this.setState({ copied: true });
        }
    }, {
        key: 'render',
        value: function render() {
            var buttonClass = __WEBPACK_IMPORTED_MODULE_2__CodeBox_scss___default.a.copy + ' ' + (this.state.copied ? __WEBPACK_IMPORTED_MODULE_2__CodeBox_scss___default.a.copied : '');

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_2__CodeBox_scss___default.a.codeContainer },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: __WEBPACK_IMPORTED_MODULE_2__CodeBox_scss___default.a.code },
                    this.props.text
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_copy_to_clipboard___default.a,
                    { text: this.props.text, onCopy: this.handleCopy },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'button',
                        { className: buttonClass },
                        'Click to copy'
                    )
                )
            );
        }
    }]);

    return CodeBox;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

CodeBox.propTypes = propTypes;
CodeBox.defaultProps = defaultProps;

/* harmony default export */ exports["a"] = CodeBox;

/***/ },

/***/ 348:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CodeBox__ = __webpack_require__(347);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__CodeBox__["a"]; });



/***/ },

/***/ 349:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_App_features_HeaderConfig_components__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_App_features_HeaderConfig_constants_positions__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Row_scss__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Row_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Row_scss__);






var propTypes = {
    globalState: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired,
    actions: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired,
    mediaQuery: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    pos: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number
};

var defaultProps = {
    globalState: {},
    actions: {},
    mediaQuery: '',
    pos: 0
};

function Row(props) {
    var mediaQuery = props.mediaQuery,
        globalState = props.globalState,
        pos = props.pos,
        actions = props.actions;

    var multiCells = mediaQuery !== 'mobile' || pos === 0;

    if (multiCells) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_4__Row_scss___default.a.headerArea },
            __WEBPACK_IMPORTED_MODULE_3_App_features_HeaderConfig_constants_positions__["a" /* horizontalPositions */].map(function (hPos) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_App_features_HeaderConfig_components__["a" /* Cell */], { key: __WEBPACK_IMPORTED_MODULE_1_uuid___default.a.v4(),
                    name: '' + __WEBPACK_IMPORTED_MODULE_3_App_features_HeaderConfig_constants_positions__["b" /* verticalPositions */][pos] + hPos,
                    globalState: globalState,
                    mediaQuery: mediaQuery,
                    actions: actions
                });
            })
        );
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_4__Row_scss___default.a.headerArea },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_App_features_HeaderConfig_components__["a" /* Cell */], { key: __WEBPACK_IMPORTED_MODULE_1_uuid___default.a.v4(),
            name: __WEBPACK_IMPORTED_MODULE_3_App_features_HeaderConfig_constants_positions__["b" /* verticalPositions */][pos],
            globalState: globalState,
            mediaQuery: mediaQuery,
            actions: actions
        })
    );
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

/* harmony default export */ exports["a"] = Row;

/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Row__ = __webpack_require__(349);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Row__["a"]; });



/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return horizontalPositions; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return verticalPositions; });
var horizontalPositions = ['Left', 'Center', 'Right'];
var verticalPositions = ['Top', 'Main', 'Bottom'];

/***/ },

/***/ 352:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modal_jsx__ = __webpack_require__(204);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Modal_jsx__["a"]; });
/* unused harmony reexport HeaderConfigPureModal */




/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return mediaQueries; });
var mediaQueries = ['mobile', 'tablet', 'desktop'];

/***/ },

/***/ 539:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var deselectCurrent = __webpack_require__(755);

var defaultMessage = 'Copy to clipboard: #{key}, Enter';

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? '⌘' : 'Ctrl') + '+C';
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug, message, reselectPrevious, range, selection, mark, success = false;
  if (!options) { options = {}; }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement('span');
    mark.textContent = text;
    mark.setAttribute('style', [
      // reset user styles for span element
      'all: unset',
      // prevents scrolling to the end of the page
      'position: fixed',
      'top: 0',
      'clip: rect(0, 0, 0, 0)',
      // used to preserve spaces and line breaks
      'white-space: pre',
      // do not inherit user-select (it may be `none`)
      '-webkit-user-select: text',
      '-moz-user-select: text',
      '-ms-user-select: text',
      'user-select: text',
    ].join(';'));

    document.body.appendChild(mark);

    range.selectNode(mark);
    selection.addRange(range);

    var successful = document.execCommand('copy');
    if (!successful) {
      throw new Error('copy command was unsuccessful');
    }
    success = true;
  } catch (err) {
    debug && console.error('unable to copy using execCommand: ', err);
    debug && console.warn('trying IE specific stuff');
    try {
      window.clipboardData.setData('text', text);
      success = true;
    } catch (err) {
      debug && console.error('unable to copy using clipboardData: ', err);
      debug && console.error('falling back to prompt');
      message = format('message' in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == 'function') {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ },

/***/ 540:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"cell":"Cell__cell___13sbg","sortableGhost":"Cell__sortableGhost___2q3wt","cellValid":"Cell__cellValid___Jtii3","cellInvalid":"Cell__cellInvalid___1oYEM","validationTooltip":"Cell__validationTooltip___PcGru"};

/***/ },

/***/ 541:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"closeButton":"CloseButton__closeButton___NwXk9"};

/***/ },

/***/ 542:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"codeContainer":"CodeBox__codeContainer___10yPe","copy":"CodeBox__copy___348gJ","copied":"CodeBox__copied___16BXL","code":"CodeBox__code___2MxSS"};

/***/ },

/***/ 543:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"headerArea":"Row__headerArea___2lRdX"};

/***/ },

/***/ 544:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"background":"Modal__background___jZZTW","base":"Modal__base___20cod","h1":"Modal__h1___1USDd","tabs":"Modal__tabs___NaFJu","h2":"Modal__h2___M_x8f","componentsContainer":"Modal__componentsContainer___31DLk","close":"Modal__close___38YSZ","container":"Modal__container___1oMzL","header":"Modal__header___3_pgU"};

/***/ },

/***/ 560:
/***/ function(module, exports, __webpack_require__) {

!(function() {
  function jss(blocks) {
    var css = [];
    for (var block in blocks)
      css.push(createStyleBlock(block, blocks[block]));
    injectCSS(css);
  }

  function createStyleBlock(selector, rules) {
    return selector + ' {\n' + parseRules(rules) + '\n}';
  }

  function parseRules(rules) {
    var css = [];
    for (var rule in rules)
      css.push('  '+rule+': '+rules[rule]+';');
    return css.join('\n');
  }

  function injectCSS(css) {
    var style = document.getElementById('jss-styles');
    if (!style) {
      style = document.createElement('style');
      style.setAttribute('id', 'jss-styles');
      var head = document.getElementsByTagName('head')[0];
      head.insertBefore(style, head.firstChild);
    }
    var node = document.createTextNode(css.join('\n\n'));
    style.appendChild(node);
  }

  if (true)
    module.exports = jss;
  else
    window.jss = jss;

})();



/***/ },

/***/ 570:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyToClipboard = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _copyToClipboard = __webpack_require__(539);

var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CopyToClipboard = exports.CopyToClipboard = _react2.default.createClass({
  displayName: 'CopyToClipboard',

  propTypes: {
    text: _react2.default.PropTypes.string.isRequired,
    children: _react2.default.PropTypes.element.isRequired,
    onCopy: _react2.default.PropTypes.func,
    options: _react2.default.PropTypes.shape({
      debug: _react2.default.PropTypes.bool,
      message: _react2.default.PropTypes.string
    })
  },

  onClick: function onClick(event) {
    var _props = this.props;
    var text = _props.text;
    var onCopy = _props.onCopy;
    var children = _props.children;
    var options = _props.options;

    var elem = _react2.default.Children.only(children);

    (0, _copyToClipboard2.default)(text, options);
    if (onCopy) {
      onCopy(text);
    }

    // Bypass onClick if it was present
    if (elem && elem.props && typeof elem.props.onClick === 'function') {
      elem.props.onClick(event);
    }
  },
  render: function render() {
    var _props2 = this.props;
    var _text = _props2.text;
    var _onCopy = _props2.onCopy;
    var _options = _props2.options;
    var children = _props2.children;

    var props = _objectWithoutProperties(_props2, ['text', 'onCopy', 'options', 'children']);

    var elem = _react2.default.Children.only(children);

    return _react2.default.cloneElement(elem, _extends({}, props, { onClick: this.onClick }));
  }
});
//# sourceMappingURL=Component.js.map

/***/ },

/***/ 571:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(570);

var CopyToClipboard = _require.CopyToClipboard;


module.exports = CopyToClipboard;
//# sourceMappingURL=index.js.map

/***/ },

/***/ 726:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(112);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

module.exports = _react2.default.createClass({
  displayName: 'TabPanel',

  propTypes: {
    children: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object, _react.PropTypes.string]),
    className: _react.PropTypes.string,
    id: _react.PropTypes.string,
    selected: _react.PropTypes.bool,
    style: _react.PropTypes.object,
    tabId: _react.PropTypes.string
  },

  contextTypes: {
    forceRenderTabPanel: _react.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      selected: false,
      id: null,
      tabId: null
    };
  },
  render: function render() {
    var _props = this.props;
    var className = _props.className;
    var children = _props.children;
    var selected = _props.selected;
    var id = _props.id;
    var tabId = _props.tabId;
    var style = _props.style;

    var attributes = _objectWithoutProperties(_props, ['className', 'children', 'selected', 'id', 'tabId', 'style']);

    return _react2.default.createElement(
      'div',
      _extends({}, attributes, {
        className: (0, _classnames2.default)('ReactTabs__TabPanel', className, {
          'ReactTabs__TabPanel--selected': selected
        }),
        role: 'tabpanel',
        id: id,
        'aria-labelledby': tabId,
        style: _extends({}, style, { display: selected ? null : 'none' })
      }),
      this.context.forceRenderTabPanel || selected ? children : null
    );
  }
});

/***/ },

/***/ 727:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(58);

var _classnames = __webpack_require__(112);

var _classnames2 = _interopRequireDefault(_classnames);

var _jsStylesheet = __webpack_require__(560);

var _jsStylesheet2 = _interopRequireDefault(_jsStylesheet);

var _uuid = __webpack_require__(730);

var _uuid2 = _interopRequireDefault(_uuid);

var _childrenPropType = __webpack_require__(728);

var _childrenPropType2 = _interopRequireDefault(_childrenPropType);

var _Tab = __webpack_require__(128);

var _Tab2 = _interopRequireDefault(_Tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// Determine if a node from event.target is a Tab element
function isTabNode(node) {
  return node.nodeName === 'LI' && node.getAttribute('role') === 'tab';
}

// Determine if a tab node is disabled
function isTabDisabled(node) {
  return node.getAttribute('aria-disabled') === 'true';
}

var useDefaultStyles = true;

module.exports = _react2.default.createClass({
  displayName: 'Tabs',

  propTypes: {
    className: _react.PropTypes.string,
    selectedIndex: _react.PropTypes.number,
    onSelect: _react.PropTypes.func,
    focus: _react.PropTypes.bool,
    children: _childrenPropType2.default,
    forceRenderTabPanel: _react.PropTypes.bool
  },

  childContextTypes: {
    forceRenderTabPanel: _react.PropTypes.bool
  },

  statics: {
    setUseDefaultStyles: function setUseDefaultStyles(use) {
      useDefaultStyles = use;
    }
  },

  getDefaultProps: function getDefaultProps() {
    return {
      selectedIndex: -1,
      focus: false,
      forceRenderTabPanel: false
    };
  },
  getInitialState: function getInitialState() {
    return this.copyPropsToState(this.props, this.state);
  },
  getChildContext: function getChildContext() {
    return {
      forceRenderTabPanel: this.props.forceRenderTabPanel
    };
  },
  componentDidMount: function componentDidMount() {
    if (useDefaultStyles) {
      (0, _jsStylesheet2.default)(__webpack_require__(729)); // eslint-disable-line global-require
    }
  },
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    var _this = this;

    // Use a transactional update to prevent race conditions
    // when reading the state in copyPropsToState
    // See https://github.com/reactjs/react-tabs/issues/51
    this.setState(function (state) {
      return _this.copyPropsToState(newProps, state);
    });
  },
  setSelected: function setSelected(index, focus) {
    // Don't do anything if nothing has changed
    if (index === this.state.selectedIndex) return;
    // Check index boundary
    if (index < 0 || index >= this.getTabsCount()) return;

    // Keep reference to last index for event handler
    var last = this.state.selectedIndex;

    // Check if the change event handler cancels the tab change
    var cancel = false;

    // Call change event handler
    if (typeof this.props.onSelect === 'function') {
      cancel = this.props.onSelect(index, last) === false;
    }

    if (!cancel) {
      // Update selected index
      this.setState({ selectedIndex: index, focus: focus === true });
    }
  },
  getNextTab: function getNextTab(index) {
    var count = this.getTabsCount();

    // Look for non-disabled tab from index to the last tab on the right
    for (var i = index + 1; i < count; i++) {
      var tab = this.getTab(i);
      if (!isTabDisabled((0, _reactDom.findDOMNode)(tab))) {
        return i;
      }
    }

    // If no tab found, continue searching from first on left to index
    for (var _i = 0; _i < index; _i++) {
      var _tab = this.getTab(_i);
      if (!isTabDisabled((0, _reactDom.findDOMNode)(_tab))) {
        return _i;
      }
    }

    // No tabs are disabled, return index
    return index;
  },
  getPrevTab: function getPrevTab(index) {
    var i = index;

    // Look for non-disabled tab from index to first tab on the left
    while (i--) {
      var tab = this.getTab(i);
      if (!isTabDisabled((0, _reactDom.findDOMNode)(tab))) {
        return i;
      }
    }

    // If no tab found, continue searching from last tab on right to index
    i = this.getTabsCount();
    while (i-- > index) {
      var _tab2 = this.getTab(i);
      if (!isTabDisabled((0, _reactDom.findDOMNode)(_tab2))) {
        return i;
      }
    }

    // No tabs are disabled, return index
    return index;
  },
  getTabsCount: function getTabsCount() {
    return this.props.children && this.props.children[0] ? _react2.default.Children.count(this.props.children[0].props.children) : 0;
  },
  getPanelsCount: function getPanelsCount() {
    return _react2.default.Children.count(this.props.children.slice(1));
  },
  getTabList: function getTabList() {
    return this.refs.tablist;
  },
  getTab: function getTab(index) {
    return this.refs['tabs-' + index];
  },
  getPanel: function getPanel(index) {
    return this.refs['panels-' + index];
  },
  getChildren: function getChildren() {
    var index = 0;
    var count = 0;
    var children = this.props.children;
    var state = this.state;
    var tabIds = this.tabIds = this.tabIds || [];
    var panelIds = this.panelIds = this.panelIds || [];
    var diff = this.tabIds.length - this.getTabsCount();

    // Add ids if new tabs have been added
    // Don't bother removing ids, just keep them in case they are added again
    // This is more efficient, and keeps the uuid counter under control
    while (diff++ < 0) {
      tabIds.push((0, _uuid2.default)());
      panelIds.push((0, _uuid2.default)());
    }

    // Map children to dynamically setup refs
    return _react2.default.Children.map(children, function (child) {
      // null happens when conditionally rendering TabPanel/Tab
      // see https://github.com/rackt/react-tabs/issues/37
      if (child === null) {
        return null;
      }

      var result = null;

      // Clone TabList and Tab components to have refs
      if (count++ === 0) {
        // TODO try setting the uuid in the "constructor" for `Tab`/`TabPanel`
        result = (0, _react.cloneElement)(child, {
          ref: 'tablist',
          children: _react2.default.Children.map(child.props.children, function (tab) {
            // null happens when conditionally rendering TabPanel/Tab
            // see https://github.com/rackt/react-tabs/issues/37
            if (tab === null) {
              return null;
            }

            var ref = 'tabs-' + index;
            var id = tabIds[index];
            var panelId = panelIds[index];
            var selected = state.selectedIndex === index;
            var focus = selected && state.focus;

            index++;

            if (tab.type === _Tab2.default) {
              return (0, _react.cloneElement)(tab, {
                ref: ref,
                id: id,
                panelId: panelId,
                selected: selected,
                focus: focus
              });
            }

            return tab;
          })
        });

        // Reset index for panels
        index = 0;
      }
      // Clone TabPanel components to have refs
      else {
          var ref = 'panels-' + index;
          var id = panelIds[index];
          var tabId = tabIds[index];
          var selected = state.selectedIndex === index;

          index++;

          result = (0, _react.cloneElement)(child, {
            ref: ref,
            id: id,
            tabId: tabId,
            selected: selected
          });
        }

      return result;
    });
  },
  handleKeyDown: function handleKeyDown(e) {
    if (this.isTabFromContainer(e.target)) {
      var index = this.state.selectedIndex;
      var preventDefault = false;

      // Select next tab to the left
      if (e.keyCode === 37 || e.keyCode === 38) {
        index = this.getPrevTab(index);
        preventDefault = true;
      }
      // Select next tab to the right
      /* eslint brace-style:0 */
      else if (e.keyCode === 39 || e.keyCode === 40) {
          index = this.getNextTab(index);
          preventDefault = true;
        }

      // This prevents scrollbars from moving around
      if (preventDefault) {
        e.preventDefault();
      }

      this.setSelected(index, true);
    }
  },
  handleClick: function handleClick(e) {
    var node = e.target;
    do {
      // eslint-disable-line no-cond-assign
      if (this.isTabFromContainer(node)) {
        if (isTabDisabled(node)) {
          return;
        }

        var index = [].slice.call(node.parentNode.children).indexOf(node);
        this.setSelected(index);
        return;
      }
    } while ((node = node.parentNode) !== null);
  },


  // This is an anti-pattern, so sue me
  copyPropsToState: function copyPropsToState(props, state) {
    var selectedIndex = props.selectedIndex;

    // If no selectedIndex prop was supplied, then try
    // preserving the existing selectedIndex from state.
    // If the state has not selectedIndex, default
    // to the first tab in the TabList.
    //
    // TODO: Need automation testing around this
    // Manual testing can be done using examples/focus
    // See 'should preserve selectedIndex when typing' in specs/Tabs.spec.js
    if (selectedIndex === -1) {
      if (state && state.selectedIndex) {
        selectedIndex = state.selectedIndex;
      } else {
        selectedIndex = 0;
      }
    }

    return {
      selectedIndex: selectedIndex,
      focus: props.focus
    };
  },


  /**
   * Determine if a node from event.target is a Tab element for the current Tabs container.
   * If the clicked element is not a Tab, it returns false.
   * If it finds another Tabs container between the Tab and `this`, it returns false.
   */
  isTabFromContainer: function isTabFromContainer(node) {
    // return immediately if the clicked element is not a Tab.
    if (!isTabNode(node)) {
      return false;
    }

    // Check if the first occurrence of a Tabs container is `this` one.
    var nodeAncestor = node.parentElement;
    var tabsNode = (0, _reactDom.findDOMNode)(this);
    do {
      if (nodeAncestor === tabsNode) return true;else if (nodeAncestor.getAttribute('data-tabs')) break;

      nodeAncestor = nodeAncestor.parentElement;
    } while (nodeAncestor);

    return false;
  },
  render: function render() {
    var _this2 = this;

    // This fixes an issue with focus management.
    //
    // Ultimately, when focus is true, and an input has focus,
    // and any change on that input causes a state change/re-render,
    // focus gets sent back to the active tab, and input loses focus.
    //
    // Since the focus state only needs to be remembered
    // for the current render, we can reset it once the
    // render has happened.
    //
    // Don't use setState, because we don't want to re-render.
    //
    // See https://github.com/rackt/react-tabs/pull/7
    if (this.state.focus) {
      setTimeout(function () {
        _this2.state.focus = false;
      }, 0);
    }

    var _props = this.props;
    var className = _props.className;

    var attributes = _objectWithoutProperties(_props, ['className']);

    // Delete all known props, so they don't get added to DOM


    delete attributes.selectedIndex;
    delete attributes.onSelect;
    delete attributes.focus;
    delete attributes.children;
    delete attributes.forceRenderTabPanel;
    delete attributes.onClick;
    delete attributes.onKeyDown;

    return _react2.default.createElement(
      'div',
      _extends({}, attributes, {
        className: (0, _classnames2.default)('ReactTabs', 'react-tabs', className),
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        'data-tabs': true
      }),
      this.getChildren()
    );
  }
});

/***/ },

/***/ 728:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _Tab = __webpack_require__(128);

var _Tab2 = _interopRequireDefault(_Tab);

var _TabList = __webpack_require__(299);

var _TabList2 = _interopRequireDefault(_TabList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function childrenPropTypes(props, propName) {
  var error = void 0;
  var tabsCount = 0;
  var panelsCount = 0;
  var children = props[propName];

  _react2.default.Children.forEach(children, function (child) {
    // null happens when conditionally rendering TabPanel/Tab
    // see https://github.com/rackt/react-tabs/issues/37
    if (child === null) {
      return;
    }

    if (child.type === _TabList2.default) {
      _react2.default.Children.forEach(child.props.children, function (c) {
        // null happens when conditionally rendering TabPanel/Tab
        // see https://github.com/rackt/react-tabs/issues/37
        if (c === null) {
          return;
        }

        if (c.type === _Tab2.default) {
          tabsCount++;
        }
      });
    } else if (child.type.displayName === 'TabPanel') {
      panelsCount++;
    } else {
      error = new Error('Expected \'TabList\' or \'TabPanel\' but found \'' + (child.type.displayName || child.type) + '\'');
    }
  });

  if (tabsCount !== panelsCount) {
    error = new Error("There should be an equal number of 'Tabs' and 'TabPanels'." + ('Received ' + tabsCount + ' \'Tabs\' and ' + panelsCount + ' \'TabPanels\'.'));
  }

  return error;
};

/***/ },

/***/ 729:
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  '.react-tabs [role=tablist]': {
    'border-bottom': '1px solid #aaa',
    margin: '0 0 10px',
    padding: '0'
  },

  '.react-tabs [role=tab]': {
    display: 'inline-block',
    border: '1px solid transparent',
    'border-bottom': 'none',
    bottom: '-1px',
    position: 'relative',
    'list-style': 'none',
    padding: '6px 12px',
    cursor: 'pointer'
  },

  '.react-tabs [role=tab][aria-selected=true]': {
    background: '#fff',
    'border-color': '#aaa',
    color: 'black',
    'border-radius': '5px 5px 0 0',
    '-moz-border-radius': '5px 5px 0 0',
    '-webkit-border-radius': '5px 5px 0 0'
  },

  '.react-tabs [role=tab][aria-disabled=true]': {
    color: 'GrayText',
    cursor: 'default'
  },

  '.react-tabs [role=tab]:focus': {
    'box-shadow': '0 0 5px hsl(208, 99%, 50%)',
    'border-color': 'hsl(208, 99%, 50%)',
    outline: 'none'
  },

  '.react-tabs [role=tab]:focus:after': {
    content: '""',
    position: 'absolute',
    height: '5px',
    left: '-4px',
    right: '-4px',
    bottom: '-5px',
    background: '#fff'
  }
};

/***/ },

/***/ 730:
/***/ function(module, exports, __webpack_require__) {

"use strict";


// Get a universally unique identifier
var count = 0;
module.exports = function uuid() {
  return "react-tabs-" + count++;
};

/***/ },

/***/ 731:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabPanel = exports.Tab = exports.TabList = exports.Tabs = undefined;

var _Tabs = __webpack_require__(727);

var _Tabs2 = _interopRequireDefault(_Tabs);

var _TabList = __webpack_require__(299);

var _TabList2 = _interopRequireDefault(_TabList);

var _Tab = __webpack_require__(128);

var _Tab2 = _interopRequireDefault(_Tab);

var _TabPanel = __webpack_require__(726);

var _TabPanel2 = _interopRequireDefault(_TabPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Tabs = _Tabs2.default;
exports.TabList = _TabList2.default;
exports.Tab = _Tab2.default;
exports.TabPanel = _TabPanel2.default;

// For bc we also export a default object, remove in 1.0

exports.default = {
  Tabs: _Tabs2.default,
  TabList: _TabList2.default,
  Tab: _Tab2.default,
  TabPanel: _TabPanel2.default
};

/***/ },

/***/ 751:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @license MIT
 */

(function sortableModule(factory) {
	"use strict";

	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	else if (typeof module != "undefined" && typeof module.exports != "undefined") {
		module.exports = factory();
	}
	else if (typeof Package !== "undefined") {
		//noinspection JSUnresolvedVariable
		Sortable = factory();  // export for Meteor.js
	}
	else {
		/* jshint sub:true */
		window["Sortable"] = factory();
	}
})(function sortableFactory() {
	"use strict";

	if (typeof window == "undefined" || !window.document) {
		return function sortableError() {
			throw new Error("Sortable.js requires a window with a document");
		};
	}

	var dragEl,
		parentEl,
		ghostEl,
		cloneEl,
		rootEl,
		nextEl,

		scrollEl,
		scrollParentEl,
		scrollCustomFn,

		lastEl,
		lastCSS,
		lastParentCSS,

		oldIndex,
		newIndex,

		activeGroup,
		putSortable,

		autoScroll = {},

		tapEvt,
		touchEvt,

		moved,

		/** @const */
		RSPACE = /\s+/g,

		expando = 'Sortable' + (new Date).getTime(),

		win = window,
		document = win.document,
		parseInt = win.parseInt,

		$ = win.jQuery || win.Zepto,
		Polymer = win.Polymer,

		supportDraggable = !!('draggable' in document.createElement('div')),
		supportCssPointerEvents = (function (el) {
			// false when IE11
			if (!!navigator.userAgent.match(/Trident.*rv[ :]?11\./)) {
				return false;
			}
			el = document.createElement('x');
			el.style.cssText = 'pointer-events:auto';
			return el.style.pointerEvents === 'auto';
		})(),

		_silent = false,

		abs = Math.abs,
		min = Math.min,
		slice = [].slice,

		touchDragOverListeners = [],

		_autoScroll = _throttle(function (/**Event*/evt, /**Object*/options, /**HTMLElement*/rootEl) {
			// Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
			if (rootEl && options.scroll) {
				var el,
					rect,
					sens = options.scrollSensitivity,
					speed = options.scrollSpeed,

					x = evt.clientX,
					y = evt.clientY,

					winWidth = window.innerWidth,
					winHeight = window.innerHeight,

					vx,
					vy,

					scrollOffsetX,
					scrollOffsetY
				;

				// Delect scrollEl
				if (scrollParentEl !== rootEl) {
					scrollEl = options.scroll;
					scrollParentEl = rootEl;
					scrollCustomFn = options.scrollFn;

					if (scrollEl === true) {
						scrollEl = rootEl;

						do {
							if ((scrollEl.offsetWidth < scrollEl.scrollWidth) ||
								(scrollEl.offsetHeight < scrollEl.scrollHeight)
							) {
								break;
							}
							/* jshint boss:true */
						} while (scrollEl = scrollEl.parentNode);
					}
				}

				if (scrollEl) {
					el = scrollEl;
					rect = scrollEl.getBoundingClientRect();
					vx = (abs(rect.right - x) <= sens) - (abs(rect.left - x) <= sens);
					vy = (abs(rect.bottom - y) <= sens) - (abs(rect.top - y) <= sens);
				}


				if (!(vx || vy)) {
					vx = (winWidth - x <= sens) - (x <= sens);
					vy = (winHeight - y <= sens) - (y <= sens);

					/* jshint expr:true */
					(vx || vy) && (el = win);
				}


				if (autoScroll.vx !== vx || autoScroll.vy !== vy || autoScroll.el !== el) {
					autoScroll.el = el;
					autoScroll.vx = vx;
					autoScroll.vy = vy;

					clearInterval(autoScroll.pid);

					if (el) {
						autoScroll.pid = setInterval(function () {
							scrollOffsetY = vy ? vy * speed : 0;
							scrollOffsetX = vx ? vx * speed : 0;

							if ('function' === typeof(scrollCustomFn)) {
								return scrollCustomFn.call(_this, scrollOffsetX, scrollOffsetY, evt);
							}

							if (el === win) {
								win.scrollTo(win.pageXOffset + scrollOffsetX, win.pageYOffset + scrollOffsetY);
							} else {
								el.scrollTop += scrollOffsetY;
								el.scrollLeft += scrollOffsetX;
							}
						}, 24);
					}
				}
			}
		}, 30),

		_prepareGroup = function (options) {
			function toFn(value, pull) {
				if (value === void 0 || value === true) {
					value = group.name;
				}

				if (typeof value === 'function') {
					return value;
				} else {
					return function (to, from) {
						var fromGroup = from.options.group.name;

						return pull
							? value
							: value && (value.join
								? value.indexOf(fromGroup) > -1
								: (fromGroup == value)
							);
					};
				}
			}

			var group = {};
			var originalGroup = options.group;

			if (!originalGroup || typeof originalGroup != 'object') {
				originalGroup = {name: originalGroup};
			}

			group.name = originalGroup.name;
			group.checkPull = toFn(originalGroup.pull, true);
			group.checkPut = toFn(originalGroup.put);

			options.group = group;
		}
	;



	/**
	 * @class  Sortable
	 * @param  {HTMLElement}  el
	 * @param  {Object}       [options]
	 */
	function Sortable(el, options) {
		if (!(el && el.nodeType && el.nodeType === 1)) {
			throw 'Sortable: `el` must be HTMLElement, and not ' + {}.toString.call(el);
		}

		this.el = el; // root element
		this.options = options = _extend({}, options);


		// Export instance
		el[expando] = this;


		// Default options
		var defaults = {
			group: Math.random(),
			sort: true,
			disabled: false,
			store: null,
			handle: null,
			scroll: true,
			scrollSensitivity: 30,
			scrollSpeed: 10,
			draggable: /[uo]l/i.test(el.nodeName) ? 'li' : '>*',
			ghostClass: 'sortable-ghost',
			chosenClass: 'sortable-chosen',
			dragClass: 'sortable-drag',
			validGroupClass: 'sortable-valid',
			invalidGroupClass: 'sortable-invalid',
			ignore: 'a, img',
			filter: null,
			animation: 0,
			setData: function (dataTransfer, dragEl) {
				dataTransfer.setData('Text', dragEl.textContent);
			},
			dropBubble: false,
			dragoverBubble: false,
			dataIdAttr: 'data-id',
			delay: 0,
			forceFallback: false,
			fallbackClass: 'sortable-fallback',
			fallbackOnBody: false,
			fallbackTolerance: 0,
			fallbackOffset: {x: 0, y: 0}
		};


		// Set default options
		for (var name in defaults) {
			!(name in options) && (options[name] = defaults[name]);
		}

		_prepareGroup(options);

		// Bind all private methods
		for (var fn in this) {
			if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
				this[fn] = this[fn].bind(this);
			}
		}

		// Setup drag mode
		this.nativeDraggable = options.forceFallback ? false : supportDraggable;

		// Bind events
		_on(el, 'mousedown', this._onTapStart);
		_on(el, 'touchstart', this._onTapStart);

		if (this.nativeDraggable) {
			_on(el, 'dragover', this);
			_on(el, 'dragenter', this);
			_on(el, 'dragleave', this);
		}

		touchDragOverListeners.push(this._onDragOver, this._onDragLeave);

		// Restore sorting
		options.store && this.sort(options.store.get(this));
	}


	Sortable.prototype = /** @lends Sortable.prototype */ {
		constructor: Sortable,

		_onTapStart: function (/** Event|TouchEvent */evt) {
			var _this = this,
				el = this.el,
				options = this.options,
				type = evt.type,
				touch = evt.touches && evt.touches[0],
				target = (touch || evt).target,
				originalTarget = evt.target.shadowRoot && evt.path[0] || target,
				filter = options.filter,
				startIndex;

			// Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
			if (dragEl) {
				return;
			}

			if (type === 'mousedown' && evt.button !== 0 || options.disabled) {
				return; // only left button or enabled
			}

			if (options.handle && !_closest(originalTarget, options.handle, el)) {
				return;
			}

			target = _closest(target, options.draggable, el);

			if (!target) {
				return;
			}

			// Get the index of the dragged element within its parent
			startIndex = _index(target, options.draggable);

			// Check filter
			if (typeof filter === 'function') {
				if (filter.call(this, evt, target, this)) {
					_dispatchEvent(_this, originalTarget, 'filter', target, el, startIndex);
					evt.preventDefault();
					return; // cancel dnd
				}
			}
			else if (filter) {
				filter = filter.split(',').some(function (criteria) {
					criteria = _closest(originalTarget, criteria.trim(), el);

					if (criteria) {
						_dispatchEvent(_this, criteria, 'filter', target, el, startIndex);
						return true;
					}
				});

				if (filter) {
					evt.preventDefault();
					return; // cancel dnd
				}
			}

			// Prepare `dragstart`
			this._prepareDragStart(evt, touch, target, startIndex);
		},

		_prepareDragStart: function (/** Event */evt, /** Touch */touch, /** HTMLElement */target, /** Number */startIndex) {
			var _this = this,
				el = _this.el,
				options = _this.options,
				ownerDocument = el.ownerDocument,
				dragStartFn;

			if (target && !dragEl && (target.parentNode === el)) {
				tapEvt = evt;

				rootEl = el;
				dragEl = target;
				parentEl = dragEl.parentNode;
				nextEl = dragEl.nextSibling;
				activeGroup = options.group;
				oldIndex = startIndex;

				this._lastX = (touch || evt).clientX;
				this._lastY = (touch || evt).clientY;

				dragEl.style['will-change'] = 'transform';

				dragStartFn = function () {
					// Delayed drag has been triggered
					// we can re-enable the events: touchmove/mousemove
					_this._disableDelayedDrag();

					// Make the element draggable
					dragEl.draggable = _this.nativeDraggable;

					// Chosen item
					_toggleClass(dragEl, options.chosenClass, true);

					// Bind the events: dragstart/dragend
					_this._triggerDragStart(touch);

					// Drag start event
					_dispatchEvent(_this, rootEl, 'choose', dragEl, rootEl, oldIndex);
				};

				// Disable "draggable"
				options.ignore.split(',').forEach(function (criteria) {
					_find(dragEl, criteria.trim(), _disableDraggable);
				});

				_on(ownerDocument, 'mouseup', _this._onDrop);
				_on(ownerDocument, 'touchend', _this._onDrop);
				_on(ownerDocument, 'touchcancel', _this._onDrop);

				if (options.delay) {
					// If the user moves the pointer or let go the click or touch
					// before the delay has been reached:
					// disable the delayed drag
					_on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchend', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
					_on(ownerDocument, 'mousemove', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchmove', _this._disableDelayedDrag);

					_this._dragStartTimer = setTimeout(dragStartFn, options.delay);
				} else {
					dragStartFn();
				}
			}
		},

		_disableDelayedDrag: function () {
			var ownerDocument = this.el.ownerDocument;

			clearTimeout(this._dragStartTimer);
			_off(ownerDocument, 'mouseup', this._disableDelayedDrag);
			_off(ownerDocument, 'touchend', this._disableDelayedDrag);
			_off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
			_off(ownerDocument, 'mousemove', this._disableDelayedDrag);
			_off(ownerDocument, 'touchmove', this._disableDelayedDrag);
		},

		_triggerDragStart: function (/** Touch */touch) {
			if (touch) {
				// Touch device support
				tapEvt = {
					target: dragEl,
					clientX: touch.clientX,
					clientY: touch.clientY
				};

				this._onDragStart(tapEvt, 'touch');
			}
			else if (!this.nativeDraggable) {
				this._onDragStart(tapEvt, true);
			}
			else {
				_on(dragEl, 'dragend', this);
				_on(rootEl, 'dragstart', this._onDragStart);
			}

			try {
				if (document.selection) {					
					// Timeout neccessary for IE9					
					setTimeout(function () {
						document.selection.empty();
					});					
				} else {
					window.getSelection().removeAllRanges();
				}
			} catch (err) {
			}
		},

		_dragStarted: function () {
			if (rootEl && dragEl) {
				var options = this.options;

				// Apply effect
				_toggleClass(dragEl, options.ghostClass, true);
				_toggleClass(dragEl, options.dragClass, false);

				Sortable.active = this;

				// Drag start event
				_dispatchEvent(this, rootEl, 'start', dragEl, rootEl, oldIndex);
			}
		},

		_emulateDragOver: function () {
			if (touchEvt) {
				if (this._lastX === touchEvt.clientX && this._lastY === touchEvt.clientY) {
					return;
				}

				this._lastX = touchEvt.clientX;
				this._lastY = touchEvt.clientY;

				if (!supportCssPointerEvents) {
					_css(ghostEl, 'display', 'none');
				}

				var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY),
					parent = target,
					i = touchDragOverListeners.length;

				if (parent) {
					do {
						if (parent[expando]) {
							while (i--) {
								touchDragOverListeners[i]({
									clientX: touchEvt.clientX,
									clientY: touchEvt.clientY,
									target: target,
									rootEl: parent
								});
							}

							break;
						}

						target = parent; // store last element
					}
					/* jshint boss:true */
					while (parent = parent.parentNode);
				}

				if (!supportCssPointerEvents) {
					_css(ghostEl, 'display', '');
				}
			}
		},


		_onTouchMove: function (/**TouchEvent*/evt) {
			if (tapEvt) {
				var	options = this.options,
					fallbackTolerance = options.fallbackTolerance,
					fallbackOffset = options.fallbackOffset,
					touch = evt.touches ? evt.touches[0] : evt,
					dx = (touch.clientX - tapEvt.clientX) + fallbackOffset.x,
					dy = (touch.clientY - tapEvt.clientY) + fallbackOffset.y,
					translate3d = evt.touches ? 'translate3d(' + dx + 'px,' + dy + 'px,0)' : 'translate(' + dx + 'px,' + dy + 'px)';

				// only set the status to dragging, when we are actually dragging
				if (!Sortable.active) {
					if (fallbackTolerance &&
						min(abs(touch.clientX - this._lastX), abs(touch.clientY - this._lastY)) < fallbackTolerance
					) {
						return;
					}

					this._dragStarted();
				}

				// as well as creating the ghost element on the document body
				this._appendGhost();

				moved = true;
				touchEvt = touch;

				_css(ghostEl, 'webkitTransform', translate3d);
				_css(ghostEl, 'mozTransform', translate3d);
				_css(ghostEl, 'msTransform', translate3d);
				_css(ghostEl, 'transform', translate3d);

				evt.preventDefault();
			}
		},

		_appendGhost: function () {
			if (!ghostEl) {
				var rect = dragEl.getBoundingClientRect(),
					css = _css(dragEl),
					options = this.options,
					ghostRect;

				ghostEl = dragEl.cloneNode(true);

				_toggleClass(ghostEl, options.ghostClass, false);
				_toggleClass(ghostEl, options.fallbackClass, true);
				_toggleClass(ghostEl, options.dragClass, true);

				_css(ghostEl, 'top', rect.top - parseInt(css.marginTop, 10));
				_css(ghostEl, 'left', rect.left - parseInt(css.marginLeft, 10));
				_css(ghostEl, 'width', rect.width);
				_css(ghostEl, 'height', rect.height);
				_css(ghostEl, 'opacity', '0.8');
				_css(ghostEl, 'position', 'fixed');
				_css(ghostEl, 'zIndex', '100000');
				_css(ghostEl, 'pointerEvents', 'none');

				options.fallbackOnBody && document.body.appendChild(ghostEl) || rootEl.appendChild(ghostEl);

				// Fixing dimensions.
				ghostRect = ghostEl.getBoundingClientRect();
				_css(ghostEl, 'width', rect.width * 2 - ghostRect.width);
				_css(ghostEl, 'height', rect.height * 2 - ghostRect.height);
			}
		},

		_onDragStart: function (/**Event*/evt, /**boolean*/useFallback) {
			var dataTransfer = evt.dataTransfer,
				options = this.options;

			this._offUpEvents();

			if (activeGroup.checkPull(this, this, dragEl, evt) == 'clone') {
				cloneEl = _clone(dragEl);
				_css(cloneEl, 'display', 'none');
				rootEl.insertBefore(cloneEl, dragEl);
				_dispatchEvent(this, rootEl, 'clone', dragEl);
			}

			_toggleClass(dragEl, options.dragClass, true);

			if (useFallback) {
				if (useFallback === 'touch') {
					// Bind touch events
					_on(document, 'touchmove', this._onTouchMove);
					_on(document, 'touchend', this._onDrop);
					_on(document, 'touchcancel', this._onDrop);
				} else {
					// Old brwoser
					_on(document, 'mousemove', this._onTouchMove);
					_on(document, 'mouseup', this._onDrop);
				}

				this._loopId = setInterval(this._emulateDragOver, 50);
			}
			else {
				if (dataTransfer) {
					dataTransfer.effectAllowed = 'move';
					options.setData && options.setData.call(this, dataTransfer, dragEl);
				}

				_on(document, 'drop', this);
				setTimeout(this._dragStarted, 0);
			}
		},

		_onDragOver: function (/**Event*/evt) {
			var el = this.el,
				target,
				dragRect,
				targetRect,
				revert,
				options = this.options,
				group = options.group,
				activeSortable = Sortable.active,
				isOwner = (activeGroup === group),
				canSort = options.sort;

			if (evt.preventDefault !== void 0) {
				evt.preventDefault();
				!options.dragoverBubble && evt.stopPropagation();
			}

			moved = true;

			if (activeGroup && !options.disabled &&
				(isOwner
					? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
					: (
						putSortable === this ||
						activeGroup.checkPull(this, activeSortable, dragEl, evt) && group.checkPut(this, activeSortable, dragEl, evt)
					)
				) &&
				(evt.rootEl === void 0 || evt.rootEl === this.el) // touch fallback
			) {
				_toggleClass(el, options.invalidGroupClass, false);
				_toggleClass(el, options.validGroupClass, true);

				// Smart auto-scrolling
				_autoScroll(evt, options, this.el);

				if (_silent) {
					return;
				}

				target = _closest(evt.target, options.draggable, el);
				dragRect = dragEl.getBoundingClientRect();
				putSortable = this;

				if (revert) {
					_cloneHide(true);
					parentEl = rootEl; // actualization

					if (cloneEl || nextEl) {
						rootEl.insertBefore(dragEl, cloneEl || nextEl);
					}
					else if (!canSort) {
						rootEl.appendChild(dragEl);
					}

					return;
				}


				if ((el.children.length === 0) || (el.children[0] === ghostEl) ||
					(el === evt.target) && (target = _ghostIsLast(el, evt))
				) {
					if (target) {
						if (target.animated) {
							return;
						}

						targetRect = target.getBoundingClientRect();
					}

					_cloneHide(isOwner);

					if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt) !== false) {
						if (!dragEl.contains(el)) {
							el.appendChild(dragEl);
							parentEl = el; // actualization
						}

						this._animate(dragRect, dragEl);
						target && this._animate(targetRect, target);
					}
				}
				else if (target && !target.animated && target !== dragEl && (target.parentNode[expando] !== void 0)) {
					if (lastEl !== target) {
						lastEl = target;
						lastCSS = _css(target);
						lastParentCSS = _css(target.parentNode);
					}

					targetRect = target.getBoundingClientRect();

					var width = targetRect.right - targetRect.left,
						height = targetRect.bottom - targetRect.top,
						floating = /left|right|inline/.test(lastCSS.cssFloat + lastCSS.display)
							|| (lastParentCSS.display == 'flex' && lastParentCSS['flex-direction'].indexOf('row') === 0),
						isWide = (target.offsetWidth > dragEl.offsetWidth),
						isLong = (target.offsetHeight > dragEl.offsetHeight),
						halfway = (floating ? (evt.clientX - targetRect.left) / width : (evt.clientY - targetRect.top) / height) > 0.5,
						nextSibling = target.nextElementSibling,
						moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt),
						after
					;

					if (moveVector !== false) {
						_silent = true;
						setTimeout(_unsilent, 30);

						_cloneHide(isOwner);

						if (moveVector === 1 || moveVector === -1) {
							after = (moveVector === 1);
						}
						else if (floating) {
							var elTop = dragEl.offsetTop,
								tgTop = target.offsetTop;

							if (elTop === tgTop) {
								after = (target.previousElementSibling === dragEl) && !isWide || halfway && isWide;
							}
							else if (target.previousElementSibling === dragEl || dragEl.previousElementSibling === target) {
								after = (evt.clientY - targetRect.top) / height > 0.5;
							} else {
								after = tgTop > elTop;
							}
						} else {
							after = (nextSibling !== dragEl) && !isLong || halfway && isLong;
						}

						if (!dragEl.contains(el)) {
							if (after && !nextSibling) {
								el.appendChild(dragEl);
							} else {
								target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
							}
						}

						parentEl = dragEl.parentNode; // actualization

						this._animate(dragRect, dragEl);
						this._animate(targetRect, target);
					}
				}
			}
			else {
				_toggleClass(el, options.validGroupClass, false);
				_toggleClass(el, options.invalidGroupClass, true);
			}
		},

		_onDragLeave: function () {
			var el = this.el,
				options = this.options;

			_toggleClass(el, options.invalidGroupClass, false);
			_toggleClass(el, options.validGroupClass, false);

			el = null;
		},

		_animate: function (prevRect, target) {
			var ms = this.options.animation;

			if (ms) {
				var currentRect = target.getBoundingClientRect();

				_css(target, 'transition', 'none');
				_css(target, 'transform', 'translate3d('
					+ (prevRect.left - currentRect.left) + 'px,'
					+ (prevRect.top - currentRect.top) + 'px,0)'
				);

				target.offsetWidth; // repaint

				_css(target, 'transition', 'all ' + ms + 'ms');
				_css(target, 'transform', 'translate3d(0,0,0)');

				clearTimeout(target.animated);
				target.animated = setTimeout(function () {
					_css(target, 'transition', '');
					_css(target, 'transform', '');
					target.animated = false;
				}, ms);
			}
		},

		_offUpEvents: function () {
			var ownerDocument = this.el.ownerDocument;

			_off(document, 'touchmove', this._onTouchMove);
			_off(ownerDocument, 'mouseup', this._onDrop);
			_off(ownerDocument, 'touchend', this._onDrop);
			_off(ownerDocument, 'touchcancel', this._onDrop);
		},

		_onDrop: function (/**Event*/evt) {
			var el = this.el,
				options = this.options;

			this._onDragLeave();

			clearInterval(this._loopId);
			clearInterval(autoScroll.pid);
			clearTimeout(this._dragStartTimer);

			// Unbind events
			_off(document, 'mousemove', this._onTouchMove);

			if (this.nativeDraggable) {
				_off(document, 'drop', this);
				_off(el, 'dragstart', this._onDragStart);
			}

			this._offUpEvents();

			if (evt) {
				if (moved) {
					evt.preventDefault();
					!options.dropBubble && evt.stopPropagation();
				}

				ghostEl && ghostEl.parentNode.removeChild(ghostEl);

				if (dragEl) {
					if (this.nativeDraggable) {
						_off(dragEl, 'dragend', this);
					}

					_disableDraggable(dragEl);
					dragEl.style['will-change'] = '';

					// Remove class's
					_toggleClass(dragEl, this.options.ghostClass, false);
					_toggleClass(dragEl, this.options.chosenClass, false);

					if (rootEl !== parentEl) {
						newIndex = _index(dragEl, options.draggable);

						if (newIndex >= 0) {

							// Add event
							_dispatchEvent(null, parentEl, 'add', dragEl, rootEl, oldIndex, newIndex);

							// Remove event
							_dispatchEvent(this, rootEl, 'remove', dragEl, rootEl, oldIndex, newIndex);

							// drag from one list and drop into another
							_dispatchEvent(null, parentEl, 'sort', dragEl, rootEl, oldIndex, newIndex);
							_dispatchEvent(this, rootEl, 'sort', dragEl, rootEl, oldIndex, newIndex);
						}
					}
					else {
						// Remove clone
						cloneEl && cloneEl.parentNode.removeChild(cloneEl);

						if (dragEl.nextSibling !== nextEl) {
							// Get the index of the dragged element within its parent
							newIndex = _index(dragEl, options.draggable);

							if (newIndex >= 0) {
								// drag & drop within the same list
								_dispatchEvent(this, rootEl, 'update', dragEl, rootEl, oldIndex, newIndex);
								_dispatchEvent(this, rootEl, 'sort', dragEl, rootEl, oldIndex, newIndex);
							}
						}
					}

					if (Sortable.active) {
						/* jshint eqnull:true */
						if (newIndex == null || newIndex === -1) {
							newIndex = oldIndex;
						}

						_dispatchEvent(this, rootEl, 'end', dragEl, rootEl, oldIndex, newIndex);

						// Save sorting
						this.save();
					}
				}

			}

			this._nulling();
		},

		_nulling: function() {
			rootEl =
			dragEl =
			parentEl =
			ghostEl =
			nextEl =
			cloneEl =

			scrollEl =
			scrollParentEl =

			tapEvt =
			touchEvt =

			moved =
			newIndex =

			lastEl =
			lastCSS =

			putSortable =
			activeGroup =
			Sortable.active = null;
		},

		handleEvent: function (/**Event*/evt) {
			var type = evt.type;

			switch (type) {
				case 'dragenter':
					if (dragEl) {
						this._onDragOver(evt);
						_globalDragOver(evt);
					}
					break;

				case 'dragleave':
					if (evt.target.tagName.toLowerCase() === this.options.draggable) {
						evt.preventDefault();
						evt.stopPropagation();
					}
					else {
						this._onDragLeave(evt);
					}
					break;

				case 'drop':
				case 'dragend':
					this._onDrop(evt);
					break;
			}
		},


		/**
		 * Serializes the item into an array of string.
		 * @returns {String[]}
		 */
		toArray: function () {
			var order = [],
				el,
				children = this.el.children,
				i = 0,
				n = children.length,
				options = this.options;

			for (; i < n; i++) {
				el = children[i];
				if (_closest(el, options.draggable, this.el)) {
					order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
				}
			}

			return order;
		},


		/**
		 * Sorts the elements according to the array.
		 * @param  {String[]}  order  order of the items
		 */
		sort: function (order) {
			var items = {}, rootEl = this.el;

			this.toArray().forEach(function (id, i) {
				var el = rootEl.children[i];

				if (_closest(el, this.options.draggable, rootEl)) {
					items[id] = el;
				}
			}, this);

			order.forEach(function (id) {
				if (items[id]) {
					rootEl.removeChild(items[id]);
					rootEl.appendChild(items[id]);
				}
			});
		},


		/**
		 * Save the current sorting
		 */
		save: function () {
			var store = this.options.store;
			store && store.set(this);
		},


		/**
		 * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
		 * @param   {HTMLElement}  el
		 * @param   {String}       [selector]  default: `options.draggable`
		 * @returns {HTMLElement|null}
		 */
		closest: function (el, selector) {
			return _closest(el, selector || this.options.draggable, this.el);
		},


		/**
		 * Set/get option
		 * @param   {string} name
		 * @param   {*}      [value]
		 * @returns {*}
		 */
		option: function (name, value) {
			var options = this.options;

			if (value === void 0) {
				return options[name];
			} else {
				options[name] = value;

				if (name === 'group') {
					_prepareGroup(options);
				}
			}
		},


		/**
		 * Destroy
		 */
		destroy: function () {
			var el = this.el;

			el[expando] = null;

			_off(el, 'mousedown', this._onTapStart);
			_off(el, 'touchstart', this._onTapStart);

			if (this.nativeDraggable) {
				_off(el, 'dragover', this);
				_off(el, 'dragenter', this);
			}

			// Remove draggable attributes
			Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
				el.removeAttribute('draggable');
			});

			touchDragOverListeners.splice(touchDragOverListeners.indexOf(this._onDragOver), 1);
			touchDragOverListeners.splice(touchDragOverListeners.indexOf(this._onDragLeave), 1);

			this._onDrop();

			this.el = el = null;
		}
	};


	function _cloneHide(state) {
		if (cloneEl && (cloneEl.state !== state)) {
			_css(cloneEl, 'display', state ? 'none' : '');
			!state && cloneEl.state && rootEl.insertBefore(cloneEl, dragEl);
			cloneEl.state = state;
		}
	}


	function _closest(/**HTMLElement*/el, /**String*/selector, /**HTMLElement*/ctx) {
		if (el) {
			ctx = ctx || document;

			do {
				if ((selector === '>*' && el.parentNode === ctx) || _matches(el, selector)) {
					return el;
				}
				/* jshint boss:true */
			} while (el = _getParentOrHost(el));
		}

		return null;
	}


	function _getParentOrHost(el) {
		var parent = el.host;

		return (parent && parent.nodeType) ? parent : el.parentNode;
	}


	function _globalDragOver(/**Event*/evt) {
		if (evt.dataTransfer) {
			evt.dataTransfer.dropEffect = 'move';
		}
		evt.preventDefault();
	}


	function _on(el, event, fn) {
		el.addEventListener(event, fn, false);
	}


	function _off(el, event, fn) {
		el.removeEventListener(event, fn, false);
	}


	function _toggleClass(el, name, state) {
		if (el) {
			if (el.classList) {
				el.classList[state ? 'add' : 'remove'](name);
			}
			else {
				var className = (' ' + el.className + ' ').replace(RSPACE, ' ').replace(' ' + name + ' ', ' ');
				el.className = (className + (state ? ' ' + name : '')).replace(RSPACE, ' ');
			}
		}
	}


	function _css(el, prop, val) {
		var style = el && el.style;

		if (style) {
			if (val === void 0) {
				if (document.defaultView && document.defaultView.getComputedStyle) {
					val = document.defaultView.getComputedStyle(el, '');
				}
				else if (el.currentStyle) {
					val = el.currentStyle;
				}

				return prop === void 0 ? val : val[prop];
			}
			else {
				if (!(prop in style)) {
					prop = '-webkit-' + prop;
				}

				style[prop] = val + (typeof val === 'string' ? '' : 'px');
			}
		}
	}


	function _find(ctx, tagName, iterator) {
		if (ctx) {
			var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;

			if (iterator) {
				for (; i < n; i++) {
					iterator(list[i], i);
				}
			}

			return list;
		}

		return [];
	}



	function _dispatchEvent(sortable, rootEl, name, targetEl, fromEl, startIndex, newIndex) {
		sortable = (sortable || rootEl[expando]);

		var evt = document.createEvent('Event'),
			options = sortable.options,
			onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1);

		evt.initEvent(name, true, true);

		evt.to = rootEl;
		evt.from = fromEl || rootEl;
		evt.item = targetEl || rootEl;
		evt.clone = cloneEl;

		evt.oldIndex = startIndex;
		evt.newIndex = newIndex;

		rootEl.dispatchEvent(evt);

		if (options[onName]) {
			options[onName].call(sortable, evt);
		}
	}


	function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvt) {
		var evt,
			sortable = fromEl[expando],
			onMoveFn = sortable.options.onMove,
			retVal;

		evt = document.createEvent('Event');
		evt.initEvent('move', true, true);

		evt.to = toEl;
		evt.from = fromEl;
		evt.dragged = dragEl;
		evt.draggedRect = dragRect;
		evt.related = targetEl || toEl;
		evt.relatedRect = targetRect || toEl.getBoundingClientRect();

		fromEl.dispatchEvent(evt);

		if (onMoveFn) {
			retVal = onMoveFn.call(sortable, evt, originalEvt);
		}

		return retVal;
	}


	function _disableDraggable(el) {
		el.draggable = false;
	}


	function _unsilent() {
		_silent = false;
	}


	/** @returns {HTMLElement|false} */
	function _ghostIsLast(el, evt) {
		var lastEl = el.lastElementChild,
			rect = lastEl.getBoundingClientRect();

		// 5 — min delta
		// abs — нельзя добавлять, а то глюки при наведении сверху
		return (
			(evt.clientY - (rect.top + rect.height) > 5) ||
			(evt.clientX - (rect.right + rect.width) > 5)
		) && lastEl;
	}


	/**
	 * Generate id
	 * @param   {HTMLElement} el
	 * @returns {String}
	 * @private
	 */
	function _generateId(el) {
		var str = el.tagName + el.className + el.src + el.href + el.textContent,
			i = str.length,
			sum = 0;

		while (i--) {
			sum += str.charCodeAt(i);
		}

		return sum.toString(36);
	}

	/**
	 * Returns the index of an element within its parent for a selected set of
	 * elements
	 * @param  {HTMLElement} el
	 * @param  {selector} selector
	 * @return {number}
	 */
	function _index(el, selector) {
		var index = 0;

		if (!el || !el.parentNode) {
			return -1;
		}

		while (el && (el = el.previousElementSibling)) {
			if ((el.nodeName.toUpperCase() !== 'TEMPLATE') && (selector === '>*' || _matches(el, selector))) {
				index++;
			}
		}

		return index;
	}

	function _matches(/**HTMLElement*/el, /**String*/selector) {
		if (el) {
			selector = selector.split('.');

			var tag = selector.shift().toUpperCase(),
				re = new RegExp('\\s(' + selector.join('|') + ')(?=\\s)', 'g');

			return (
				(tag === '' || el.nodeName.toUpperCase() == tag) &&
				(!selector.length || ((' ' + el.className + ' ').match(re) || []).length == selector.length)
			);
		}

		return false;
	}

	function _throttle(callback, ms) {
		var args, _this;

		return function () {
			if (args === void 0) {
				args = arguments;
				_this = this;

				setTimeout(function () {
					if (args.length === 1) {
						callback.call(_this, args[0]);
					} else {
						callback.apply(_this, args);
					}

					args = void 0;
				}, ms);
			}
		};
	}

	function _extend(dst, src) {
		if (dst && src) {
			for (var key in src) {
				if (src.hasOwnProperty(key)) {
					dst[key] = src[key];
				}
			}
		}

		return dst;
	}

	function _clone(el) {
		return $
			? $(el).clone(true)[0]
			: (Polymer && Polymer.dom
				? Polymer.dom(el).cloneNode(true)
				: el.cloneNode(true)
			);
	}


	// Export utils
	Sortable.utils = {
		on: _on,
		off: _off,
		css: _css,
		find: _find,
		is: function (el, selector) {
			return !!_closest(el, selector, el);
		},
		extend: _extend,
		throttle: _throttle,
		closest: _closest,
		toggleClass: _toggleClass,
		clone: _clone,
		index: _index
	};


	/**
	 * Create sortable instance
	 * @param {HTMLElement}  el
	 * @param {Object}      [options]
	 */
	Sortable.create = function (el, options) {
		return new Sortable(el, options);
	};


	// Export
	Sortable.version = '1.4.2';
	return Sortable;
});


/***/ },

/***/ 755:
/***/ function(module, exports) {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ },

/***/ 758:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_App_store_configureStore__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_App_store_configureStore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_App_store_configureStore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_App_features_HeaderConfig_containers__ = __webpack_require__(311);







var store = __WEBPACK_IMPORTED_MODULE_3_App_store_configureStore___default()();

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"],
    { store: store },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_App_features_HeaderConfig_containers__["a" /* Modal */], null)
), document.getElementById('configContainer'));

/***/ }

},[758]);
//# sourceMappingURL=config.js.map