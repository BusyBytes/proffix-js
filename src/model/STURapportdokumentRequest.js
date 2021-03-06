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
    define(['ApiClient', 'model/Rapport'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Rapport'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.STURapportdokumentRequest = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.Rapport);
  }
}(this, function(ApiClient, Rapport) {
  'use strict';




  /**
   * The STURapportdokumentRequest model module.
   * @module model/STURapportdokumentRequest
   * @version 1.0
   */

  /**
   * Constructs a new <code>STURapportdokumentRequest</code>.
   * @alias module:model/STURapportdokumentRequest
   * @class
   * @param rapportdokumentNr {Number} 
   * @param bemerkungen {String} 
   * @param bezeichnung {String} 
   * @param dateiNr {String} 
   * @param datum {String} 
   * @param dokumentgruppe {String} 
   * @param modul {String} 
   * @param rapport {module:model/Rapport} 
   */
  var exports = function(rapportdokumentNr, bemerkungen, bezeichnung, dateiNr, datum, dokumentgruppe, modul, rapport) {
    var _this = this;

    _this['RapportdokumentNr'] = rapportdokumentNr;
    _this['Bemerkungen'] = bemerkungen;
    _this['Bezeichnung'] = bezeichnung;
    _this['DateiNr'] = dateiNr;
    _this['Datum'] = datum;
    _this['Dokumentgruppe'] = dokumentgruppe;
    _this['Modul'] = modul;
    _this['Rapport'] = rapport;
  };

  /**
   * Constructs a <code>STURapportdokumentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/STURapportdokumentRequest} obj Optional instance to populate.
   * @return {module:model/STURapportdokumentRequest} The populated <code>STURapportdokumentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('RapportdokumentNr')) {
        obj['RapportdokumentNr'] = ApiClient.convertToType(data['RapportdokumentNr'], 'Number');
      }
      if (data.hasOwnProperty('Bemerkungen')) {
        obj['Bemerkungen'] = ApiClient.convertToType(data['Bemerkungen'], 'String');
      }
      if (data.hasOwnProperty('Bezeichnung')) {
        obj['Bezeichnung'] = ApiClient.convertToType(data['Bezeichnung'], 'String');
      }
      if (data.hasOwnProperty('DateiNr')) {
        obj['DateiNr'] = ApiClient.convertToType(data['DateiNr'], 'String');
      }
      if (data.hasOwnProperty('Datum')) {
        obj['Datum'] = ApiClient.convertToType(data['Datum'], 'String');
      }
      if (data.hasOwnProperty('Dokumentgruppe')) {
        obj['Dokumentgruppe'] = ApiClient.convertToType(data['Dokumentgruppe'], 'String');
      }
      if (data.hasOwnProperty('Modul')) {
        obj['Modul'] = ApiClient.convertToType(data['Modul'], 'String');
      }
      if (data.hasOwnProperty('Rapport')) {
        obj['Rapport'] = Rapport.constructFromObject(data['Rapport']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} RapportdokumentNr
   */
  exports.prototype['RapportdokumentNr'] = undefined;
  /**
   * @member {String} Bemerkungen
   */
  exports.prototype['Bemerkungen'] = undefined;
  /**
   * @member {String} Bezeichnung
   */
  exports.prototype['Bezeichnung'] = undefined;
  /**
   * @member {String} DateiNr
   */
  exports.prototype['DateiNr'] = undefined;
  /**
   * @member {String} Datum
   */
  exports.prototype['Datum'] = undefined;
  /**
   * @member {String} Dokumentgruppe
   */
  exports.prototype['Dokumentgruppe'] = undefined;
  /**
   * @member {String} Modul
   */
  exports.prototype['Modul'] = undefined;
  /**
   * @member {module:model/Rapport} Rapport
   */
  exports.prototype['Rapport'] = undefined;



  return exports;
}));


