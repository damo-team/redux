(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rxjs/BehaviorSubject"), require("rxjs/Observable"), require("rxjs/Observer"), require("rxjs/Operator"), require("rxjs/Subscriber"), require("rxjs/operator/distinctUntilChanged"), require("rxjs/operator/map"), require("rxjs/operator/observeOn"), require("rxjs/operator/pluck"), require("rxjs/operator/scan"), require("rxjs/operator/withLatestFrom"), require("rxjs/scheduler/queue"));
	else if(typeof define === 'function' && define.amd)
		define(["rxjs/BehaviorSubject", "rxjs/Observable", "rxjs/Observer", "rxjs/Operator", "rxjs/Subscriber", "rxjs/operator/distinctUntilChanged", "rxjs/operator/map", "rxjs/operator/observeOn", "rxjs/operator/pluck", "rxjs/operator/scan", "rxjs/operator/withLatestFrom", "rxjs/scheduler/queue"], factory);
	else if(typeof exports === 'object')
		exports["rxRedux"] = factory(require("rxjs/BehaviorSubject"), require("rxjs/Observable"), require("rxjs/Observer"), require("rxjs/Operator"), require("rxjs/Subscriber"), require("rxjs/operator/distinctUntilChanged"), require("rxjs/operator/map"), require("rxjs/operator/observeOn"), require("rxjs/operator/pluck"), require("rxjs/operator/scan"), require("rxjs/operator/withLatestFrom"), require("rxjs/scheduler/queue"));
	else
		root["rxRedux"] = factory(root["rxjs/BehaviorSubject"], root["rxjs/Observable"], root["rxjs/Observer"], root["rxjs/Operator"], root["rxjs/Subscriber"], root["rxjs/operator/distinctUntilChanged"], root["rxjs/operator/map"], root["rxjs/operator/observeOn"], root["rxjs/operator/pluck"], root["rxjs/operator/scan"], root["rxjs/operator/withLatestFrom"], root["rxjs/scheduler/queue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _applyMiddleware = __webpack_require__(6);

	Object.keys(_applyMiddleware).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _applyMiddleware[key];
	    }
	  });
	});

	var _combineReducers = __webpack_require__(7);

	Object.keys(_combineReducers).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _combineReducers[key];
	    }
	  });
	});

	var _compose = __webpack_require__(4);

	Object.keys(_compose).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _compose[key];
	    }
	  });
	});

	var _dispatcher = __webpack_require__(1);

	Object.keys(_dispatcher).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _dispatcher[key];
	    }
	  });
	});

	var _reducer = __webpack_require__(2);

	Object.keys(_reducer).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _reducer[key];
	    }
	  });
	});

	var _state = __webpack_require__(5);

	Object.keys(_state).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _state[key];
	    }
	  });
	});

	var _store = __webpack_require__(8);

	Object.keys(_store).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _store[key];
	    }
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Dispatcher = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _BehaviorSubject2 = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Dispatcher = exports.Dispatcher = (_temp = _class = function (_BehaviorSubject) {
	  _inherits(Dispatcher, _BehaviorSubject);

	  function Dispatcher() {
	    _classCallCheck(this, Dispatcher);

	    return _possibleConstructorReturn(this, (Dispatcher.__proto__ || Object.getPrototypeOf(Dispatcher)).call(this, { type: Dispatcher.INIT }));
	  }

	  _createClass(Dispatcher, [{
	    key: 'dispatch',
	    value: function dispatch(action) {
	      this.next(action);
	    }
	  }, {
	    key: 'complete',
	    value: function complete() {
	      // noop
	    }
	  }]);

	  return Dispatcher;
	}(_BehaviorSubject2.BehaviorSubject), _class.INIT = '@@redux/INIT', _temp);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Reducer = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _class, _temp;

	var _BehaviorSubject2 = __webpack_require__(3);

	var _dispatcher2 = __webpack_require__(1);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Reducer = exports.Reducer = (_temp = _class = function (_BehaviorSubject) {
	  _inherits(Reducer, _BehaviorSubject);

	  function Reducer(_dispatcher, initialReducer) {
	    _classCallCheck(this, Reducer);

	    var _this = _possibleConstructorReturn(this, (Reducer.__proto__ || Object.getPrototypeOf(Reducer)).call(this, initialReducer));

	    _this._dispatcher = _dispatcher;
	    return _this;
	  }

	  _createClass(Reducer, [{
	    key: 'replaceReducer',
	    value: function replaceReducer(reducer) {
	      this.next(reducer);
	    }
	  }, {
	    key: 'next',
	    value: function next(reducer) {
	      _get(Reducer.prototype.__proto__ || Object.getPrototypeOf(Reducer.prototype), 'next', this).call(this, reducer);
	      this._dispatcher.dispatch({ type: Reducer.REPLACE });
	    }
	  }]);

	  return Reducer;
	}(_BehaviorSubject2.BehaviorSubject), _class.REPLACE = '@rx/store/replace-reducer', _temp);

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.compose = compose;
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  funcs = funcs.filter(function (func) {
	    return typeof func === 'function';
	  });

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  var last = funcs[funcs.length - 1];
	  var rest = funcs.slice(0, -1);
	  return function () {
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.State = undefined;

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _withLatestFrom = __webpack_require__(18);

	var _scan = __webpack_require__(17);

	var _observeOn = __webpack_require__(15);

	var _queue = __webpack_require__(19);

	var _BehaviorSubject2 = __webpack_require__(3);

	var _dispatcher = __webpack_require__(1);

	var _reducer = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var State = exports.State = function (_BehaviorSubject) {
	  _inherits(State, _BehaviorSubject);

	  function State(_initialState, action$, reducer$) {
	    _classCallCheck(this, State);

	    var _this = _possibleConstructorReturn(this, (State.__proto__ || Object.getPrototypeOf(State)).call(this, _initialState));

	    var actionInQueue$ = _observeOn.observeOn.call(action$, _queue.queue);
	    var actionAndReducer$ = _withLatestFrom.withLatestFrom.call(actionInQueue$, reducer$);
	    var state$ = _scan.scan.call(actionAndReducer$, function (state, _ref) {
	      var _ref2 = _slicedToArray(_ref, 2),
	          action = _ref2[0],
	          reducer = _ref2[1];

	      return reducer(state, action);
	    }, _initialState);

	    state$.subscribe(function (value) {
	      return _this.next(value);
	    });
	    return _this;
	  }

	  return State;
	}(_BehaviorSubject2.BehaviorSubject);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.applyMiddleware = applyMiddleware;

	var _compose = __webpack_require__(4);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 * see: https://github.com/reactjs/redux/blob/master/src/applyMiddleware.js
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose.compose.apply(undefined, _toConsumableArray(chain))(store.dispatch);

	      store.dispatch = _dispatch;

	      return store;
	    };
	  };
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.combineReducers = combineReducers;

	var _reducer = __webpack_require__(2);

	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }

	  var finalReducerKeys = Object.keys(finalReducers);

	  return function combination() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];

	    var hasChanged = false;
	    var nextState = {};
	    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
	      var _key = finalReducerKeys[_i];
	      var reducer = finalReducers[_key];
	      var previousStateForKey = state[_key];
	      var nextStateForKey = reducer(previousStateForKey, action);

	      nextState[_key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Store = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.createStore = createStore;

	var _Observer = __webpack_require__(10);

	var _Observable2 = __webpack_require__(9);

	var _Subscriber = __webpack_require__(12);

	var _Operator = __webpack_require__(11);

	var _map = __webpack_require__(14);

	var _pluck = __webpack_require__(16);

	var _distinctUntilChanged = __webpack_require__(13);

	var _dispatcher2 = __webpack_require__(1);

	var _state = __webpack_require__(5);

	var _reducer2 = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Store = exports.Store = function (_Observable) {
	  _inherits(Store, _Observable);

	  function Store(_reducer, state$, _dispatcher) {
	    _classCallCheck(this, Store);

	    var _this = _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this));

	    _this._dispatcher = _dispatcher;
	    _this._reducer = _reducer;
	    _this.source = state$;

	    _this.getState = function () {
	      return _this.source.getValue();
	    };

	    var subscribe = _this.__proto__.subscribe;
	    _this.subscribe = function () {
	      var subscriber = subscribe.apply(this, arguments);
	      return subscriber.unsubscribe.bind(subscriber);
	    };
	    _this._subscribe = _this.__proto__._subscribe;

	    _this.dispatch = function (action) {
	      _this._dispatcher.next(action);
	    };
	    return _this;
	  }

	  _createClass(Store, [{
	    key: 'select',
	    value: function select(pathOrMapFn) {
	      var mapped$ = void 0;

	      var source = _map.map.call(this, function (state) {
	        if (state.computedStates) {
	          state = state.computedStates[state.currentStateIndex];
	          state = state.state ? state.state : _initialState;
	        }
	        return state;
	      });
	      if (typeof pathOrMapFn === 'string') {
	        for (var _len = arguments.length, paths = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	          paths[_key - 1] = arguments[_key];
	        }

	        mapped$ = _pluck.pluck.call.apply(_pluck.pluck, [source, pathOrMapFn].concat(paths));
	      } else if (typeof pathOrMapFn === 'function') {
	        mapped$ = _map.map.call(source, pathOrMapFn);
	      } else {
	        throw new TypeError('Unexpected type ' + (typeof pathOrMapFn === 'undefined' ? 'undefined' : _typeof(pathOrMapFn)) + ' in select operator,' + ' expected \'string\' or \'function\'');
	      }

	      return _distinctUntilChanged.distinctUntilChanged.call(_map.map.call(mapped$, function (state) {
	        if (state.computedStates) {
	          state = state.computedStates[state.currentStateIndex];
	          state = state.state ? state.state : _initialState;
	        }
	        return state;
	      }));
	    }
	  }, {
	    key: 'lift',
	    value: function lift(operator) {
	      var store = new Store(this._reducer, this, this._dispatcher);
	      store.operator = operator;
	      return store;
	    }
	  }, {
	    key: 'replaceReducer',
	    value: function replaceReducer(reducer) {
	      this._reducer.next(reducer);
	    }
	  }, {
	    key: 'next',
	    value: function next(action) {
	      this._dispatcher.next(action);
	    }
	  }, {
	    key: 'error',
	    value: function error(err) {
	      this._dispatcher.error(err);
	    }
	  }, {
	    key: 'complete',
	    value: function complete() {
	      // noop
	    }
	  }]);

	  return Store;
	}(_Observable2.Observable);

	function createStore(_reducer, _initialState, enhancer) {
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(_reducer, _initialState);
	  }

	  if (typeof _reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var dispatcher = new _dispatcher2.Dispatcher();

	  var initialState = _initialState;
	  var reducer = new _reducer2.Reducer(dispatcher, _reducer);
	  if (!(_initialState instanceof _state.State)) {
	    _initialState = _reducer(undefined, { type: _dispatcher2.Dispatcher.INIT });
	    initialState = new _state.State(_initialState, dispatcher, reducer);
	  }

	  return new Store(reducer, initialState, dispatcher);
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }
/******/ ])
});
;