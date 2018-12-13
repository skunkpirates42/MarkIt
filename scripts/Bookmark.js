'use strict';
/* global cuid */

const Bookmark = (function () {

  const create = function (title, rating) {
    
    return {
      id: cuid(),
      title,
      rating,
      expanded: false, 
      isEditing: false,
    };
  };

  return {
    create,
  };
}());