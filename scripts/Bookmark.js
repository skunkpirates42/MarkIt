'use strict';
/* global cuid */

const Bookmark = (function () {

  const create = function (title, rating, url) {
    
    return {
      id: cuid(),
      title,
      rating,
      url,
      expanded: false, 
      isEditing: false,
    };
  };

  return {
    create,
  };
}());