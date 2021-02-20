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
    root.ProffixRestApiRequestSammlung.FIBKostenartRequest = factory(root.ProffixRestApiRequestSammlung.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FIBKostenartRequest model module.
   * @module model/FIBKostenartRequest
   * @version 1.0
   */

  /**
   * Constructs a new <code>FIBKostenartRequest</code>.
   * @alias module:model/FIBKostenartRequest
   * @class
   * @param kostenartNr {String} 
   * @param bezeichnung {String} 
   * @param budgetCode {Number} 
   * @param sperre {String} 
   * @param verantwortlicher {String} 
   * @param zusatzfelder {Object} 
   */
  var exports = function(kostenartNr, bezeichnung, budgetCode, sperre, verantwortlicher, zusatzfelder) {
    var _this = this;

    _this['KostenartNr'] = kostenartNr;
    _this['Bezeichnung'] = bezeichnung;
    _this['BudgetCode'] = budgetCode;
    _this['Sperre'] = sperre;
    _this['Verantwortlicher'] = verantwortlicher;
    _this['Zusatzfelder'] = zusatzfelder;
  };

  /**
   * Constructs a <code>FIBKostenartRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FIBKostenartRequest} obj Optional instance to populate.
   * @return {module:model/FIBKostenartRequest} The populated <code>FIBKostenartRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('KostenartNr')) {
        obj['KostenartNr'] = ApiClient.convertToType(data['KostenartNr'], 'String');
      }
      if (data.hasOwnProperty('Bezeichnung')) {
        obj['Bezeichnung'] = ApiClient.convertToType(data['Bezeichnung'], 'String');
      }
      if (data.hasOwnProperty('BudgetCode')) {
        obj['BudgetCode'] = ApiClient.convertToType(data['BudgetCode'], 'Number');
      }
      if (data.hasOwnProperty('Sperre')) {
        obj['Sperre'] = ApiClient.convertToType(data['Sperre'], 'String');
      }
      if (data.hasOwnProperty('Verantwortlicher')) {
        obj['Verantwortlicher'] = ApiClient.convertToType(data['Verantwortlicher'], 'String');
      }
      if (data.hasOwnProperty('Zusatzfelder')) {
        obj['Zusatzfelder'] = ApiClient.convertToType(data['Zusatzfelder'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} KostenartNr
   */
  exports.prototype['KostenartNr'] = undefined;
  /**
   * @member {String} Bezeichnung
   */
  exports.prototype['Bezeichnung'] = undefined;
  /**
   * @member {Number} BudgetCode
   */
  exports.prototype['BudgetCode'] = undefined;
  /**
   * @member {String} Sperre
   */
  exports.prototype['Sperre'] = undefined;
  /**
   * @member {String} Verantwortlicher
   */
  exports.prototype['Verantwortlicher'] = undefined;
  /**
   * @member {Object} Zusatzfelder
   */
  exports.prototype['Zusatzfelder'] = undefined;



  return exports;
}));

