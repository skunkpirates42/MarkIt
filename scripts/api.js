'use strict';
/* global $*/

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/peter';

  const getItems = function (onSuccess) {
    $.getJSON(`${BASE_URL}/items`, onSuccess);
  };

  const apiRequest = (method, payLoad, success, error, id) => {
    $.ajax({
      url: id ? `${BASE_URL}/items/${id}`: `${BASE_URL}/items`,
      method,
      contentType: 'application/json',
      payLoad,
      success,
      error
    });
  };

  const createItem = function (bookmark, onSuccess, onError) {
    const payLoad = JSON.stringify(bookmark);
    apiRequest('POST', payLoad, onSuccess, onError);
    console.log('`createItem` invokation works');
  };

  const updateItem = function (id, updateData, onSuccess, onError) {
    const payLoad = JSON.stringify(updateData);
    apiRequest('PATCH', payLoad, onSuccess, onError, id);
    console.log('`updateItem` invokation works');
  };

  const deleteItem = function (id, onSucess, onError) {
    apiRequest('DELETE', onSucess, onError, id);
    console.log('`deleteItem` invokation works');
  };


  
  return {
    getItems,
    createItem,
    updateItem,
    deleteItem,
  };
}());