import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="detail-post" class="detail-post"></div>
      <div id="likeButtonContainer"></div>
        
      <div id="post-review" class="post-review">
        <h5>Post Review</h5>
        <div id="form-review" class="form-review">
          <label for="name">Name</label>
          <input type="text" name="name" id="name">
          <label for="review">Review</label>
          <input type="text" name="review" id="review">
          <button type="submit" id="submit">Submit</button>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detail(url.id);
    const restaurantContainer = document.querySelector('#detail-post');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });

    const customerName = document.querySelector('#name');
    const customerReview = document.querySelector('#review');
    const submit = document.querySelector('#submit');
    submit.addEventListener('click', () => {
      if (customerName.value === '' || customerReview.value === '') {
        alert('Name or review cannot be empty!!!');
        customerName.value = '';
        customerReview.value = '';
      } else {
        const review = {
          id: url.id,
          name: customerName.value,
          review: customerReview.value,
        };
        RestaurantSource.postReview(review);
        alert('Review successfully submitted');
        customerName.value = '';
        customerReview.value = '';
      }
    });
  },
};

export default Detail;
