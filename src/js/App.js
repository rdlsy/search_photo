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
        const $wrap = document.querySelector('.SearchResult ul');
        $wrap.classList.remove('on');
        let self = this;
        this.loading.show();
        async function dataResult() {
          const result = await api.fetchData(keyword, page);
          self.setState(result.photos.photo);
          setTimeout(() => {
            self.isoLayout($wrap);
            $wrap.classList.add('on');
            self.loading.hide();
          }, 300);
        }
        dataResult();
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
        const lastKeyword = keywordHistory[0];
        const page = this.page + 1;
        let self = this;
        this.loading.show();
        async function dataPaging() {
          const nextResult = await api.fetchData(lastKeyword, page);
          const $wrap = document.querySelector('.SearchResult ul');
          let newData = self.data.concat(nextResult.photos.photo);
          self.setState(newData);
          setTimeout(() => {
            self.isoLayout($wrap);
            self.loading.hide();
          }, 300);
          self.page = page;
          self.loading.hide();
        }
        dataPaging();
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