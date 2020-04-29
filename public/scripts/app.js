"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var IndecisionApp = /*#__PURE__*/function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  var _super = _createSuper(IndecisionApp);

  function IndecisionApp(props) {
    var _this;

    _classCallCheck(this, IndecisionApp);

    _this = _super.call(this, props);
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_assertThisInitialized(_this));
    _this.handlePick = _this.handlePick.bind(_assertThisInitialized(_this));
    _this.handleAddOption = _this.handleAddOption.bind(_assertThisInitialized(_this));
    _this.state = {
      options: []
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "handleAddOption",
    value: function handleAddOption(option) {
      console.log("handleAddOption");

      if (!option) {
        return "Option was empty";
      }

      if (this.state.options.indexOf(option) > -1) {
        return "Option already exists";
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      console.log("handlePickCalled");
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      console.log("handleDeleteOptions in Root Component");
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = "Indecision App";
      var subTitle = "Put your life in the hands of a computer";
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        title: title,
        subTitle: subTitle
      }), /*#__PURE__*/React.createElement(Action, {
        hasOptions: this.state.options.length > 0 ? true : false,
        handlePick: this.handlePick
      }), /*#__PURE__*/React.createElement(Options, {
        handleDeleteOptions: this.handleDeleteOptions,
        options: this.state.options
      }), /*#__PURE__*/React.createElement(AddOption, {
        handleAddOption: this.handleAddOption
      }));
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, props.title), /*#__PURE__*/React.createElement("h2", null, props.subTitle));
};

var Action = function Action(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    disabled: !props.hasOptions,
    onClick: props.handlePick
  }, "What Should I Do?"));
};

var Options = /*#__PURE__*/function (_React$Component2) {
  _inherits(Options, _React$Component2);

  var _super2 = _createSuper(Options);

  function Options(props) {
    var _this2;

    _classCallCheck(this, Options);

    _this2 = _super2.call(this, props);
    _this2.removeAll = _this2.removeAll.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(Options, [{
    key: "removeAll",
    value: function removeAll() {
      console.log("remove all called", this.props.options);
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.props.options.length);
      return /*#__PURE__*/React.createElement("div", null, "Options Container Component", /*#__PURE__*/React.createElement("button", {
        onClick: this.props.handleDeleteOptions
      }, "Remove All Items"), /*#__PURE__*/React.createElement("ol", null, this.props.options.map(function (element) {
        return /*#__PURE__*/React.createElement(Option, {
          key: element,
          optionText: element
        });
      })));
    }
  }]);

  return Options;
}(React.Component);

var Option = /*#__PURE__*/function (_React$Component3) {
  _inherits(Option, _React$Component3);

  var _super3 = _createSuper(Option);

  function Option() {
    _classCallCheck(this, Option);

    return _super3.apply(this, arguments);
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      console.log(this.props);
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("li", {
        key: this.props.optionText
      }, this.props.optionText));
    }
  }]);

  return Option;
}(React.Component);

var AddOption = /*#__PURE__*/function (_React$Component4) {
  _inherits(AddOption, _React$Component4);

  var _super4 = _createSuper(AddOption);

  function AddOption(props) {
    var _this3;

    _classCallCheck(this, AddOption);

    _this3 = _super4.call(this, props);
    _this3.handleAddOption = _this3.handleAddOption.bind(_assertThisInitialized(_this3));
    _this3.state = {
      error: undefined
    };
    return _this3;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);

      if (error) {
        console.log(error);
        this.setState(function () {
          return {
            error: error
          };
        });
      } else {
        this.setState(function () {
          return {
            error: undefined
          };
        });
        e.target.elements.option.value = "";
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.error && /*#__PURE__*/React.createElement("p", null, this.state.error), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.handleAddOption
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "option"
      }), /*#__PURE__*/React.createElement("button", null, "Add Option")));
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(IndecisionApp, null), document.getElementById("app"));