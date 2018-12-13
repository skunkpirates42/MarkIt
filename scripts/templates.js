'use strict';
/* global store */

const templates = (function () {
  function generateTemplate (bookmark) {

    let template;

    const condensedBookmark = `
      <li class="boomark">
        <h3>Sample bookmark title</h3>
        <div class="rating">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div>
        <button class="btn remove">Remove</button>
      </li>
    `;

    const addingBookmark = `
      <form id="add-bookmark-form">
        <h3>Create a Bookmark:</h3>
        <input type="text" placeholder="title">
        <input type="url" placeholder="url">
        <textarea rows="4" col="50"></textarea>
        <div class="radio-container">
          <input type="radio" value="5 stars" name="rating" id="rating5stars">
          <label for="rating5stars">5 stars</label>
          <input type="radio" value="4 stars" name="rating" id="rating4stars">
          <label for="rating4stars">4 stars</label>
          <input type="radio" value="3 stars" name="rating" id="rating3stars">
          <label for="rating3stars">3 stars</label>
          <input type="radio" value="2 stars" name="rating" id="rating2stars">
          <label for="rating2stars">2 stars</label>
          <input type="radio" value="1 stars" name="rating" id="rating1stars">
          <label for="rating1stars">1 stars</label>
        </div>
        <button>Back</button>
        <button type="submit">Submit</button>
      </form>
    `;

    const expandedBookmark = `
      <li class="boomark expanded">
        <h3>${bookmark.title}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        <button class="btn visit-site">Visit Site</button>
        <div class="rating">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div>
        <button class="btn remove">Remove</button>
      </li>
    `;

    const editingBookmark = `
      <li class="boomark expanded">
        <h3>Sample bookmark title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        <button class="btn visit-site">Visit Site</button>
        <div class="rating">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div>
        <button class="btn remove">Remove</button>
      </li>
    `;
    template = condensedBookmark;

    return template;
  }


  return {
    generateTemplate
  };
}());