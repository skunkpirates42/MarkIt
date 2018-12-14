'use strict';
/* global $, bookmarkList */

$.fn.extend({
  serializeJSON: function() {
    const formData = new FormData(this[0]);
    const obj = {};
    formData.forEach((val, key) => {
      obj[key] = val;
    });
    return JSON.stringify(obj);
  },
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
  api.updateItem();
});