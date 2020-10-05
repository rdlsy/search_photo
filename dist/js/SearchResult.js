"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Empty = _interopRequireDefault(require("./Empty.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SearchResult = /*#__PURE__*/function () {
  function SearchResult(_ref) {
    var $target = _ref.$target,
        initialData = _ref.initialData,
        onClick = _ref.onClick,
        onScroll = _ref.onScroll;

    _classCallCheck(this, SearchResult);

    _defineProperty(this, "$searchResult", null);

    _defineProperty(this, "data", null);

    _defineProperty(this, "onClick", null);

    _defineProperty(this, "onScroll", null);

    var $wrapper = document.createElement('section');
    $wrapper.className = 'SearchResult';
    var $searchResult = document.createElement('ul');
    this.$searchResult = $searchResult;
    $wrapper.appendChild($searchResult);
    $target.appendChild($wrapper);
    this.data = initialData;
    this.onClick = onClick;
    this.onScroll = onScroll;
    this.empty = new _Empty["default"]({
      $target: $wrapper
    });
    this.render();
  } // listObserver = new IntersectionObserver((items, observer) => {
  //   items.forEach(item => {
  //     if (item.isIntersecting) {
  //       item.target.querySelector("img").src = item.target.querySelector("img").dataset.src;
  //       let dataIndex = Number(item.target.dataset.index);
  //       if (dataIndex + 1 === this.data.length) {
  //         this.onScroll();
  //       }
  //     }
  //   });
  // });


  _createClass(SearchResult, [{
    key: "setState",
    value: function setState(nextData) {
      this.data = nextData;
      this.render();
      this.empty.show(nextData);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      if (this.data === null || this.data.length === 0) {
        this.$searchResult.style.display = 'none';
        document.querySelector('body').classList.remove('active');
        return;
      }

      this.$searchResult.style.display = 'block';
      document.querySelector('body').classList.add('active');
      this.$searchResult.innerHTML = this.data.map(function (item, index) {
        return "\n        <li class=\"item\" data-index=".concat(index, ">\n          <div class=\"inner\">\n            <div class=\"imgWrap\">\n              <img src=\"https://farm").concat(item.farm, ".staticflickr.com/").concat(item.server, "/").concat(item.id, "_").concat(item.secret, "_m.jpg\" alt=").concat(item.title, " />\n            </div>\n          </div>\n        </li>\n      ");
      }).join('');
      this.$searchResult.querySelectorAll('.item').forEach(function ($item, index) {
        $item.addEventListener('click', function () {
          _this.onClick(_this.data[index]);
        });
        setTimeout(function () {
          $item.classList.add('on');
        }); //this.listObserver.observe($item);
      });

      window.onscroll = function () {
        var scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        var clientHeight = document.documentElement.clientHeight;
        var height = scrollTop + clientHeight === scrollHeight;

        if (height) {
          _this.onScroll();
        }
      };
    }
  }]);

  return SearchResult;
}();

var _default = SearchResult;
exports["default"] = _default;