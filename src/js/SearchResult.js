import Empty from './Empty.js';

class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;
  onScroll = null;

  constructor({ $target, initialData, onClick, onScroll }) {
    const $wrapper = document.createElement('section');
    $wrapper.className = 'SearchResult';

    const $searchResult = document.createElement('ul');
    this.$searchResult = $searchResult;

    $wrapper.appendChild($searchResult);
    $target.appendChild($wrapper);

    this.data = initialData;
    this.onClick = onClick;
    this.onScroll = onScroll;

    this.empty = new Empty({
      $target: $wrapper
    });

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
    this.empty.show(nextData);
  }

  render() {
    if (this.data === null || this.data.length === 0) {
      this.$searchResult.style.display = 'none';
      document.querySelector('body').classList.remove('active');
      return
    }
    this.$searchResult.style.display = 'block';
    document.querySelector('body').classList.add('active');
    this.$searchResult.innerHTML = this.data
      .map((item, index) => `
        <li class="item" data-index=${index}>
          <div class="inner">
            <div class="imgWrap">
              <img src="https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg" alt=${item.title} />
            </div>
          </div>
        </li>
      `
      )
      .join('');

    this.$searchResult.querySelectorAll('.item').forEach(($item, index) => {
      $item.addEventListener('click', () => {
        this.onClick(this.data[index]);
      });

      setTimeout(() => {
        $item.classList.add('on');
      }, 700);
    });

    window.onscroll = () => {
      let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
      let clientHeight = document.documentElement.clientHeight;
      let height = scrollTop + clientHeight === scrollHeight;

      if (height) {
        this.onScroll();
      }
    }
  }
}

export default SearchResult;
