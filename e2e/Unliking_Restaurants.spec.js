const assert = require('assert');

Feature('Unliking Restauran');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked menu restaurant', ({ I }) => {
  I.seeElement('#query');
  I.see('There are no restaurants to show', '.post-item__not__found');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('There are no restaurants to show', '.post-item__not__found');

  I.amOnPage('/');
  I.seeElement('.post-item__title a');

  const firstRestaurant = locate('.post-item__title a').first();
  const firstRestaurantsTitles = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  const unlikedRestaurantsTitles = await I.grabTextFrom('.post-item__title a');

  assert.strictEqual(firstRestaurantsTitles, unlikedRestaurantsTitles);

  I.seeElement('.post-item__title a');
  await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 5);
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('There are no restaurants to show', '.post-item__not__found');
});
