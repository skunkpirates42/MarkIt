'use strict';
/* global $, templates,store */

const bookmarkList = (function () {

  // functions that have to do with rendering
  function generateControlsString () {
    const controls = templates.generateControlsTemplate(store);
    return controls;
  }

  function generateBookmarkString (bookmarkList) {
    const bookmarks = bookmarkList.map(bookmark => templates.generateBookmarkTemplate(bookmark));
    return bookmarks.join('');
  }

  function render () {
    let bookmarks = [...store.bookmarks];
    console.log('`render` ran');
    const controlsString = generateControlsString();
    const bookmarkListItemsString = generateBookmarkString(bookmarks);
    $('.js-controls-container').html(controlsString);
    $('.js-bookmark-list').html(bookmarkListItemsString);
  }

  function getItemIdFromBookmark (bookmark) {
    return $(bookmark)
      .closest('.js-bookmark')
      .data('item-id');
  }

  // Add bookmark form functionality
  function toggleAddAndRender() {
    store.toggleAdding();
    render();
  }

  function handleBackOnAddForm () {
    $('.js-controls-container').on('click', '.back-to-default', function () {
      toggleAddAndRender();
    });
  }

  function handleAddBookmarkForm() {
    $('.js-controls-container').on('click', '.add-bookmark', function () {
      toggleAddAndRender();
    });
  }

  function handleAddBookmarkSubmit () {
    // this function will be responsible for listening for the submit even on the 
    // add bookmark form ('#js-add-bookmark-form')
    handleAddBookmarkForm();
    $('.js-controls-container').on('submit', '#js-add-bookmark-form', function (e) {
    // prevent default form behavior
      e.preventDefault();
      // grab data from form (will use another function for this)
      const formData = $(e.target).serializeJSON();
      // clear all form fields (prob break into another function
      $(e.target).children().val('');
      toggleAddAndRender();
      console.log(formData);
    });
    
    // submit post request to API with data from the form
    // 
  }

  function handleEditSubmit () {
    // this function will handle the submit event on the edit form 
    // i'll grab the data from the form upon submitting
    // the func will then call to the api with the new data
    // and re-render the page with the new edited data
  }

  function handleEditBookMark () {
    // this function will be responsible for editing the bookmark while it's in the list
    // first I'll listen for a click even on the edit button
    // that will cause the isEditing property on the individual bookmark object that matches
    // the one that was clicked
    // will re-render the book mark view as to be able to edit it with a form
    // handle the submit
    // function handleEditSubmit()
  }

  function bindEventListeners() {
    // this function will invoke any function that uses an event listener
    // it will then be passed to the $.document.ready() in index.js so the
    // listeners can be bound at page load
    handleAddBookmarkSubmit();
    handleEditBookMark();
    handleEditSubmit();
    handleBackOnAddForm();
  }
  return {
    render,
    bindEventListeners,
  };
}());