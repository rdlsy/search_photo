import KeywordHistory from './KeywordHistory.js';

class SearchInput {
  constructor({ $target, onSearch }) {
    const $wrapper = document.createElement('section');
    $wrapper.className = 'SearchArea';

    const $txt = document.createElement('p');
    $txt.textContent = 'WHAT ARE YOU LOOKING FOR?';
    $txt.className = 'SearchTxt';

    const $InputWrap = document.createElement('div');
    $InputWrap.className = 'InputWrap';

    const $searchInput = document.createElement('input');
    this.$searchInput = $searchInput;
    $searchInput.className = 'SearchInput';
    $searchInput.placeholder = 'search';

    const $searchBtn = document.createElement('button');
    const $searchIcon = document.createElement('i');
    this.$searchBtn = $searchBtn;
    $searchBtn.className = 'SearchBtn';
    $searchIcon.className = 'fa fa-search';
    $searchBtn.appendChild($searchIcon);

    $InputWrap.appendChild($searchInput);
    $InputWrap.appendChild($searchBtn);
    $wrapper.appendChild($txt);
    $wrapper.appendChild($InputWrap);
    $target.appendChild($wrapper);

    this.keywordHistory = new KeywordHistory({
      $target: $wrapper,
      onSearch
    });

    $searchInput.addEventListener('keypress', e => {
      if (e.key === 'Enter') {
        if (!e.target.value) {
          alert('검색어를 입력해주세요');
          return;
        } else {
          onSearch(e.target.value, 1);
          this.keywordHistory.addKeyword(e.target.value, 1);
        }
      }
    });
    $searchBtn.addEventListener('click', e => {
      if (!$searchInput.value) {
        alert('검색어를 입력해주세요');
        return;
      } else {
        onSearch(e.target.value, 1);
        this.keywordHistory.addKeyword(e.target.value, 1);
      }
    });

    $searchInput.addEventListener('click', () => {
      $searchInput.value = '';
    });
  }

  inputFocus(keyword) {
    this.$searchInput.focus();
    this.$searchInput.value = keyword;
  }

  render() { }
}

export default SearchInput;