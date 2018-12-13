'use strict';
/* global $, templates,store */

const bookmarkList = (function () {

  function generateBookmarkString (bookmarkList) {
    const bookmarks = bookmarkList.map(bookmark => templates.generateTemplate(bookmark));
    return bookmarks.join('');
  }

  function render () {
    let bookmarks = [...store.bookmarks];
    console.log('`render` ran');
    const bookmarkListItemsString = generateBookmarkString(bookmarks);
    $('.js-bookmark-list').html(bookmarkListItemsString);
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
