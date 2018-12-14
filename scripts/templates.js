'use strict';
/* global store */

const templates = (function () {

  function generateControlsTemplate(obj) {
    const addingBookmark = `
      <form id="js-add-bookmark-form">
        <h3>Create a Bookmark:</h3>
        <input type="text" placeholder="title" name="title">
        <input type="url" placeholder="url" name="url">
        <textarea rows="4" col="50" name="desc"></textarea>
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
        <button class="back-to-default">Back</button>
        <button type="submit">Submit</button>
      </form>
    `;

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
    `;

    const template = obj.adding ? addingBookmark : defaultControlsView;

    return template;
  }


  function generateBookmarkTemplate (bookmark) {

    let template;
    const editBtnStatus = bookmark.isEditing ? 'disabled' : '';


    // !!!!!! How do I dynamically render the checked attr on each span based
    // on the rating property on bookmark?? !!!!!!
    // const bookmarkRating = ` 
    // <span class="fa fa-star checked"></span>
    // <span class="fa fa-star checked"></span>
    // <span class="fa fa-star checked"></span>
    // <span class="fa fa-star"></span>
    // <span class="fa fa-star"></span>`

    // const rating = ;

    const condensedBookmark = `
      <li class="js-boomark" data-item-id="${bookmark.id}">
        <h3>${bookmark.title}</h3>
        <div class="rating">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div>
        <button class="btn expand">Expand</button>
        <button class="btn remove">Remove</button>
        <button class="btn edit" ${editBtnStatus}>edit</button>
      </li>
    `;


    const expandedBookmark = `
      <li class="js-boomark expanded" data-item-id="${bookmark.id}>
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
        <button class="btn collapse">Collapse</button>
        <button class="btn remove">Remove</button>
      </li>
    `;

    const editingBookmark = `
      <li class="js-boomark expanded" data-item-id="${bookmark.id}>
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