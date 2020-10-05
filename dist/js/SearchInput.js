"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _KeywordHistory = _interopRequireDefault(require("./KeywordHistory.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SearchInput = /*#__PURE__*/function () {
  function SearchInput(_ref) {
    var _this = this;

    var $target = _ref.$target,
        onSearch = _ref.onSearch;

    _classCallCheck(this, SearchInput);

    var $wrapper = document.createElement('section');
    $wrapper.className = 'SearchArea';
    var $txt = document.createElement('p');
    $txt.textContent = 'WHAT ARE YOU LOOKING FOR?';
    $txt.className = 'SearchTxt';
    var $InputWrap = document.createElement('div');
    $InputWrap.className = 'InputWrap';
    var $searchInput = document.createElement('input');
    this.$searchInput = $searchInput;
    $searchInput.className = 'SearchInput';
    $searchInput.placeholder = 'search';
    var $searchBtn = document.createElement('button');
    var $searchIcon = document.createElement('i');
    this.$searchBtn = $searchBtn;
    $searchBtn.className = 'SearchBtn';
    $searchIcon.className = 'fa fa-search';
    $searchBtn.appendChild($searchIcon);
    $InputWrap.appendChild($searchInput);
    $InputWrap.appendChild($searchBtn);
    $wrapper.appendChild($txt);
    $wrapper.appendChild($InputWrap);
    $target.appendChild($wrapper);
    this.keywordHistory = new _KeywordHistory["default"]({
      $target: $wrapper,
      onSearch: onSearch
    });
    $searchInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        if (!e.target.value) {
          alert('검색어를 입력해주세요');
          return;
        } else {
          onSearch(e.target.value, 1);

          _this.keywordHistory.addKeyword(e.target.value, 1);
        }
      }
    });
    $searchBtn.addEventListener('click', function (e) {
      if (!$searchInput.value) {
        alert('검색어를 입력해주세요');
        return;
      } else {
        onSearch(e.target.value, 1);

        _this.keywordHistory.addKeyword(e.target.value, 1);
      }
    });
    $searchInput.addEventListener('click', function () {
      $searchInput.value = '';
    });
  }

  _createClass(SearchInput, [{
    key: "inputFocus",
    value: function inputFocus(keyword) {
      this.$searchInput.focus();
      this.$searchInput.value = keyword;
    }
  }, {
    key: "render",
    value: function render() {}
  }]);

  return SearchInput;
}();

var _default = SearchInput;
exports["default"] = _default;