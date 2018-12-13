'use strict';
/* global $, templates,store */

const bookmarkList = (function () {

  function generateBookmarkString (bookmarkList) {
    const bookmarks = bookmarkList.map(bookmark => templates.generateBookmarkTemplate(bookmark));
    return bookmarks.join('');
  }

  function render () {
    let bookmarks = [...store.bookmarks];
    console.log('`render` ran');
    const bookmarkListItemsString = generateBookmarkString(bookmarks);
    $('.js-controls-container')
    $('.js-bookmark-list').html(bookmarkListItemsString);
  }

  function handleAddBookmarkSubmit () {
    // this function will be responsible for listening for the submit even on the 
    // add bookmark form ('#js-add-bookmark-form')
    // prevent default form behavior
    // grab data from form (will use another function for this)
    // clear all form fields (prob break into another function)
    // submit post request to API with data from the form
    // 
  }

  function bindEventListeners() {
    // this function will take in any function that uses and event listener
    // it will then be passes to the $.document.ready() in index.js so our
    // listeners can be bound at page load
  }
  return {
    render,
    bindEventListeners,
  };
}());
