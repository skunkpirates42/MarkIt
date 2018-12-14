'use strict';
/* global cuid */

const Bookmark = (function () {

  const create = function (title, url, desc, rating) {
    
    return {
      id: cuid(),
      title,
      url,
      desc,
      rating,
      expanded: false, 
      isEditing: false,
    };
  };

  return {
    create,
  };
}());