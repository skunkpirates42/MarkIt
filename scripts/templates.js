'use strict';
/* global store */

const templates = (function () {

  function generateControlsTemplate(obj) {
    const addingBookmark = `
      <form id="js-add-bookmark-form">
        <h3>Create a Bookmark:</h3>
        <input type="text" placeholder="title" name="title">
        <input type="url" placeholder="url" name="url">
        <textarea rows="4" col="50" name="desc" placeholder="enter your description here..."></textarea>
        <div class="radio-container">
          <input type="radio" value=5 name="rating" id="rating5stars">
          <label for="rating5stars">5 stars</label>
          <input type="radio" value=4 name="rating" id="rating4stars">
          <label for="rating4stars">4 stars</label>
          <input type="radio" value=3 name="rating" id="rating3stars">
          <label for="rating3stars">3 stars</label>
          <input type="radio" value=2 name="rating" id="rating2stars">
          <label for="rating2stars">2 stars</label>
          <input type="radio" value=1 name="rating" id="rating1stars">
          <label for="rating1stars">1 stars</label>
        </div>
        <button class="btn back-to-default">Back</button>
        <button class="btn"type="submit">Submit</button>
      </form>
    `;

    const clearMinRating = '<button class="btn clear-min-rating">Clear Min Rating</button>';
    const minRatingString = `Min Rating: ${store.minRating} ${clearMinRating}`;
    const defaultControlsView = `
      <button class="btn add-bookmark">Add Bookmark</button>
      <select class="min-rating">
        <option>Minimum Rating</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      ${store.minRating ? minRatingString: ''}
    `;

    const template = obj.adding ? addingBookmark : defaultControlsView;

    return template;
  }


  function generateBookmarkTemplate (bookmark) {

    let template;

    // attempt at dynamically putting the checked class on those star spans
    // function generateRating (bookmark) {
    //   const rating = bookmark.rating;
    //   const checked = '<span class="fa fa-star checked"></span>';
    //   const unchecked = '<span class="fa fa-star"></span>';
    //   const ratings = [];       			
    //   for (let i = 1; i <= 5; i++) {
    //     if (rating < i) {
    //       ratings.push(checked);
    //     } else ratings.push(unchecked);
    //   }

    //   ratings.forEach(rating => {
    //     $('.rating').html(ratings);
    //   });
    // }

    const condensedBookmark = `
      <li class="js-bookmark" data-item-id="${bookmark.id}">
        <h3>${bookmark.title}</h3>
        <div class="rating">
          <span class="fa fa-star ${bookmark.rating >= 1 ? 'checked' : ''}"></span>
          <span class="fa fa-star ${bookmark.rating >= 2 ? 'checked' : ''}"></span>
          <span class="fa fa-star ${bookmark.rating >= 3 ? 'checked' : ''}"></span>
          <span class="fa fa-star ${bookmark.rating >= 4 ? 'checked' : ''}"></span>
          <span class="fa fa-star ${bookmark.rating >= 5 ? 'checked' : ''}"></span>
        </div>
        <button class="btn expand">Expand</button>
        <button class="btn remove">Remove</button>
      </li>
    `;


    const expandedBookmark = `
      <li class="js-bookmark expanded" data-item-id="${bookmark.id}">
        <h3>${bookmark.title}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        <button class="btn" onclick="location.href='${bookmark.url}'" type="button">Visit Site</button>
        <div class="rating">
          <span class="fa fa-star ${bookmark.rating >= 1 ? 'checked' : ''}"></span>
          <span class="fa fa-star ${bookmark.rating >= 2 ? 'checked' : ''}"></span>
          <span class="fa fa-star ${bookmark.rating >= 3 ? 'checked' : ''}"></span>
          <span class="fa fa-star ${bookmark.rating >= 4 ? 'checked' : ''}"></span>
          <span class="fa fa-star ${bookmark.rating >= 5 ? 'checked' : ''}"></span>
        </div>
        <button class="btn collapse">Collapse</button>
        <button class="btn remove">Remove</button>
      </li>
    `;

    if (bookmark.expanded) {
      template = expandedBookmark;
    } else {
      template = condensedBookmark;
    }

    return template;
  }


  return {
    generateBookmarkTemplate,
    generateControlsTemplate,
  };
}());