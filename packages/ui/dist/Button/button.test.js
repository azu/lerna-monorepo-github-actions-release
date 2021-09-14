"use strict";

require("jest-dom/extend-expect");

var _react = _interopRequireDefault(require("react"));

var _reactTestingLibrary = require("react-testing-library");

var _Buttonn = _interopRequireDefault(require("./Buttonn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

afterEach(_reactTestingLibrary.cleanup);
describe(':: Button Component ::', function () {
  it('applies correct default props', function () {
    var _render = (0, _reactTestingLibrary.render)( /*#__PURE__*/_react["default"].createElement(_Buttonn["default"], null, function (_ref) {
      var getProps = _ref.getProps;
      return /*#__PURE__*/_react["default"].createElement("button", _extends({}, getProps(), {
        "data-testid": "my-button"
      }), "Example Button");
    })),
        getByTestId = _render.getByTestId;

    expect(getByTestId('my-button')).toHaveAttribute('role', 'button');
    expect(getByTestId('my-button')).toHaveAttribute('type', 'button');
  });
  it('correctly overrides type prop', function () {
    var _render2 = (0, _reactTestingLibrary.render)( /*#__PURE__*/_react["default"].createElement(_Buttonn["default"], {
      type: "submit"
    }, function (_ref2) {
      var getProps = _ref2.getProps;
      return /*#__PURE__*/_react["default"].createElement("button", _extends({}, getProps(), {
        "data-testid": "my-button"
      }), "Example Button");
    })),
        getByTestId = _render2.getByTestId;

    expect(getByTestId('my-button')).toHaveAttribute('role', 'button');
    expect(getByTestId('my-button')).toHaveAttribute('type', 'submit');
  });
});