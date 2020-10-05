"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _api = _interopRequireDefault(require("./api.js"));

var _SearchInput = _interopRequireDefault(require("./SearchInput.js"));

var _SearchResult = _interopRequireDefault(require("./SearchResult.js"));

var _ImageInfo = _interopRequireDefault(require("./ImageInfo.js"));

var _Loading = _interopRequireDefault(require("./Loading.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var App = /*#__PURE__*/function () {
  function App($target) {
    var _this = this;

    _classCallCheck(this, App);

    _defineProperty(this, "$target", null);

    _defineProperty(this, "data", []);

    _defineProperty(this, "page", 1);

    this.$target = $target;
    this.searchInput = new _SearchInput["default"]({
      $target: $target,
      onSearch: function onSearch(keyword, page) {
        var $wrap = document.querySelector('.SearchResult ul');
        $wrap.classList.remove('on');
        var self = _this;

        _this.loading.show();

        function dataResult() {
          return _dataResult.apply(this, arguments);
        }

        function _dataResult() {
          _dataResult = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var result;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _api["default"].fetchData(keyword, page);

                  case 2:
                    result = _context.sent;
                    self.setState(result.photos.photo);
                    setTimeout(function () {
                      self.isoLayout($wrap);
                      $wrap.classList.add('on');
                      self.loading.hide();
                    }, 300);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
          return _dataResult.apply(this, arguments);
        }

        dataResult();

        _this.searchInput.inputFocus(keyword);
      }
    });
    this.searchResult = new _SearchResult["default"]({
      $target: $target,
      initialData: this.data,
      onClick: function onClick(image) {
        _this.imageInfo.showDetail({
          visible: true,
          image: image
        });
      },
      onScroll: function onScroll() {
        var keywordHistory = localStorage.getItem("keywordHistory") === null ? [] : localStorage.getItem("keywordHistory").split(",");
        var lastKeyword = keywordHistory[0];
        var page = _this.page + 1;
        var self = _this;

        _this.loading.show();

        function dataPaging() {
          return _dataPaging.apply(this, arguments);
        }

        function _dataPaging() {
          _dataPaging = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var nextResult, $wrap, newData;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return _api["default"].fetchData(lastKeyword, page);

                  case 2:
                    nextResult = _context2.sent;
                    $wrap = document.querySelector('.SearchResult ul');
                    newData = self.data.concat(nextResult.photos.photo);
                    self.setState(newData);
                    setTimeout(function () {
                      self.isoLayout($wrap);
                      self.loading.hide();
                    }, 300);
                    self.page = page;
                    self.loading.hide();

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
          return _dataPaging.apply(this, arguments);
        }

        dataPaging();
      }
    });
    this.imageInfo = new _ImageInfo["default"]({
      $target: $target,
      data: {
        visible: false,
        image: null
      }
    });
    this.loading = new _Loading["default"]({
      $target: $target
    });
  }

  _createClass(App, [{
    key: "isoLayout",
    value: function isoLayout(target) {
      new Isotope(target, {
        itemSelector: '.item',
        columnWidth: '.item',
        transitionDuration: '0.5s',
        percentPosition: true
      });
    }
  }, {
    key: "setState",
    value: function setState(nextData) {
      this.data = nextData;
      this.searchResult.setState(nextData);
    }
  }]);

  return App;
}();

var _default = App;
exports["default"] = _default;