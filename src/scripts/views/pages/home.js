import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate, createSkeletonRestaurantTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Explore Restaurant</h2>

        <div id="posts" class="posts">
          ${createSkeletonRestaurantTemplate(20)}
        </div>

        <article class="review">
          <h3 class="review__title">Customer Review</h3>
          <div class="review__content">
            <div class="review__item">
              <h4 class="review__name">Customer's Name</h4>
              <p class="review__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
                eum facere nostrum officiis qui quidem ratione similique, soluta
                veniam voluptatum.
              </p>
              <button class="review__button">Read More</button>
            </div>
            <div class="review__item">
              <h4 class="review__name">Customer's Name</h4>
              <p class="review__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
                eum facere nostrum officiis qui quidem ratione similique, soluta
                veniam voluptatum.
              </p>
              <button class="review__button">Read More</button>
            </div>
          </div>  
        </article>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.home();
    const restaurantsContainer = document.querySelector('#posts');
    restaurantsContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
