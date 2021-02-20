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
    define(['ApiClient', 'model/Artikel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Artikel'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.LAGArtikelbildRequest = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.Artikel);
  }
}(this, function(ApiClient, Artikel) {
  'use strict';




  /**
   * The LAGArtikelbildRequest model module.
   * @module model/LAGArtikelbildRequest
   * @version 1.0
   */

  /**
   * Constructs a new <code>LAGArtikelbildRequest</code>.
   * @alias module:model/LAGArtikelbildRequest
   * @class
   * @param artikelbildNr {Number} 
   * @param bezeichnung {String} 
   * @param anzeigen {Boolean} 
   * @param artikel {module:model/Artikel} 
   * @param dateiNr {String} 
   * @param hauptbild {Boolean} 
   * @param webshop {Boolean} 
   * @param webshopBildErstellt {Boolean} 
   * @param dateipfad {String} 
   * @param erstelltAm {String} 
   * @param erstelltVon {String} 
   * @param geaendertAm {String} 
   * @param geaendertVon {String} 
   * @param zusatzfelder {Object} 
   */
  var exports = function(artikelbildNr, bezeichnung, anzeigen, artikel, dateiNr, hauptbild, webshop, webshopBildErstellt, dateipfad, erstelltAm, erstelltVon, geaendertAm, geaendertVon, zusatzfelder) {
    var _this = this;

    _this['ArtikelbildNr'] = artikelbildNr;
    _this['Bezeichnung'] = bezeichnung;
    _this['Anzeigen'] = anzeigen;
    _this['Artikel'] = artikel;
    _this['DateiNr'] = dateiNr;
    _this['Hauptbild'] = hauptbild;
    _this['Webshop'] = webshop;
    _this['WebshopBildErstellt'] = webshopBildErstellt;
    _this['Dateipfad'] = dateipfad;
    _this['ErstelltAm'] = erstelltAm;
    _this['ErstelltVon'] = erstelltVon;
    _this['GeaendertAm'] = geaendertAm;
    _this['GeaendertVon'] = geaendertVon;
    _this['Zusatzfelder'] = zusatzfelder;
  };

  /**
   * Constructs a <code>LAGArtikelbildRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LAGArtikelbildRequest} obj Optional instance to populate.
   * @return {module:model/LAGArtikelbildRequest} The populated <code>LAGArtikelbildRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ArtikelbildNr')) {
        obj['ArtikelbildNr'] = ApiClient.convertToType(data['ArtikelbildNr'], 'Number');
      }
      if (data.hasOwnProperty('Bezeichnung')) {
        obj['Bezeichnung'] = ApiClient.convertToType(data['Bezeichnung'], 'String');
      }
      if (data.hasOwnProperty('Anzeigen')) {
        obj['Anzeigen'] = ApiClient.convertToType(data['Anzeigen'], 'Boolean');
      }
      if (data.hasOwnProperty('Artikel')) {
        obj['Artikel'] = Artikel.constructFromObject(data['Artikel']);
      }
      if (data.hasOwnProperty('DateiNr')) {
        obj['DateiNr'] = ApiClient.convertToType(data['DateiNr'], 'String');
      }
      if (data.hasOwnProperty('Hauptbild')) {
        obj['Hauptbild'] = ApiClient.convertToType(data['Hauptbild'], 'Boolean');
      }
      if (data.hasOwnProperty('Webshop')) {
        obj['Webshop'] = ApiClient.convertToType(data['Webshop'], 'Boolean');
      }
      if (data.hasOwnProperty('WebshopBildErstellt')) {
        obj['WebshopBildErstellt'] = ApiClient.convertToType(data['WebshopBildErstellt'], 'Boolean');
      }
      if (data.hasOwnProperty('Dateipfad')) {
        obj['Dateipfad'] = ApiClient.convertToType(data['Dateipfad'], 'String');
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
   * @member {Number} ArtikelbildNr
   */
  exports.prototype['ArtikelbildNr'] = undefined;
  /**
   * @member {String} Bezeichnung
   */
  exports.prototype['Bezeichnung'] = undefined;
  /**
   * @member {Boolean} Anzeigen
   */
  exports.prototype['Anzeigen'] = undefined;
  /**
   * @member {module:model/Artikel} Artikel
   */
  exports.prototype['Artikel'] = undefined;
  /**
   * @member {String} DateiNr
   */
  exports.prototype['DateiNr'] = undefined;
  /**
   * @member {Boolean} Hauptbild
   */
  exports.prototype['Hauptbild'] = undefined;
  /**
   * @member {Boolean} Webshop
   */
  exports.prototype['Webshop'] = undefined;
  /**
   * @member {Boolean} WebshopBildErstellt
   */
  exports.prototype['WebshopBildErstellt'] = undefined;
  /**
   * @member {String} Dateipfad
   */
  exports.prototype['Dateipfad'] = undefined;
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

