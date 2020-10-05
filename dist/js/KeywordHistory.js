"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var KeywordHistory = /*#__PURE__*/function () {
  function KeywordHistory(_ref) {
    var $target = _ref.$target,
        onSearch = _ref.onSearch;

    _classCallCheck(this, KeywordHistory);

    _defineProperty(this, "$keywordHistory", null);

    _defineProperty(this, "data", null);

    var $keywordHistory = document.createElement('ul');
    this.$keywordHistory = $keywordHistory;
    $keywordHistory.className = 'KeywordHistory';
    $target.appendChild($keywordHistory);
    this.onSearch = onSearch;
    this.init();
    this.render();
  }

  _createClass(KeywordHistory, [{
    key: "init",
    value: function init() {
      var data = localStorage.getItem('keywordHistory') === null ? [] : localStorage.getItem('keywordHistory').split(',');
      data = data.filter(function (item, index) {
        return data.indexOf(item) === index;
      });
      this.setState(data);
    }
  }, {
    key: "addKeyword",
    value: function addKeyword(keyword) {
      var keywordHistory = localStorage.getItem('keywordHistory') === null ? [] : localStorage.getItem('keywordHistory').split(',');
      keywordHistory.unshift(keyword);
      keywordHistory = keywordHistory.filter(function (item, index) {
        return keywordHistory.indexOf(item) === index;
      });
      keywordHistory = keywordHistory.slice(0, 5);
      localStorage.setItem('keywordHistory', keywordHistory.join(','));
      this.init();
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
      var _this = this;

      this.$keywordHistory.innerHTML = this.data.map(function (keyword) {
        return "<li><button type=\"button\">".concat(keyword, "</button></li>");
      }).join('');
      this.$keywordHistory.querySelectorAll('li button').forEach(function ($item, index) {
        $item.addEventListener('click', function () {
          _this.onSearch(_this.data[index]);
        });
      });
    }
  }]);

  return KeywordHistory;
}();

var _default = KeywordHistory;
exports["default"] = _default;