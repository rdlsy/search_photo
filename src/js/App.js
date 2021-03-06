import api from './api.js';
import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';
import ImageInfo from './ImageInfo.js';
import Loading from './Loading.js';

class App {
  $target = null;
  data = [];
  page = 1;

  constructor($target) {
    this.$target = $target;

    this.searchInput = new SearchInput({
      $target,
      onSearch: (keyword, page) => {
        this.loading.show();
        this.fetchData({ keyword, page });
        this.searchInput.inputFocus(keyword);
      }
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: image => {
        this.imageInfo.showDetail({
          visible: true,
          image
        });
      },
      onScroll: () => {
        const keywordHistory = localStorage.getItem("keywordHistory") === null ? [] : localStorage.getItem("keywordHistory").split(",");
        const keyword = keywordHistory[0];
        const page = this.page + 1;
        this.loading.show();
        this.fetchNextData({ keyword, page });
      }
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null
      }
    });

    this.loading = new Loading({
      $target
    });
  }

  async fetchData({ keyword, page }) {
    const result = await api.fetchData(keyword, page);
    this.setState(result.photos.photo);
    setTimeout(() => {
      this.layout();
    }, 500);
    this.loading.hide();
  }

  async fetchNextData({ keyword, page }) {
    const result = await api.fetchData(keyword, page);
    let newData = this.data.concat(result.photos.photo);
    this.setState(newData);
    setTimeout(() => {
      this.layout();
    }, 500);
    this.page = page;
    this.loading.hide();
  }

  layout() {
    const $wrap = document.querySelector('.SearchResult ul');
    this.isoLayout($wrap);
  }

  isoLayout(target) {
    new Isotope(target, {
      itemSelector: '.item',
      columnWidth: '.item',
      transitionDuration: '0.5s',
      percentPosition: true,
    });
  }

  setState(nextData) {
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}

export default App;