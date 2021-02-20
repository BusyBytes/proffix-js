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
    define(['ApiClient', 'model/Selektionen', 'model/Sortierungen'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Selektionen'), require('./Sortierungen'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.PROListeListeNr = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.Selektionen, root.ProffixRestApiRequestSammlung.Sortierungen);
  }
}(this, function(ApiClient, Selektionen, Sortierungen) {
  'use strict';




  /**
   * The PROListeListeNr model module.
   * @module model/PROListeListeNr
   * @version 1.0
   */

  /**
   * Constructs a new <code>PROListeListeNr</code>.
   * @alias module:model/PROListeListeNr
   * @class
   * @param listeNr {Number} 
   * @param name {String} 
   * @param bezeichnung {String} 
   * @param art {String} 
   * @param modul {String} 
   * @param datenbank {String} 
   * @param sortierungen {Array.<module:model/Sortierungen>} 
   * @param selektionen {Array.<module:model/Selektionen>} 
   * @param erstelltAm {String} 
   * @param erstelltVon {String} 
   * @param geaendertAm {String} 
   * @param geaendertVon {String} 
   */
  var exports = function(listeNr, name, bezeichnung, art, modul, datenbank, sortierungen, selektionen, erstelltAm, erstelltVon, geaendertAm, geaendertVon) {
    var _this = this;

    _this['ListeNr'] = listeNr;
    _this['Name'] = name;
    _this['Bezeichnung'] = bezeichnung;
    _this['Art'] = art;
    _this['Modul'] = modul;
    _this['Datenbank'] = datenbank;
    _this['Sortierungen'] = sortierungen;
    _this['Selektionen'] = selektionen;
    _this['ErstelltAm'] = erstelltAm;
    _this['ErstelltVon'] = erstelltVon;
    _this['GeaendertAm'] = geaendertAm;
    _this['GeaendertVon'] = geaendertVon;
  };

  /**
   * Constructs a <code>PROListeListeNr</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PROListeListeNr} obj Optional instance to populate.
   * @return {module:model/PROListeListeNr} The populated <code>PROListeListeNr</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ListeNr')) {
        obj['ListeNr'] = ApiClient.convertToType(data['ListeNr'], 'Number');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Bezeichnung')) {
        obj['Bezeichnung'] = ApiClient.convertToType(data['Bezeichnung'], 'String');
      }
      if (data.hasOwnProperty('Art')) {
        obj['Art'] = ApiClient.convertToType(data['Art'], 'String');
      }
      if (data.hasOwnProperty('Modul')) {
        obj['Modul'] = ApiClient.convertToType(data['Modul'], 'String');
      }
      if (data.hasOwnProperty('Datenbank')) {
        obj['Datenbank'] = ApiClient.convertToType(data['Datenbank'], 'String');
      }
      if (data.hasOwnProperty('Sortierungen')) {
        obj['Sortierungen'] = ApiClient.convertToType(data['Sortierungen'], [Sortierungen]);
      }
      if (data.hasOwnProperty('Selektionen')) {
        obj['Selektionen'] = ApiClient.convertToType(data['Selektionen'], [Selektionen]);
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
   * @member {Number} ListeNr
   */
  exports.prototype['ListeNr'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} Bezeichnung
   */
  exports.prototype['Bezeichnung'] = undefined;
  /**
   * @member {String} Art
   */
  exports.prototype['Art'] = undefined;
  /**
   * @member {String} Modul
   */
  exports.prototype['Modul'] = undefined;
  /**
   * @member {String} Datenbank
   */
  exports.prototype['Datenbank'] = undefined;
  /**
   * @member {Array.<module:model/Sortierungen>} Sortierungen
   */
  exports.prototype['Sortierungen'] = undefined;
  /**
   * @member {Array.<module:model/Selektionen>} Selektionen
   */
  exports.prototype['Selektionen'] = undefined;
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

