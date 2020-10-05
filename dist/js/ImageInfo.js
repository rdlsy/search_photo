"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ImageInfo = /*#__PURE__*/function () {
  function ImageInfo(_ref) {
    var $target = _ref.$target,
        data = _ref.data;

    _classCallCheck(this, ImageInfo);

    _defineProperty(this, "$imageInfo", null);

    _defineProperty(this, "data", null);

    var $imageInfo = document.createElement('div');
    $imageInfo.className = 'ImageInfo';
    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);
    this.data = data;
    this.render();
  }

  _createClass(ImageInfo, [{
    key: "showDetail",
    value: function showDetail(data) {
      this.setState({
        visible: true,
        image: data
      });
    }
  }, {
    key: "closeDetail",
    value: function closeDetail() {
      this.setState({
        visible: false,
        image: null
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
      var _this = this;

      if (this.data.visible) {
        var _this$data$image$imag = this.data.image.image,
            title = _this$data$image$imag.title,
            farm = _this$data$image$imag.farm,
            server = _this$data$image$imag.server,
            id = _this$data$image$imag.id,
            secret = _this$data$image$imag.secret;
        this.$imageInfo.innerHTML = "\n        <div class=\"content-wrapper\">\n          <button type=\"button\" class=\"close\">\uB2EB\uAE30</button>\n          <img src=\"https://farm".concat(farm, ".staticflickr.com/").concat(server, "/").concat(id, "_").concat(secret, "_b.jpg\" alt=\"\" />\n          <p>").concat(title, "</p>\n        </div>");
        this.$imageInfo.style.display = 'flex';
        document.addEventListener('keyup', function (e) {
          if (e.key === 'Escape') {
            _this.closeDetail();
          }
        });
        this.$imageInfo.addEventListener('click', function (e) {
          if (e.target.className === 'ImageInfo' || e.target.className === 'close') {
            _this.closeDetail();
          }
        });
      } else {
        this.$imageInfo.style.display = "none";
      }
    }
  }]);

  return ImageInfo;
}();

var _default = ImageInfo;
exports["default"] = _default;