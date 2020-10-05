class ImageInfo {
  $imageInfo = null;
  data = null;

  constructor({ $target, data }) {
    const $imageInfo = document.createElement('div');
    $imageInfo.className = 'ImageInfo';
    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);

    this.data = data;
    this.render();
  }

  showDetail(data) {
    this.setState({
      visible: true,
      image: data
    });
  }

  closeDetail() {
    this.setState({
      visible: false,
      image: null
    })
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    if (this.data.visible) {
      const { title, farm, server, id, secret } = this.data.image.image;

      this.$imageInfo.innerHTML = `
        <div class="content-wrapper">
          <button type="button" class="close">닫기</button>
          <img src="https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_b.jpg" alt="" />
          <p>${title}</p>
        </div>`;
      this.$imageInfo.style.display = 'flex';

      document.addEventListener('keyup', (e) => {
        if (e.key === 'Escape') {
          this.closeDetail();
        }
      });

      this.$imageInfo.addEventListener('click', (e) => {
        if (e.target.className === 'ImageInfo' || e.target.className === 'close') {
          this.closeDetail();
        }
      });
    } else {
      this.$imageInfo.style.display = "none";
    }
  }
}

export default ImageInfo;