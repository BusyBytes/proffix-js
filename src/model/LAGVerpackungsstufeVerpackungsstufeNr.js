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
    root.ProffixRestApiRequestSammlung.LAGVerpackungsstufeVerpackungsstufeNr = factory(root.ProffixRestApiRequestSammlung.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LAGVerpackungsstufeVerpackungsstufeNr model module.
   * @module model/LAGVerpackungsstufeVerpackungsstufeNr
   * @version 1.0
   */

  /**
   * Constructs a new <code>LAGVerpackungsstufeVerpackungsstufeNr</code>.
   * @alias module:model/LAGVerpackungsstufeVerpackungsstufeNr
   * @class
   * @param verpackungsstufeNr {Number} 
   * @param bezeichnung {String} 
   * @param indikator {Number} 
   * @param erstelltAm {String} 
   * @param erstelltVon {String} 
   * @param geaendertAm {String} 
   * @param geaendertVon {String} 
   * @param zusatzfelder {Object} 
   */
  var exports = function(verpackungsstufeNr, bezeichnung, indikator, erstelltAm, erstelltVon, geaendertAm, geaendertVon, zusatzfelder) {
    var _this = this;

    _this['VerpackungsstufeNr'] = verpackungsstufeNr;
    _this['Bezeichnung'] = bezeichnung;
    _this['Indikator'] = indikator;
    _this['ErstelltAm'] = erstelltAm;
    _this['ErstelltVon'] = erstelltVon;
    _this['GeaendertAm'] = geaendertAm;
    _this['GeaendertVon'] = geaendertVon;
    _this['Zusatzfelder'] = zusatzfelder;
  };

  /**
   * Constructs a <code>LAGVerpackungsstufeVerpackungsstufeNr</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LAGVerpackungsstufeVerpackungsstufeNr} obj Optional instance to populate.
   * @return {module:model/LAGVerpackungsstufeVerpackungsstufeNr} The populated <code>LAGVerpackungsstufeVerpackungsstufeNr</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('VerpackungsstufeNr')) {
        obj['VerpackungsstufeNr'] = ApiClient.convertToType(data['VerpackungsstufeNr'], 'Number');
      }
      if (data.hasOwnProperty('Bezeichnung')) {
        obj['Bezeichnung'] = ApiClient.convertToType(data['Bezeichnung'], 'String');
      }
      if (data.hasOwnProperty('Indikator')) {
        obj['Indikator'] = ApiClient.convertToType(data['Indikator'], 'Number');
      }
      if (data.hasOwnProperty('ErstelltAm')) {
        obj['ErstelltAm'] = ApiClient.convertToType(data['ErstelltAm'], 'String');
      }
      if (data.hasOwnProperty('ErstelltVon')) {
        obj['ErstelltVon'] = ApiClient.convertToType(data['ErstelltVon'], 'String');
      }
      if (data.hasOwnProperty('GeaendertAm')) {
        obj['GeaendertAm'] = ApiClient.convertToType(data['GeaendertAm'], 'String');
      }
      if (data.hasOwnProperty('GeaendertVon')) {
        obj['GeaendertVon'] = ApiClient.convertToType(data['GeaendertVon'], 'String');
      }
      if (data.hasOwnProperty('Zusatzfelder')) {
        obj['Zusatzfelder'] = ApiClient.convertToType(data['Zusatzfelder'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {Number} VerpackungsstufeNr
   */
  exports.prototype['VerpackungsstufeNr'] = undefined;
  /**
   * @member {String} Bezeichnung
   */
  exports.prototype['Bezeichnung'] = undefined;
  /**
   * @member {Number} Indikator
   */
  exports.prototype['Indikator'] = undefined;
  /**
   * @member {String} ErstelltAm
   */
  exports.prototype['ErstelltAm'] = undefined;
  /**
   * @member {String} ErstelltVon
   */
  exports.prototype['ErstelltVon'] = undefined;
  /**
   * @member {String} GeaendertAm
   */
  exports.prototype['GeaendertAm'] = undefined;
  /**
   * @member {String} GeaendertVon
   */
  exports.prototype['GeaendertVon'] = undefined;
  /**
   * @member {Object} Zusatzfelder
   */
  exports.prototype['Zusatzfelder'] = undefined;



  return exports;
}));


