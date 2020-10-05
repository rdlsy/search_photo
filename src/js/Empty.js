class Empty {
  $empty = null;
  data = null;

  constructor({
    $target
  }) {
    const $empty = document.createElement('div');
    this.$empty = $empty;
    $empty.className = 'Empty';
    $target.appendChild($empty);

    this.data = {
      show: false,
      isNull: false
    }

    this.render();
  }

  show(data) {
    this.setState({
      show: data === null || data.length === 0,
      isNull: data === null
    });
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    if (this.data.show) {
      this.$empty.style.display = 'flex';
      if (this.data.isNull) {
        this.$empty.innerHTML = `
          <p>요청실패</p>
        `
      } else {
        this.$empty.innerHTML = `
          <p>검색결과없음</p>
        `
      }
    } else {
      this.$empty.style.display = 'none';
      this.$empty.innerHTML = '';
    }
  }
}

export default Empty;