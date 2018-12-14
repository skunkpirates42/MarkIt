'use strict';
/* global $, bookmarkList, api, store */

$.fn.extend({
  serializeJSON: function() {
    const formData = new FormData(this[0]);
    const obj = {};
    formData.forEach((val, key) => {
      obj[key] = val;
    });
    return JSON.stringify(obj);
  },

  // might not need this...
  getStoreData: function() {
    const formData = new FormData(this[0]);
    const obj = {};
    formData.forEach((val, key) => {
      obj[key] = val;
    });
    return obj;
  }
});

$(function () {
  bookmarkList.bindEventListeners();
  bookmarkList.render();

  api.getBookmarks((bookmarks) => {
    bookmarks.forEach(bookmark => store.addBookmark(bookmark));
    bookmarkList.render();
  });
});