"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

exports["default"] = components;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function components(React) {
  var Metronome = (function (_React$Component) {
    _inherits(Metronome, _React$Component);

    function Metronome() {
      _classCallCheck(this, Metronome);

      _get(Object.getPrototypeOf(Metronome.prototype), "constructor", this).apply(this, arguments);

      this.state = {
        value: this.props.initial || 0
      };
    }

    _createClass(Metronome, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        var _this = this;

        this.intval = setInterval(function () {
          return (_this.props.onTick(_this.state.value + 1), _this.setState({ value: _this.state.value + 1 }));
        }, this.props.period);
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        clearInterval(this.intval);
        this.intval = setInterval(function () {
          return _this2.setState({ value: _this2.state.value + 1 });
        }, nextProps.period);
      }
    }, {
      key: "render",
      value: function render() {
        return this.props.children(this.state.value);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        clearInterval(this.intval);
      }
    }], [{
      key: "defaultProps",
      value: {
        initial: 0,
        period: 1000,
        onTick: function onTick() {}
      },
      enumerable: true
    }]);

    return Metronome;
  })(React.Component);

  return { Metronome: Metronome };
}

module.exports = exports["default"];