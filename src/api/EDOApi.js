/**
 * PROFFIX REST API Request Sammlung
 * Dies ist eine Request-Sammlung der PROFFIX REST API, welche das PROFFIX REST API Entwicklerhandbuch unter [https://www.proffix.net/entwickler/restapi/handbuch](https://www.proffix.net/entwickler/restapi/handbuch) ergänzt.
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.EDOApi = factory(root.ProffixRestApiRequestSammlung.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * EDO service.
   * @module api/EDOApi
   * @version 1.0
   */

  /**
   * Constructs a new EDOApi. 
   * @alias module:api/EDOApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * EDO/SSCCNummer/{SSCCNummerNr}
     * @param {String} contentType 
     * @param {String} pxSessionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.eDOSSCCNummerSSCCNummerNrWithHttpInfo = function(contentType, pxSessionId) {
      var postBody = null;

      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling eDOSSCCNummerSSCCNummerNr");
      }

      // verify the required parameter 'pxSessionId' is set
      if (pxSessionId === undefined || pxSessionId === null) {
        throw new Error("Missing the required parameter 'pxSessionId' when calling eDOSSCCNummerSSCCNummerNr");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Content-Type': contentType,
        'PxSessionId': pxSessionId
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/EDO/SSCCNummer/1', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * EDO/SSCCNummer/{SSCCNummerNr}
     * @param {String} contentType 
     * @param {String} pxSessionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.eDOSSCCNummerSSCCNummerNr = function(contentType, pxSessionId) {
      return this.eDOSSCCNummerSSCCNummerNrWithHttpInfo(contentType, pxSessionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));