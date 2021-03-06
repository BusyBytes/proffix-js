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
    define(['ApiClient', 'model/Adresse', 'model/Prioritaet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Adresse'), require('./Prioritaet'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.BASKundeKundeNr = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.Adresse, root.ProffixRestApiRequestSammlung.Prioritaet);
  }
}(this, function(ApiClient, Adresse, Prioritaet) {
  'use strict';




  /**
   * The BASKundeKundeNr model module.
   * @module model/BASKundeKundeNr
   * @version 1.0
   */

  /**
   * Constructs a new <code>BASKundeKundeNr</code>.
   * @alias module:model/BASKundeKundeNr
   * @class
   * @param kundeNr {Number} 
   * @param adresse {module:model/Adresse} 
   * @param prioritaet {module:model/Prioritaet} 
   * @param vertragstyp {String} 
   * @param geloescht {Boolean} 
   * @param erstelltAm {String} 
   * @param erstelltVon {String} 
   * @param geaendertAm {String} 
   * @param geaendertVon {String} 
   * @param zusatzfelder {Object} 
   */
  var exports = function(kundeNr, adresse, prioritaet, vertragstyp, geloescht, erstelltAm, erstelltVon, geaendertAm, geaendertVon, zusatzfelder) {
    var _this = this;

    _this['KundeNr'] = kundeNr;
    _this['Adresse'] = adresse;
    _this['Prioritaet'] = prioritaet;
    _this['Vertragstyp'] = vertragstyp;
    _this['Geloescht'] = geloescht;
    _this['ErstelltAm'] = erstelltAm;
    _this['ErstelltVon'] = erstelltVon;
    _this['GeaendertAm'] = geaendertAm;
    _this['GeaendertVon'] = geaendertVon;
    _this['Zusatzfelder'] = zusatzfelder;
  };

  /**
   * Constructs a <code>BASKundeKundeNr</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BASKundeKundeNr} obj Optional instance to populate.
   * @return {module:model/BASKundeKundeNr} The populated <code>BASKundeKundeNr</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('KundeNr')) {
        obj['KundeNr'] = ApiClient.convertToType(data['KundeNr'], 'Number');
      }
      if (data.hasOwnProperty('Adresse')) {
        obj['Adresse'] = Adresse.constructFromObject(data['Adresse']);
      }
      if (data.hasOwnProperty('Prioritaet')) {
        obj['Prioritaet'] = Prioritaet.constructFromObject(data['Prioritaet']);
      }
      if (data.hasOwnProperty('Vertragstyp')) {
        obj['Vertragstyp'] = ApiClient.convertToType(data['Vertragstyp'], 'String');
      }
      if (data.hasOwnProperty('Geloescht')) {
        obj['Geloescht'] = ApiClient.convertToType(data['Geloescht'], 'Boolean');
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
   * @member {Number} KundeNr
   */
  exports.prototype['KundeNr'] = undefined;
  /**
   * @member {module:model/Adresse} Adresse
   */
  exports.prototype['Adresse'] = undefined;
  /**
   * @member {module:model/Prioritaet} Prioritaet
   */
  exports.prototype['Prioritaet'] = undefined;
  /**
   * @member {String} Vertragstyp
   */
  exports.prototype['Vertragstyp'] = undefined;
  /**
   * @member {Boolean} Geloescht
   */
  exports.prototype['Geloescht'] = undefined;
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


