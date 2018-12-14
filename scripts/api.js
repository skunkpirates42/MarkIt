'use strict';
/* global $*/

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/peter/bookmarks';

  const getBookmarks = function (onSuccess) {
    $.getJSON(`${BASE_URL}`, onSuccess);
  };

  const apiRequest = (method, payLoad, success, error, id) => {
    console.log('making a req....',  {method, payLoad, success, error, id})
    $.ajax({
      url: id ? `${BASE_URL}/${id}`: BASE_URL,
      method,
      contentType: 'application/json',
      data: payLoad ? payLoad : null,
      success,
      error
    });
  };

  const createBookmark = function (bookmark, onSuccess, onError) {
    const payLoad = bookmark;
    apiRequest('POST', payLoad, onSuccess, onError);
  };

  const updateBookmark = function (id, bookmark, onSuccess, onError) {
    const payLoad = JSON.stringify(bookmark);
    apiRequest('PATCH', payLoad, onSuccess, onError, id);
  };

  const deleteBookmark = function (id, onSucess, onError) {
    apiRequest('DELETE', null, onSucess, onError, id);
  };


  
  return {
    getBookmarks,
    createBookmark,
    updateBookmark,
    deleteBookmark,
  };
}());