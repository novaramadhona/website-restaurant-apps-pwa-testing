import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h3 class="restaurant__title">${restaurant.name}</h3>
  <img class="restaurant__thumbnail" src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information</h3>
      <h4>City</h4>
      <p>${restaurant.city}</p>
      <h4>Address</h4>
      <p>${restaurant.address}</p>
      <h4>Rating</h4>
      <p>⭐️ ${restaurant.rating}</p>
      <h4>Categories</h4>
      <p>${restaurant.categories.map((category) => category.name).join(' - ')}</p>
  </div>
  <div class="detail__information">
    <h4>Description</h4>
      <p>${restaurant.description} minutes</p>
    <h4>Foods</h4>
      <p>${restaurant.menus.foods.map((food) => food.name).join(' - ')}</p>
    <h4>Drinks</h4>
      <p>${restaurant.menus.drinks.map((drink) => drink.name).join(' - ')}</p>
    <div class="Customer-review__tittle">
      <h4>Customer Review</h4>
    </div>
      <span>${restaurant.customerReviews.map((customerReview) => `
        <div class="customer">
          <p class="customer__name">${customerReview.name}</p> 
          <p class="customer__review">"${customerReview.review}"</p>
          <p class="customer__date">${customerReview.date}</p>
        </div>
      `)}</span>
  </div>
`;

const createSkeletonRestaurantTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
    <article class="post-item">
      <img class="post-item__thumbnail" src="./images/skeleton.png" alt="skeleton">
      <div class="post-item__content">
        <p class="post-item__rating">⭐️</p>
        <p class="post-item__city"> - City</p>
        <h3 class="post-item__title"Lorem ipsum dolor sit</h3>
      </div>
    </article>
  `;
  }
  return template;
};

const createRestaurantItemTemplate = (restaurant) => `
  <article class="post-item">
    <img class="post-item__thumbnail lazyload" alt="${restaurant.name}" data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}"/>
    <div class="post-item__content">
      <p class="post-item__rating">⭐️ ${restaurant.rating || '-'}</p>
      <p class="post-item__city">${restaurant.city || '-'} City</p>
      <h3 class="post-item__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name || '-'}</a></h3>
    </div>
  </article>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createSkeletonRestaurantTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
