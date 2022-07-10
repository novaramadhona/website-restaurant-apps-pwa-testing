import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
      <div class="content">
        <h2 class="content__heading">Favorite Restaurant</h2>
        <div id="search" class="search">
          <input id="query" placeholder="Search favorite restaurant here" type="text">
        </div>
        <div id="posts" class="posts"></div>
      </div>
   `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(posts) {
    this.showFavoriteRestaurants(posts);
  }

  showFavoriteRestaurants(posts = []) {
    let html;
    if (posts.length) {
      html = posts.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('posts').innerHTML = html;

    document.getElementById('posts').dispatchEvent(new Event('posts:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="post-item__not__found posts__not__found">There are no restaurants to show</div>';
  }
}

export default FavoriteRestaurantSearchView;
