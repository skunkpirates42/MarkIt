'use strict';
/* global $, bookmarkList */

$.fn.extend({
  serializeJSON: function() {
    console.log(this);
    const formData = new FormData(this[0]);
    const obj = {};
    formData.forEach((val, key) => {
      obj[key] = val;
    });
    return JSON.stringify(obj);
  }
});

$(function () {
  bookmarkList.bindEventListeners();
  bookmarkList.render();
});