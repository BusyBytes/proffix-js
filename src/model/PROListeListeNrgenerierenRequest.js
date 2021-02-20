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
    define(['ApiClient', 'model/Selektionen1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Selektionen1'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.PROListeListeNrgenerierenRequest = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.Selektionen1);
  }
}(this, function(ApiClient, Selektionen1) {
  'use strict';




  /**
   * The PROListeListeNrgenerierenRequest model module.
   * @module model/PROListeListeNrgenerierenRequest
   * @version 1.0
   */

  /**
   * Constructs a new <code>PROListeListeNrgenerierenRequest</code>.
   * @alias module:model/PROListeListeNrgenerierenRequest
   * @class
   * @param selektionen {Array.<module:model/Selektionen1>} 
   */
  var exports = function(selektionen) {
    var _this = this;

    _this['Selektionen'] = selektionen;
  };

  /**
   * Constructs a <code>PROListeListeNrgenerierenRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PROListeListeNrgenerierenRequest} obj Optional instance to populate.
   * @return {module:model/PROListeListeNrgenerierenRequest} The populated <code>PROListeListeNrgenerierenRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Selektionen')) {
        obj['Selektionen'] = ApiClient.convertToType(data['Selektionen'], [Selektionen1]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Selektionen1>} Selektionen
   */
  exports.prototype['Selektionen'] = undefined;



  return exports;
}));

