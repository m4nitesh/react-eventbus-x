"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EventBus =
/*#__PURE__*/
function () {
  function EventBus() {
    _classCallCheck(this, EventBus);

    _defineProperty(this, "subscribe", function (Component) {
      if (!Component.prototype.observeEvent) {
        throw new Error("Callback method not added to ".concat(Component.name));
      }

      if (Component.prototype.observeEvent.length < 2) {
        throw new Error('Callback method does not have supporting args length');
      }

      window.EventBus[Component.name] = Component.prototype.observeEvent;
    });

    _defineProperty(this, "isSubscriberAttached", function (Component) {
      if (window.EventBus[Component.name]) {
        return true;
      }

      return false;
    });

    _defineProperty(this, "unsubscribe", function (Component) {
      delete window.EventBus[Component.name];
    });

    /**
     * Initialize and Attach Eventbus to window if not done
     */
    if (!window.EventBus) {
      window.EventBus = {};
    }
  }
  /**
   * Add to the list of subscribers, if already added reject and throw error
   * args - unique key and object
   * return type void
   */


  _createClass(EventBus, null, [{
    key: "sendEvent",

    /**
     * Checks if events bus attached to window if not throws error(internal error, constructor didn't work)
     * Finds in the list of subscribers and sends
    */
    value: function sendEvent(ComponentName, key, val) {
      if (!window.EventBus) {
        throw new Error('Eventbus is not initialized, use HOC(withEventBus) to initialize');
      }

      var _callback = window.EventBus[ComponentName];

      if (!_callback) {
        throw new Error(" ".concat(ComponentName, " not subscribed "));
      }

      _callback(key, val);
    }
  }]);

  return EventBus;
}();

var withEventBus = function withEventBus() {
  return function (Component) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(WithEventBus, _React$Component);

      function WithEventBus(props) {
        var _this;

        _classCallCheck(this, WithEventBus);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(WithEventBus).call(this, props));

        _defineProperty(_assertThisInitialized(_this), "eventBus", null);

        if (_this.eventBus == null) {
          _this.eventBus = new EventBus();
        }

        return _this;
      }

      _createClass(WithEventBus, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.eventBus.subscribe(Component);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.eventBus.unsubscribe(Component);
        }
      }, {
        key: "render",
        value: function render() {
          return React.createElement(Component, this.props);
        }
      }]);

      return WithEventBus;
    }(React.Component), _temp;
  };
};

var _default = withEventBus;
exports["default"] = _default;