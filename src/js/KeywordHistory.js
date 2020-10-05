class KeywordHistory {
  $keywordHistory = null;
  data = null;

  constructor({ $target, onSearch }) {
    const $keywordHistory = document.createElement('ul');
    this.$keywordHistory = $keywordHistory;
    $keywordHistory.className = 'KeywordHistory';

    $target.appendChild($keywordHistory);

    this.onSearch = onSearch;
    this.init();
    this.render();
  }

  init() {
    let data = localStorage.getItem('keywordHistory') === null ? [] : localStorage.getItem('keywordHistory').split(',');
    data = data.filter((item, index) => data.indexOf(item) === index);
    this.setState(data);
  }

  addKeyword(keyword) {
    let keywordHistory = localStorage.getItem('keywordHistory') === null ? [] : localStorage.getItem('keywordHistory').split(',');

    keywordHistory.unshift(keyword);
    keywordHistory = keywordHistory.filter((item, index) => keywordHistory.indexOf(item) === index);
    keywordHistory = keywordHistory.slice(0, 5);
    localStorage.setItem('keywordHistory', keywordHistory.join(','));

    this.init();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    this.$keywordHistory.innerHTML = this.data
      .map(
        keyword =>
          `<li><button type="button">${keyword}</button></li>`
      ).join('');

    this.$keywordHistory.querySelectorAll('li button').forEach(($item, index) => {
      $item.addEventListener('click', () => {
        this.onSearch(this.data[index]);
      });
    });
  }
}

export default KeywordHistory;