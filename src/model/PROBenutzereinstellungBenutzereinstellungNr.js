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
    root.ProffixRestApiRequestSammlung.PROBenutzereinstellungBenutzereinstellungNr = factory(root.ProffixRestApiRequestSammlung.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PROBenutzereinstellungBenutzereinstellungNr model module.
   * @module model/PROBenutzereinstellungBenutzereinstellungNr
   * @version 1.0
   */

  /**
   * Constructs a new <code>PROBenutzereinstellungBenutzereinstellungNr</code>.
   * @alias module:model/PROBenutzereinstellungBenutzereinstellungNr
   * @class
   * @param level {String} 
   * @param schluessel {String} 
   * @param wert {String} 
   * @param erstelltAm {String} 
   * @param erstelltVon {String} 
   * @param geaendertAm {String} 
   * @param geaendertVon {String} 
   */
  var exports = function(level, schluessel, wert, erstelltAm, erstelltVon, geaendertAm, geaendertVon) {
    var _this = this;

    _this['Level'] = level;
    _this['Schluessel'] = schluessel;
    _this['Wert'] = wert;
    _this['ErstelltAm'] = erstelltAm;
    _this['ErstelltVon'] = erstelltVon;
    _this['GeaendertAm'] = geaendertAm;
    _this['GeaendertVon'] = geaendertVon;
  };

  /**
   * Constructs a <code>PROBenutzereinstellungBenutzereinstellungNr</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PROBenutzereinstellungBenutzereinstellungNr} obj Optional instance to populate.
   * @return {module:model/PROBenutzereinstellungBenutzereinstellungNr} The populated <code>PROBenutzereinstellungBenutzereinstellungNr</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Level')) {
        obj['Level'] = ApiClient.convertToType(data['Level'], 'String');
      }
      if (data.hasOwnProperty('Schluessel')) {
        obj['Schluessel'] = ApiClient.convertToType(data['Schluessel'], 'String');
      }
      if (data.hasOwnProperty('Wert')) {
        obj['Wert'] = ApiClient.convertToType(data['Wert'], 'String');
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
    }
    return obj;
  }

  /**
   * @member {String} Level
   */
  exports.prototype['Level'] = undefined;
  /**
   * @member {String} Schluessel
   */
  exports.prototype['Schluessel'] = undefined;
  /**
   * @member {String} Wert
   */
  exports.prototype['Wert'] = undefined;
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



  return exports;
}));

