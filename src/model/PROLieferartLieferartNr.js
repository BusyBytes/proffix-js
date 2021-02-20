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
    root.ProffixRestApiRequestSammlung.PROLieferartLieferartNr = factory(root.ProffixRestApiRequestSammlung.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PROLieferartLieferartNr model module.
   * @module model/PROLieferartLieferartNr
   * @version 1.0
   */

  /**
   * Constructs a new <code>PROLieferartLieferartNr</code>.
   * @alias module:model/PROLieferartLieferartNr
   * @class
   * @param lieferartNr {String} 
   * @param bezeichnung {String} 
   * @param betrag {Number} 
   * @param steuercode {String} 
   * @param konto {String} 
   * @param kostenstelle {String} 
   * @param kostenart {String} 
   * @param inaktiv {Boolean} 
   * @param erstelltAm {String} 
   * @param erstelltVon {String} 
   * @param geaendertAm {String} 
   * @param geaendertVon {String} 
   * @param zusatzfelder {Object} 
   */
  var exports = function(lieferartNr, bezeichnung, betrag, steuercode, konto, kostenstelle, kostenart, inaktiv, erstelltAm, erstelltVon, geaendertAm, geaendertVon, zusatzfelder) {
    var _this = this;

    _this['LieferartNr'] = lieferartNr;
    _this['Bezeichnung'] = bezeichnung;
    _this['Betrag'] = betrag;
    _this['Steuercode'] = steuercode;
    _this['Konto'] = konto;
    _this['Kostenstelle'] = kostenstelle;
    _this['Kostenart'] = kostenart;
    _this['Inaktiv'] = inaktiv;
    _this['ErstelltAm'] = erstelltAm;
    _this['ErstelltVon'] = erstelltVon;
    _this['GeaendertAm'] = geaendertAm;
    _this['GeaendertVon'] = geaendertVon;
    _this['Zusatzfelder'] = zusatzfelder;
  };

  /**
   * Constructs a <code>PROLieferartLieferartNr</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PROLieferartLieferartNr} obj Optional instance to populate.
   * @return {module:model/PROLieferartLieferartNr} The populated <code>PROLieferartLieferartNr</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('LieferartNr')) {
        obj['LieferartNr'] = ApiClient.convertToType(data['LieferartNr'], 'String');
      }
      if (data.hasOwnProperty('Bezeichnung')) {
        obj['Bezeichnung'] = ApiClient.convertToType(data['Bezeichnung'], 'String');
      }
      if (data.hasOwnProperty('Betrag')) {
        obj['Betrag'] = ApiClient.convertToType(data['Betrag'], 'Number');
      }
      if (data.hasOwnProperty('Steuercode')) {
        obj['Steuercode'] = ApiClient.convertToType(data['Steuercode'], 'String');
      }
      if (data.hasOwnProperty('Konto')) {
        obj['Konto'] = ApiClient.convertToType(data['Konto'], 'String');
      }
      if (data.hasOwnProperty('Kostenstelle')) {
        obj['Kostenstelle'] = ApiClient.convertToType(data['Kostenstelle'], 'String');
      }
      if (data.hasOwnProperty('Kostenart')) {
        obj['Kostenart'] = ApiClient.convertToType(data['Kostenart'], 'String');
      }
      if (data.hasOwnProperty('Inaktiv')) {
        obj['Inaktiv'] = ApiClient.convertToType(data['Inaktiv'], 'Boolean');
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
   * @member {String} LieferartNr
   */
  exports.prototype['LieferartNr'] = undefined;
  /**
   * @member {String} Bezeichnung
   */
  exports.prototype['Bezeichnung'] = undefined;
  /**
   * @member {Number} Betrag
   */
  exports.prototype['Betrag'] = undefined;
  /**
   * @member {String} Steuercode
   */
  exports.prototype['Steuercode'] = undefined;
  /**
   * @member {String} Konto
   */
  exports.prototype['Konto'] = undefined;
  /**
   * @member {String} Kostenstelle
   */
  exports.prototype['Kostenstelle'] = undefined;
  /**
   * @member {String} Kostenart
   */
  exports.prototype['Kostenart'] = undefined;
  /**
   * @member {Boolean} Inaktiv
   */
  exports.prototype['Inaktiv'] = undefined;
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

