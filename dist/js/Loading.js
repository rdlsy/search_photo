"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Loading = /*#__PURE__*/function () {
  function Loading(_ref) {
    var $target = _ref.$target;

    _classCallCheck(this, Loading);

    _defineProperty(this, "$loading", null);

    _defineProperty(this, "data", null);

    var $loading = document.createElement('div');
    this.$loading = $loading;
    $loading.className = 'Loading';
    $target.appendChild($loading);
    this.data = {
      show: false
    };
    this.render();
  }

  _createClass(Loading, [{
    key: "show",
    value: function show() {
      this.setState({
        show: true
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      this.setState({
        show: false
      });
    }
  }, {
    key: "setState",
    value: function setState(nextData) {
      this.data = nextData;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      if (this.data.show) {
        this.$loading.style.display = 'flex';
        this.$loading.innerHTML = "\n        <p>\uB85C\uB529\uC911...</p>\n      ";
      } else {
        this.$loading.style.display = 'none';
        this.$loading.innerHTML = '';
      }
    }
  }]);

  return Loading;
}();

var _default = Loading;
exports["default"] = _default;