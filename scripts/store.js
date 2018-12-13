'use strict';
const store = (function () {

  return {
    bookmarks: [],
    minRating: null,
    adding: false,
    loading: false,
    error: '',
  }
}());