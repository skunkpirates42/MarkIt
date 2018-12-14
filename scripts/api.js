'use strict';
/* global $*/

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/peter';

  const getItems = function (callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
  };

  const apiRequest = (method, data, success, error) => {
    $.ajax({
      url: `${BASE_URL}/items/`,
      method,
      contentType: 'application/json',
      data,
      success,
      error
    });
  };

  const createItem = function (name, successCallback, errorCallback) {
    const data = 
    apiRequest('POST', data, successCallback, errorCallback);
  };
  
  return {
    getItems,
    createItem,

  };
}());