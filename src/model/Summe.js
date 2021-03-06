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
    root.ProffixRestApiRequestSammlung.Summe = factory(root.ProffixRestApiRequestSammlung.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Summe model module.
   * @module model/Summe
   * @version 1.0
   */

  /**
   * Constructs a new <code>Summe</code>.
   * @alias module:model/Summe
   * @class
   * @param kontotyp {Number} 
   * @param summe {Number} 
   */
  var exports = function(kontotyp, summe) {
    var _this = this;

    _this['Kontotyp'] = kontotyp;
    _this['Summe'] = summe;
  };

  /**
   * Constructs a <code>Summe</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Summe} obj Optional instance to populate.
   * @return {module:model/Summe} The populated <code>Summe</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Kontotyp')) {
        obj['Kontotyp'] = ApiClient.convertToType(data['Kontotyp'], 'Number');
      }
      if (data.hasOwnProperty('Summe')) {
        obj['Summe'] = ApiClient.convertToType(data['Summe'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} Kontotyp
   */
  exports.prototype['Kontotyp'] = undefined;
  /**
   * @member {Number} Summe
   */
  exports.prototype['Summe'] = undefined;



  return exports;
}));


