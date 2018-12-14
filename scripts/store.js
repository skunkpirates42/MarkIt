'use strict';
/* global Bookmark*/
const store = (function () {

  // mock data to see if render works *** REMOVE WHEN DONE -- in the returned obj at boottom too
  const bookmark1 = Bookmark.create('coding', 4, 'http://www.madeitup.com');

  const addBookmark = function (bookmark) {
    this.bookmarks.push(bookmark);
  };

  const findById = function (id) {
    // find an item in bookmarks array by id and return it
    return this.bookmarks.find(bookmark => bookmark.id === id);
  };

  const findAndDelete = function (id) {
    this.bookmarks = this.bookmarks.filter(bookmark => bookmark.id !== id);
  };

  const toggleIsEditing = function (id) {
    const editingBookmark = this.findById(id);
    editingBookmark.isEditing = !editingBookmark.isEditing;
  };

  const toggleExpanded = function (id) {
    const expandedBookmark = this.findById(id);
    expandedBookmark.expanded = !expandedBookmark.expanded;
  };

  const setMinRating = function (num) {
    this.minRating = num;
  };

  const toggleAdding = function () {
    this.adding = !this.adding;
  };

  const toggleLoading = function () {
    this.loading = !this.loading;
  };



  return {
    bookmarks: [bookmark1],
    minRating: null,
    adding: false,
    error: null,
    loading: false,

    addBookmark,
    findById,
    toggleExpanded,
    toggleIsEditing,
    findAndDelete,
    setMinRating,
    toggleAdding,
    toggleLoading,
  };
}());