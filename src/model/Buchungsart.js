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
    root.ProffixRestApiRequestSammlung.Buchungsart = factory(root.ProffixRestApiRequestSammlung.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Buchungsart model module.
   * @module model/Buchungsart
   * @version 1.0
   */

  /**
   * Constructs a new <code>Buchungsart</code>.
   * @alias module:model/Buchungsart
   * @class
   * @param buchungsartNr {String} 
   */
  var exports = function(buchungsartNr) {
    var _this = this;

    _this['BuchungsartNr'] = buchungsartNr;
  };

  /**
   * Constructs a <code>Buchungsart</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Buchungsart} obj Optional instance to populate.
   * @return {module:model/Buchungsart} The populated <code>Buchungsart</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('BuchungsartNr')) {
        obj['BuchungsartNr'] = ApiClient.convertToType(data['BuchungsartNr'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} BuchungsartNr
   */
  exports.prototype['BuchungsartNr'] = undefined;



  return exports;
}));


