'use strict';
/* global $*/

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/peter/bookmarks';

  const getBookmarks = function (onSuccess) {
    $.getJSON(`${BASE_URL}`, onSuccess);
  };

  const apiRequest = (method, payLoad, success, error, id) => {
    $.ajax({
      url: id ? `${BASE_URL}/${id}`: BASE_URL,
      method,
      contentType: 'application/json',
      payLoad,
      success,
      error
    });
  };

  const createBookmark = function (bookmark, onSuccess, onError) {
    const payLoad = JSON.stringify(bookmark);
    apiRequest('POST', payLoad, onSuccess, onError);
    console.log('`createItem` invokation works');
  };

  const updateBookmark = function (id, updateData, onSuccess, onError) {
    const payLoad = JSON.stringify(updateData);
    apiRequest('PATCH', payLoad, onSuccess, onError, id);
    console.log('`updateItem` invokation works');
  };

  const deleteBookmark = function (id, onSucess, onError) {
    apiRequest('DELETE', onSucess, onError, id);
    console.log('`deleteItem` invokation works');
  };


  
  return {
    getBookmarks,
    createBookmark,
    updateBookmark,
    deleteBookmark,
  };
}());