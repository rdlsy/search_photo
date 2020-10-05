"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("./config.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var API_ENDPOINT = _config["default"].API_ENDPOINT,
    KEY = _config["default"].KEY;
var per_page = 20;
var tagmode = 'any';
var privacy_filter = 5;
var format = 'json';
var nojsoncallback = 1;

var request = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch(url);

          case 3:
            result = _context.sent;
            return _context.abrupt("return", result.json());

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            alert(_context.t0.msg);
            return _context.abrupt("return", {
              data: null
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function request(_x) {
    return _ref.apply(this, arguments);
  };
}();

var api = {
  fetchData: function fetchData(keyword, page) {
    return request("".concat(API_ENDPOINT, "&api_key=").concat(KEY, "&per_page=").concat(per_page, "&tagmode=").concat(tagmode, "&privacy_filter=").concat(privacy_filter, "&format=").concat(format, "&nojsoncallback=").concat(nojsoncallback, "&tags=").concat(keyword, "&page=").concat(page));
  }
};
var _default = api;
exports["default"] = _default;