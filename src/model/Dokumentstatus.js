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
    root.ProffixRestApiRequestSammlung.Dokumentstatus = factory(root.ProffixRestApiRequestSammlung.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Dokumentstatus model module.
   * @module model/Dokumentstatus
   * @version 1.0
   */

  /**
   * Constructs a new <code>Dokumentstatus</code>.
   * @alias module:model/Dokumentstatus
   * @class
   * @param dokumentstatusNr {String} 
   */
  var exports = function(dokumentstatusNr) {
    var _this = this;

    _this['DokumentstatusNr'] = dokumentstatusNr;
  };

  /**
   * Constructs a <code>Dokumentstatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Dokumentstatus} obj Optional instance to populate.
   * @return {module:model/Dokumentstatus} The populated <code>Dokumentstatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('DokumentstatusNr')) {
        obj['DokumentstatusNr'] = ApiClient.convertToType(data['DokumentstatusNr'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} DokumentstatusNr
   */
  exports.prototype['DokumentstatusNr'] = undefined;



  return exports;
}));


