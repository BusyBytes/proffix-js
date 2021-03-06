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
    root.ProffixRestApiRequestSammlung.Betraege = factory(root.ProffixRestApiRequestSammlung.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Betraege model module.
   * @module model/Betraege
   * @version 1.0
   */

  /**
   * Constructs a new <code>Betraege</code>.
   * @alias module:model/Betraege
   * @class
   * @param betragFW {Number} 
   * @param betragSW {Number} 
   * @param buchungstext {String} 
   * @param kostenart {String} 
   * @param kostenstelle {String} 
   */
  var exports = function(betragFW, betragSW, buchungstext, kostenart, kostenstelle) {
    var _this = this;

    _this['BetragFW'] = betragFW;
    _this['BetragSW'] = betragSW;
    _this['Buchungstext'] = buchungstext;
    _this['Kostenart'] = kostenart;
    _this['Kostenstelle'] = kostenstelle;
  };

  /**
   * Constructs a <code>Betraege</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Betraege} obj Optional instance to populate.
   * @return {module:model/Betraege} The populated <code>Betraege</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('BetragFW')) {
        obj['BetragFW'] = ApiClient.convertToType(data['BetragFW'], 'Number');
      }
      if (data.hasOwnProperty('BetragSW')) {
        obj['BetragSW'] = ApiClient.convertToType(data['BetragSW'], 'Number');
      }
      if (data.hasOwnProperty('Buchungstext')) {
        obj['Buchungstext'] = ApiClient.convertToType(data['Buchungstext'], 'String');
      }
      if (data.hasOwnProperty('Kostenart')) {
        obj['Kostenart'] = ApiClient.convertToType(data['Kostenart'], 'String');
      }
      if (data.hasOwnProperty('Kostenstelle')) {
        obj['Kostenstelle'] = ApiClient.convertToType(data['Kostenstelle'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} BetragFW
   */
  exports.prototype['BetragFW'] = undefined;
  /**
   * @member {Number} BetragSW
   */
  exports.prototype['BetragSW'] = undefined;
  /**
   * @member {String} Buchungstext
   */
  exports.prototype['Buchungstext'] = undefined;
  /**
   * @member {String} Kostenart
   */
  exports.prototype['Kostenart'] = undefined;
  /**
   * @member {String} Kostenstelle
   */
  exports.prototype['Kostenstelle'] = undefined;



  return exports;
}));


