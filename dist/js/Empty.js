"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Empty = /*#__PURE__*/function () {
  function Empty(_ref) {
    var $target = _ref.$target;

    _classCallCheck(this, Empty);

    _defineProperty(this, "$empty", null);

    _defineProperty(this, "data", null);

    var $empty = document.createElement('div');
    this.$empty = $empty;
    $empty.className = 'Empty';
    $target.appendChild($empty);
    this.data = {
      show: false,
      isNull: false
    };
    this.render();
  }

  _createClass(Empty, [{
    key: "show",
    value: function show(data) {
      this.setState({
        show: data === null || data.length === 0,
        isNull: data === null
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
        this.$empty.style.display = 'flex';

        if (this.data.isNull) {
          this.$empty.innerHTML = "\n          <p>\uC694\uCCAD\uC2E4\uD328</p>\n        ";
        } else {
          this.$empty.innerHTML = "\n          <p>\uAC80\uC0C9\uACB0\uACFC\uC5C6\uC74C</p>\n        ";
        }
      } else {
        this.$empty.style.display = 'none';
        this.$empty.innerHTML = '';
      }
    }
  }]);

  return Empty;
}();

var _default = Empty;
exports["default"] = _default;