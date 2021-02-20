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
    root.ProffixRestApiRequestSammlung.Buchungsbewegungen = factory(root.ProffixRestApiRequestSammlung.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Buchungsbewegungen model module.
   * @module model/Buchungsbewegungen
   * @version 1.0
   */

  /**
   * Constructs a new <code>Buchungsbewegungen</code>.
   * @alias module:model/Buchungsbewegungen
   * @class
   * @param sollkonto {String} 
   * @param habenkonto {String} 
   * @param kostenstelle {String} 
   * @param kostenart {String} 
   * @param prozent {Number} 
   */
  var exports = function(sollkonto, habenkonto, kostenstelle, kostenart, prozent) {
    var _this = this;

    _this['Sollkonto'] = sollkonto;
    _this['Habenkonto'] = habenkonto;
    _this['Kostenstelle'] = kostenstelle;
    _this['Kostenart'] = kostenart;
    _this['Prozent'] = prozent;
  };

  /**
   * Constructs a <code>Buchungsbewegungen</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Buchungsbewegungen} obj Optional instance to populate.
   * @return {module:model/Buchungsbewegungen} The populated <code>Buchungsbewegungen</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Sollkonto')) {
        obj['Sollkonto'] = ApiClient.convertToType(data['Sollkonto'], 'String');
      }
      if (data.hasOwnProperty('Habenkonto')) {
        obj['Habenkonto'] = ApiClient.convertToType(data['Habenkonto'], 'String');
      }
      if (data.hasOwnProperty('Kostenstelle')) {
        obj['Kostenstelle'] = ApiClient.convertToType(data['Kostenstelle'], 'String');
      }
      if (data.hasOwnProperty('Kostenart')) {
        obj['Kostenart'] = ApiClient.convertToType(data['Kostenart'], 'String');
      }
      if (data.hasOwnProperty('Prozent')) {
        obj['Prozent'] = ApiClient.convertToType(data['Prozent'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} Sollkonto
   */
  exports.prototype['Sollkonto'] = undefined;
  /**
   * @member {String} Habenkonto
   */
  exports.prototype['Habenkonto'] = undefined;
  /**
   * @member {String} Kostenstelle
   */
  exports.prototype['Kostenstelle'] = undefined;
  /**
   * @member {String} Kostenart
   */
  exports.prototype['Kostenart'] = undefined;
  /**
   * @member {Number} Prozent
   */
  exports.prototype['Prozent'] = undefined;



  return exports;
}));

