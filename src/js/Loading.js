class Loading {
  $loading = null;
  data = null;

  constructor({ $target }) {
    const $loading = document.createElement('div');
    this.$loading = $loading;
    $loading.className = 'Loading';

    $target.appendChild($loading);

    this.data = {
      show: false
    }

    this.render();
  }

  show() {
    this.setState({
      show: true
    });
  }

  hide() {
    this.setState({
      show: false
    })
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    if (this.data.show) {
      this.$loading.style.display = 'flex';
      this.$loading.innerHTML = `
        <p>로딩중...</p>
      `
    } else {
      this.$loading.style.display = 'none';
      this.$loading.innerHTML = '';
    }
  }
}

export default Loading;