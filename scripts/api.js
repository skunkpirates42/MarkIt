'use strict';
/* global $*/

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com';

  const apiRequest = (id, method, data, success, error) => {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method,
      contentType: 'application/json',
      data,
      success,
      error
    });
  };
  
  return {
    apiRequest,
  }
}());