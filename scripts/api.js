'use strict';
/* global $*/

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/peter';

  const getItems = function (callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
  };

  const apiRequest = (method, data, success, error, id) => {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method,
      contentType: 'application/json',
      data,
      success,
      error
    });
  };

  const createItem = function (obj, successCallback, errorCallback) {
    const newItem = JSON.stringify(obj);
    // apiRequest('POST', newItem, successCallback, errorCallback);
    console.log('`createItem` invokation works');
  };

  const updateItem = function (id, updateData, callback) {
    const jsonUpdateData = JSON.stringify(updateData);
    // apiRequest('PATCH', jsonUpdateData, callback, callback, id);
    console.log('`updateItem` invokation works');
  };

  const deleteItem = function (id, callback) {
    // apiRequest('DELETE', callback, id);
    console.log('`deleteItem` invokation works');
  };


  
  return {
    getItems,
    createItem,
    updateItem,
    deleteItem,
  };
}());