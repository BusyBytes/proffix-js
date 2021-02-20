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
    root.ProffixRestApiRequestSammlung.PROFelddefinitionTabellennameFeldname = factory(root.ProffixRestApiRequestSammlung.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PROFelddefinitionTabellennameFeldname model module.
   * @module model/PROFelddefinitionTabellennameFeldname
   * @version 1.0
   */

  /**
   * Constructs a new <code>PROFelddefinitionTabellennameFeldname</code>.
   * @alias module:model/PROFelddefinitionTabellennameFeldname
   * @class
   * @param tabellenname {String} 
   * @param feldname {String} 
   * @param tabellentitel {String} 
   * @param feldtitel {String} 
   * @param dezimalstellen {Number} 
   * @param datentyp {String} 
   * @param standardwert {String} 
   * @param laenge {Number} 
   * @param auswahl {Array.<String>} 
   * @param zusatztabelle {Boolean} 
   * @param zusatzfeld {Boolean} 
   */
  var exports = function(tabellenname, feldname, tabellentitel, feldtitel, dezimalstellen, datentyp, standardwert, laenge, auswahl, zusatztabelle, zusatzfeld) {
    var _this = this;

    _this['Tabellenname'] = tabellenname;
    _this['Feldname'] = feldname;
    _this['Tabellentitel'] = tabellentitel;
    _this['Feldtitel'] = feldtitel;
    _this['Dezimalstellen'] = dezimalstellen;
    _this['Datentyp'] = datentyp;
    _this['Standardwert'] = standardwert;
    _this['Laenge'] = laenge;
    _this['Auswahl'] = auswahl;
    _this['Zusatztabelle'] = zusatztabelle;
    _this['Zusatzfeld'] = zusatzfeld;
  };

  /**
   * Constructs a <code>PROFelddefinitionTabellennameFeldname</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PROFelddefinitionTabellennameFeldname} obj Optional instance to populate.
   * @return {module:model/PROFelddefinitionTabellennameFeldname} The populated <code>PROFelddefinitionTabellennameFeldname</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Tabellenname')) {
        obj['Tabellenname'] = ApiClient.convertToType(data['Tabellenname'], 'String');
      }
      if (data.hasOwnProperty('Feldname')) {
        obj['Feldname'] = ApiClient.convertToType(data['Feldname'], 'String');
      }
      if (data.hasOwnProperty('Tabellentitel')) {
        obj['Tabellentitel'] = ApiClient.convertToType(data['Tabellentitel'], 'String');
      }
      if (data.hasOwnProperty('Feldtitel')) {
        obj['Feldtitel'] = ApiClient.convertToType(data['Feldtitel'], 'String');
      }
      if (data.hasOwnProperty('Dezimalstellen')) {
        obj['Dezimalstellen'] = ApiClient.convertToType(data['Dezimalstellen'], 'Number');
      }
      if (data.hasOwnProperty('Datentyp')) {
        obj['Datentyp'] = ApiClient.convertToType(data['Datentyp'], 'String');
      }
      if (data.hasOwnProperty('Standardwert')) {
        obj['Standardwert'] = ApiClient.convertToType(data['Standardwert'], 'String');
      }
      if (data.hasOwnProperty('Laenge')) {
        obj['Laenge'] = ApiClient.convertToType(data['Laenge'], 'Number');
      }
      if (data.hasOwnProperty('Auswahl')) {
        obj['Auswahl'] = ApiClient.convertToType(data['Auswahl'], ['String']);
      }
      if (data.hasOwnProperty('Zusatztabelle')) {
        obj['Zusatztabelle'] = ApiClient.convertToType(data['Zusatztabelle'], 'Boolean');
      }
      if (data.hasOwnProperty('Zusatzfeld')) {
        obj['Zusatzfeld'] = ApiClient.convertToType(data['Zusatzfeld'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} Tabellenname
   */
  exports.prototype['Tabellenname'] = undefined;
  /**
   * @member {String} Feldname
   */
  exports.prototype['Feldname'] = undefined;
  /**
   * @member {String} Tabellentitel
   */
  exports.prototype['Tabellentitel'] = undefined;
  /**
   * @member {String} Feldtitel
   */
  exports.prototype['Feldtitel'] = undefined;
  /**
   * @member {Number} Dezimalstellen
   */
  exports.prototype['Dezimalstellen'] = undefined;
  /**
   * @member {String} Datentyp
   */
  exports.prototype['Datentyp'] = undefined;
  /**
   * @member {String} Standardwert
   */
  exports.prototype['Standardwert'] = undefined;
  /**
   * @member {Number} Laenge
   */
  exports.prototype['Laenge'] = undefined;
  /**
   * @member {Array.<String>} Auswahl
   */
  exports.prototype['Auswahl'] = undefined;
  /**
   * @member {Boolean} Zusatztabelle
   */
  exports.prototype['Zusatztabelle'] = undefined;
  /**
   * @member {Boolean} Zusatzfeld
   */
  exports.prototype['Zusatzfeld'] = undefined;



  return exports;
}));

